from typing_extensions import Iterable as _Iter, TypedDict as _TypedDict
from dataclasses import dataclass as _dataclass
from .calculate_risks import calculate_economic_risk, calculate_operational_risk, assign_risk_by_type
import pandas as pd

@_dataclass
class Source:
  cost: float
  """€/MWh"""
  emissions: float
  """gCO2/kWh"""
  risk: float = 0
  p_min: float = 0
  """Minimum proportion of the source in the portfolio"""
  p_max: float = 1
  """Maximum proportion of the source in the portfolio"""
  economic_risk: float = 0
  operational_risk: float = 0
  regulatory_risk: float = 0
  environmental_risk: float = 0

  def update_risks(self, row, data):
        """Update risks by calling functions from calculate_risks.py."""
        self.economic_risk = calculate_economic_risk(row, data)
        self.operational_risk = calculate_operational_risk(row, data)
        self.regulatory_risk = assign_risk_by_type(row['Instrument'], 'regulatory')
        self.environmental_risk = assign_risk_by_type(row['Instrument'], 'environmental')
        # Combine all risks into a single field
        self.risk = 0.5 * self.economic_risk + 0.5 * self.operational_risk+ \
                    0.25 * self.regulatory_risk + 0.25 * self.environmental_risk
        
        # Load the risk data
        data = pd.read_csv('data/risk_data.csv')

        # Create a list of Source objects and update risks dynamically
        sources = []
        for _, row in data.iterrows():
            source = Source(
                cost=row['CAPEX ($/kW)'],
                emissions=row['Fuel price ($/GJ)']
            )
            source.update_risks(row, data)
            sources.append(source)

        # Print the sources with updated risks
        for source in sources:
            print(source)

class Goals(_TypedDict, total=False):
  green: float
  """Weight assigned to minimizing emissions"""
  cheap: float
  """Weight assigned to minimizing cost"""
  safe: float
  """Weight assigned to minimizing risk"""

class Constraints(_TypedDict, total=False):
  max_cost: float
  max_emissions: float
  max_risk: float

def _cost_fn(source: Source, goals: Goals) -> float:
  c = 0
  if 'green' in goals:
    c += source.emissions * goals['green']
  if 'cheap' in goals:
    c += source.cost * goals['cheap']
  if 'safe' in goals:
    c += source.risk * goals['safe']
  return c

def _inequalities(sources: _Iter[Source], constraints: Constraints):
  if not constraints:
    return None, None
  
  A_ub = []
  b_ub = []

  # Add maximum cost constraint if specified
  if 'max_cost' in constraints:
    A_ub.append([src.cost for src in sources])  # Coefficients for the cost
    b_ub.append(constraints['max_cost'])       # Right-hand side: max_cost

  # Add maximum emissions constraint if specified
  if 'max_emissions' in constraints:
    A_ub.append([src.emissions for src in sources])  # Coefficients for emissions
    b_ub.append(constraints['max_emissions'])        # Right-hand side: max_emissions

  # Add maximum risk constraint if specified
  if 'max_risk' in constraints:
    A_ub.append([src.risk for src in sources])  # Coefficients for risk
    b_ub.append(constraints['max_risk'])       # Right-hand side: max_risk

  return A_ub, b_ub


def optimize(sources: _Iter[Source], *, goals: Goals, constraints: Constraints = {}) -> list[float] | None:
  """
  Optimize portfolio proportions to meet the specified goals and constraints
  - `goals`: minimization weights for emissions, cost, and risk
  - `constraints`: maximum weighted cost, emissions, and risk in the portfolio
  - Returns a list of proportions, where `proprortion[i]` corresponds to `sources[i]`
  """
  objective = [_cost_fn(src, goals) for src in sources]

  # Constraint: p1 + p2 + ... + pn = 1
  A_eq = [[1 for _ in sources]]
  b_eq = [1]

  A_ub, b_ub = _inequalities(sources, constraints)

  # p_min <= p_i <= p_max
  bounds = [(src.p_min, src.p_max) for src in sources]

  from scipy.optimize import linprog
  result = linprog(objective, A_eq=A_eq, b_eq=b_eq, A_ub=A_ub, b_ub=b_ub, bounds=bounds, method='highs')

  if result.success:
    return result.x.tolist()
  

def cost(portfolio: _Iter[tuple[float, Source]]) -> float:
  """Weighted cost of a portfolio"""
  return sum(p * src.cost for p, src in portfolio)

def emissions(portfolio: _Iter[tuple[float, Source]]) -> float:
  """Weighted emissions of a portfolio"""
  return sum(p * src.emissions for p, src in portfolio)

def risk(portfolio: _Iter[tuple[float, Source]]) -> float:
  """Weighted risk of a portfolio"""
  return sum(p * src.risk for p, src in portfolio)