from datetime import datetime as _datetime, timedelta as _timedelta
import random as _random
from sqlmodel import SQLModel as _SQLModel, Field as _Field, Relationship as _Rel, Session as _Session
from datriever.smart_app import solar_trading, markets

class Source(_SQLModel, table=True):
  id: str = _Field(primary_key=True)
  name: str
  cost: float
  '''€/MWh'''
  emissions: float
  '''gCO2/kWh'''
  risk: float | None = None

class Portfolio(_SQLModel, table=True):
  sourceId: str = _Field(primary_key=True, foreign_key='source.id')
  proportion: float
  source: Source = _Rel()

class SolarData(_SQLModel, solar_trading.SiteData, table=True):
  time: _datetime = _Field(primary_key=True)

def mock_portfolio() -> tuple[list[Source], list[Portfolio]]:
  sources = [
    Source(id='bio', name='Biomass', cost=146.3, emissions=230, risk=None),
    Source(id='geo', name='Geothermal', cost=91.6, emissions=38, risk=None),
    Source(id='hydro', name='Hydro', cost=99.3, emissions=11, risk=None),
    Source(id='pv', name='PV', cost=121.8, emissions=36, risk=None),
    Source(id='wind', name='Wind', cost=96.7, emissions=13, risk=None),
    Source(id='nuclear', name='Nuclear', cost=116.5, emissions=5, risk=None),
    Source(id='coal', name='Coal', cost=78.6, emissions=1170, risk=None),
    Source(id='ng', name='Natural Gas', cost=46.8, emissions=520, risk=None),
    Source(id='grid', name='Grid', cost=150, emissions=154, risk=None)
  ]
    
  portfolio = [
    Portfolio(proportion=0.1, source=sources[0]), # type: ignore
    Portfolio(proportion=0.2, source=sources[1]), # type: ignore
    Portfolio(proportion=0.4, source=sources[2]), # type: ignore
    Portfolio(proportion=0.05, source=sources[3]), # type: ignore
    Portfolio(proportion=0.25, source=sources[-2]), # type: ignore
  ]

  return sources, portfolio
  

class Market(_SQLModel, markets.Market, table=True):
  id: str = _Field(primary_key=True)

class MarketCandle(_SQLModel, markets.Candle, table=True):
  marketId: str = _Field(primary_key=True, foreign_key='market.id')
  market: Market = _Rel()
  time: _datetime = _Field(primary_key=True)

class MarketPred(_SQLModel, markets.Pred, table=True):
  marketId: str = _Field(primary_key=True, foreign_key='market.id')
  market: Market = _Rel()
  time: _datetime = _Field(primary_key=True)

def mock_markets() -> list[Market]: 
  return [
    Market(id='omie-intra-day', name='OMIE Intra-Day', location='Iberian Peninsula', unit='€/MWh'),
    Market(id='omie-day-ahead', name='OMIE Day-Ahead', location='Iberian Peninsula', unit='€/MWh'),
    Market(id='epex-spot-intra-day', name='EPEX SPOT Intra-Day', location='Central Europe', unit='€/MWh'),
    Market(id='epex-spot-day-ahead', name='EPEX SPOT Day-Ahead', location='Central Europe', unit='€/MWh'),
    Market(id='n2ex-intra-day', name='N2EX Intra-Day', location='UK', unit='£/MWh'),
    Market(id='n2ex-day-ahead', name='N2EX Day-Ahead', location='UK', unit='£/MWh'),
    Market(id='nord-pool-intra-day', name='Nord Pool Intra-Day', location='Nordic Countries', unit='€/MWh'),
    Market(id='nord-pool-day-ahead', name='Nord Pool Day-Ahead', location='Nordic Countries', unit='€/MWh'),
    Market(id='eex-intra-day', name='EEX Intra-Day', location='Central Europe', unit='€/MWh'),
    Market(id='eex-day-ahead', name='EEX Day-Ahead', location='Central Europe', unit='€/MWh')
  ]


def create_mock_db(s: _Session):
  sources, pfolio = mock_portfolio()
  for src in sources:
    s.add(src)
  for p in pfolio:
    s.add(p)

  mkts = mock_markets()
  now = _datetime.now()
  start = now - _timedelta(weeks=4)
  end = now + _timedelta(weeks=2)
  for m in mkts:
    s.add(m)
    volatility = _random.uniform(0.01, 0.2)
    candles = markets.mock_candles(
      start=start, end=now, interval=_timedelta(hours=1),
      start_price=_random.uniform(250, 800),
      volatility=volatility,
      min_price=100
    )
    for c in candles:
      s.add(MarketCandle(market=m, time=c.time, open=c.open, close=c.close, high=c.high, low=c.low)) # type: ignore
      s.add(MarketPred(market=m, time=c.time, price=(c.high+c.low)/2)) # type: ignore

    preds = markets.mock_preds(
      start=now, end=end, interval=_timedelta(hours=1),
      start_price=candles[-1].close,
      volatility=volatility,
      min_price=10
    )
    for p in preds:
      s.add(MarketPred(market=m, time=p.time, price=p.price)) # type: ignore

  s.commit()