from datetime import datetime as _datetime
from sqlmodel import SQLModel as _SQLModel, Field as _Field, Relationship as _Rel
from datriever.smart_app import solar_trading

class Source(_SQLModel, table=True):
    id: str = _Field(primary_key=True)
    name: str
    cost: float  # €/MWh
    emissions: float  # gCO2/kWh
    risk: float = 0  # Overall risk score
    p_min: float = 0  # Minimum proportion
    p_max: float = 1  # Maximum proportion
    economic_risk: float = 0
    operational_risk: float = 0
    regulatory_risk: float = 0
    environmental_risk: float = 0

    def update_risks(self, row, data):
        """Update risks by calling functions from calculate_risks.py."""
        from .calculate_risks import (
            calculate_economic_risk,
            calculate_operational_risk,
            assign_risk_by_type,
        )
        
        self.economic_risk = calculate_economic_risk(row, data)
        self.operational_risk = calculate_operational_risk(row, data)
        self.regulatory_risk = assign_risk_by_type(row['Instrument'], 'regulatory')
        self.environmental_risk = assign_risk_by_type(row['Instrument'], 'environmental')
        
        # Combine all risks into a single field
        self.risk = (
            0.5 * self.economic_risk
            + 0.5 * self.operational_risk
            + 0.25 * self.regulatory_risk
            + 0.25 * self.environmental_risk
        )


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
  
