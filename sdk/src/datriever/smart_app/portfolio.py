from typing_extensions import Sequence as _Seq, TypedDict as _TypedDict
from dataclasses import dataclass as _dataclass

@_dataclass
class Source:
  cost: float
  emissions: float
  risk: float = 0
  p_min: float = 0
  p_max: float = 1

class Goals(_TypedDict, total=False):
  green: float
  cheap: float
  safe: float

class Constraints(_TypedDict, total=False):
  max_cost: float
  max_emissions: float
  max_risk: float

def cost(source: Source, goals: Goals) -> float:
  c = 0
  if 'green' in goals:
    c += source.emissions * goals['green']
  if 'cheap' in goals:
    c += source.cost * goals['cheap']
  if 'safe' in goals:
    c += source.risk * goals['safe']
  return c

def inequalities(sources: _Seq[Source], constraints: Constraints):
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


def optimize(sources: _Seq[Source], *, goals: Goals, constraints: Constraints = {}) -> list[float] | None:
  objective = [cost(src, goals) for src in sources]

  # Constraint: p1 + p2 + ... + pn = 1
  A_eq = [[1 for _ in sources]]
  b_eq = [1]

  A_ub, b_ub = inequalities(sources, constraints)

  # p_min <= p_i <= p_max
  bounds = [(src.p_min, src.p_max) for src in sources]

  from scipy.optimize import linprog
  result = linprog(objective, A_eq=A_eq, b_eq=b_eq, A_ub=A_ub, b_ub=b_ub, bounds=bounds, method='highs')

  if result.success:
    return result.x.tolist()
  