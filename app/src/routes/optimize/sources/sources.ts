export type Source = {
  name: string
  cost: number
  emissions: number
  risk: number
  p_min?: number
  p_max?: number
}

export const DEFAULT_SOURCES: Source[] = [
  {
    name: 'Coal',
    cost: 50,
    emissions: 100,
    risk: 10,
    p_max: 0.1
  },
  {
    name: 'Natural Gas',
    cost: 40,
    emissions: 50,
    risk: 5,
    p_max: 0.3
  },
  {
    name: 'Solar',
    cost: 30,
    emissions: 10,
    risk: 1,
    p_max: 0.6
  },
  {
    name: 'Wind',
    cost: 20,
    emissions: 5,
    risk: 0.5,
    p_max: 0.8
  },
  {
    name: 'Hydro',
    cost: 10,
    emissions: 2,
    risk: 0.1,
    p_max: 1
  },
  {
    name: 'Nuclear',
    cost: 60,
    emissions: 20,
    risk: 2,
    p_max: 0.2
  },
  {
    name: 'Oil',
    cost: 45,
    emissions: 80,
    risk: 8,
    p_max: 0.2
  },
  {
    name: 'Geothermal',
    cost: 25,
    emissions: 10,
    risk: 1,
    p_max: 0.5
  }
]