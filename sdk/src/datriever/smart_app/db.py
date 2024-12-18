from datetime import datetime as _datetime
from sqlmodel import SQLModel as _SQLModel, Field as _Field, Relationship as _Rel
from datriever.smart_app import solar_trading

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

class SolarData(solar_trading.SiteData, _SQLModel, table=True):
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
    Portfolio(proportion=0.25, source=sources[4]), # type: ignore
  ]

  return sources, portfolio
  

