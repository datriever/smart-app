# Smart App
Schneider Smart App thing

## Installation

1. Create virtual env (first time)
  
  ```bash
  python3.11 -m venv .venv
  ```

2. Activate virtual env

  ```bash
  source .venv/bin/activate
  ```

3. Install dependencies

  ```bash
  pip install -r requirements.txt
  ```

## Features

### Portfolio Optimization

```python
from datriever.smart_app import portfolio

solar = portfolio.Source(cost=50, emissions=30, risk=0.05, p_min=0.1, p_max=0.7)
wind = portfolio.Source(cost=40, emissions=40, risk=0.1, p_min=0.05, p_max=0.7)
nuclear = portfolio.Source(cost=70, emissions=10, risk=0.2, p_min=0.05, p_max=0.6)

portfolio.optimize([solar, wind, nuclear], goals={'green': 0.5, 'cheap': 1})
# [0.25, 0.7, 0.05]

portfolio.cost([(0.5, solar), (0.3, wind), (0.2, nuclear)])
# 51.0	

portfolio.emissions([(0.5, solar), (0.3, wind), (0.2, nuclear)])
# 29.0

portfolio.risk([(0.5, solar), (0.3, wind), (0.2, nuclear)])
# 0.095
```
