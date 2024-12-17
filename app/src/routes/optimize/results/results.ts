import { sum } from "$lib/util";
import type { Source } from "../sources";

export function resultsMarkdown(portfolio: Array<[Source, number]>) {
  const labels = JSON.stringify(portfolio.map(([source]) => source.name))
  const values = JSON.stringify(portfolio.map(([, value]) => value))

  const quote = '```';

  const weightedCost = sum(portfolio.map(([source, value]) => source.cost * value)).toFixed(2)
  const weightedEmissions = sum(portfolio.map(([source, value]) => source.emissions * value)).toFixed(2)

  return `

# Optimization Results

## Optimal Energy Mix

${quote}plot
{
  "data": [
    {
      "labels": ${labels},
      "values": ${values},
      "type": "pie",
      "hole": 0.3,
      "textinfo": "label+percent",
      "name": "Energy Sources"
    }
  ],
  "layout": {
    "showlegend": false,
    "margin": {"l": 20, "r": 20, "t": 20, "b": 20}
  }
}
${quote}

## Key Performance Indicators

| **Metric**               | **Value**         |
|---------------------------|-------------------|
| Weighted Cost            | ${weightedCost}€/MWh        |
| Weighted Carbon Intensity | ${weightedEmissions} gCO2eq/kWh |

`
}