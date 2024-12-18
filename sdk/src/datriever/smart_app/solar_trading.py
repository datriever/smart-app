from typing_extensions import Sequence as _Seq
from datetime import datetime as _datetime
from dataclasses import dataclass as _dataclass

@_dataclass
class SiteData:
  time: _datetime
  site_consumption: float
  """kWh"""
  site_production: float
  """kWh"""
  omie_buy_price: float
  """€/MWh"""

  @property
  def gain(self):
    diff = self.site_production - self.site_consumption
    return diff * self.omie_buy_price / 1000
  
@_dataclass
class Gain:
  time: _datetime
  gain: float
  """€"""

def gains(data: _Seq[SiteData]) -> list[Gain]:
  """Get money from selling extra solar energy"""
  return [Gain(gain.time, gain.gain) for gain in data]