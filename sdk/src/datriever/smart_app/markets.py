from dataclasses import dataclass as _dataclass
from datetime import datetime as _datetime, timedelta as _timedelta
import random as _random

@_dataclass
class Market:
  id: str
  name: str
  location: str
  unit: str
  """e.g. €/MWh"""

@_dataclass
class Candle:
  time: _datetime
  open: float
  close: float
  high: float
  low: float

@_dataclass
class Pred:
  time: _datetime
  price: float


def mock_candles(
  *, start: _datetime, end: _datetime, interval: _timedelta,
  start_price: float, volatility: float = 0.01, min_price: float = 0
) -> list[Candle]:
  """Generate mock candles.
  - `volatility`: max change percentage per interval
  """
  candles = []
  time = start
  price = start_price
  while time < end:
    prices = [price + price*volatility*_random.uniform(-1, 1) for _ in range(4)]
    candles.append(Candle(time=time, open=prices[0], close=prices[-1], high=max(prices), low=min(prices)))
    time += interval
    price = max(
      price + price*volatility*_random.uniform(-1, 1),
      min_price
    )
  return candles


def mock_preds(
  *, start: _datetime, end: _datetime, interval: _timedelta,
  start_price: float, volatility: float = 0.01, min_price: float = 0
) -> list[Pred]:
  preds = []
  time = start
  price = start_price
  while time < end:
    price += price*volatility*_random.uniform(-1, 1)
    if price < min_price:
      price = start_price
    preds.append(Pred(time=time, price=price))
    time += interval
  return preds