from typing_extensions import TypedDict, NotRequired, Sequence as Seq
from fastapi import FastAPI, Response
from sqlalchemy import Engine
from sqlmodel import SQLModel, create_engine, select, Session
from datriever.smart_app import portfolio, db, solar_trading


def api(engine: Engine):

  app = FastAPI(generate_unique_id_function=lambda route: route.name)

  class OptimizeParams(TypedDict):
    sources: list[portfolio.Source]
    goals: portfolio.Goals
    constraints: portfolio.Constraints

  @app.post('/tools/optimize')
  def optimize_portfolio(params: OptimizeParams) -> list[float] | None:
    return portfolio.optimize(**params)

  @app.post('/tools/solar')
  def solar() -> list[solar_trading.Gain]:
    with Session(engine) as s:
      data = s.exec(select(db.SolarData)).all()
      return solar_trading.gains(data)
    

  @app.get('/data/markets')
  def get_markets() -> list[db.Market]:
    """Get all markets."""
    with Session(engine) as s:
      markets = s.exec(select(db.Market)).all()
      return [db.Market(id=m.id, name=m.name, location=m.location, unit=m.unit) for m in markets]
    
  class MarketPrices(TypedDict):
    candles: Seq[db.MarketCandle]
    preds: Seq[db.MarketPred]

  @app.get('/data/markets/{id}')
  def get_market_prices(id: str) -> MarketPrices:
    """Get all prices for a market."""
    with Session(engine) as s:
      candles = s.exec(select(db.MarketCandle).where(db.MarketCandle.marketId == id)).all()
      preds = s.exec(select(db.MarketPred).where(db.MarketPred.marketId == id)).all()
      return MarketPrices(candles=candles, preds=preds)


  class Source(TypedDict):
    name: str
    cost: float
    """€/MWh"""
    emissions: float
    """gCO2/kWh"""

  @app.get('/data/sources')
  def get_sources() -> list[Source]:
    """Get all energy sources."""
    with Session(engine) as s:
      srcs = s.exec(select(db.Source)).all()
      return [Source(name=src.name, cost=src.cost, emissions=src.emissions) for src in srcs]
    
  @app.post('/data/sources/{id}')
  def upsert_source(id: str, src: Source):
    """Create a new energy source."""
    with Session(engine) as s:
      s.merge(db.Source(id=id, **src))
      s.commit()

  class PortfolioSource(Source):
    proportion: float

  @app.get('/data/portfolio')
  def get_portfolio() -> list[PortfolioSource]:
    """Get all sources in the portfolio."""
    with Session(engine) as s:
      pfolio = s.exec(select(db.Portfolio)).all()
      return [
        PortfolioSource(name=s.source.name, cost=s.source.cost, emissions=s.source.emissions, proportion=s.proportion)
        for s in pfolio
      ]
  
  @app.post('/data/portfolio/{id}')
  def add_portfolio_source(id: str, proportion: float):
    """Add a new source to the portfolio."""
    with Session(engine) as s:
      if (src := s.exec(select(db.Source).where(db.Source.id == id)).first()):
        s.add(db.Portfolio(proportion=proportion, sourceId=src.id))
        s.commit()
      else:
        return Response(status_code=404)

  @app.get('/data/solar')
  def get_solar_data() -> list[solar_trading.SiteData]:
    """Get all solar data."""
    with Session(engine) as s:
      data = s.exec(select(db.SolarData)).all()
      return [solar_trading.SiteData(**d.model_dump()) for d in data]
    
  @app.post('/data/solar')
  def add_solar_data(data: solar_trading.SiteData):
    """Add new solar data."""
    with Session(engine) as s:
      s.add(db.SolarData(site_consumption=data.site_consumption, site_production=data.site_production, omie_buy_price=data.omie_buy_price, time=data.time))
      s.commit()

  return app





if __name__ == '__main__':
  
  from argparse import ArgumentParser

  parser = ArgumentParser()
  parser.add_argument('-p', '--port', type=int, default=8000)
  parser.add_argument('--host', type=str, default='0.0.0.0')
  parser.add_argument('--cors', type=str, default='*')

  parser.add_argument('--db', type=str, default=None, help='Database connection string')

  parser.add_argument('-g', '--clientgen', action='store_true')
  parser.add_argument('--output', type=str, default=None)

  parser.add_argument('--mock', action='store_true', help='Create mock data in the database')

  args = parser.parse_args()

  # GENERATE TYPESCRIPT CLIENT
  if args.clientgen:
    output_path = args.output
    if output_path is None:
      import os
      path = os.path.dirname(__file__)
      output_path = os.path.join(path, '..', 'app', 'src', 'lib', 'client')

    print(f'Generating client at {output_path}...')
    import sys
    from openapi_ts import generate_client
    app = api({}) # type: ignore
    generate_client(app.openapi(), output_path, logstream=sys.stdout)

  # RUN SERVER
  else:
    from fastapi.middleware.cors import CORSMiddleware
    import uvicorn

    conn_str = args.db
    if conn_str is None:
      import os
      path = os.path.dirname(__file__)
      conn_str = f'sqlite:///'+ os.path.join(path, 'data.db')

    engine = create_engine(conn_str)
    SQLModel.metadata.create_all(engine)


    if args.mock:
      with Session(engine) as s:
        db.create_mock_db(s)

    app = api(engine)
    app.add_middleware(CORSMiddleware, allow_origins=[args.cors], allow_credentials=True, allow_methods=['*'], allow_headers=['*'])
    uvicorn.run(app, host=args.host, port=args.port)
