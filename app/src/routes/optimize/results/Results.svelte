<script lang="ts" module>
  export type Props = {
    cost: boolean
    emissions: boolean
    risk: boolean
  }

</script>

<script lang="ts">
    import Markdown from "$lib/renderer";
    import type { Theme } from "$lib/renderer/Markdown.svelte";

  const { cost, emissions, risk }: Props = $props()

  const portfolio: Record<string, number> = {
    Wind: 0.1,
    Solar: 0.2,
    Hydro: 0.3,
    Nuclear: 0.4,
  }
  const labels = JSON.stringify(Object.keys(portfolio))
  const values = JSON.stringify(Object.values(portfolio))

  const quote = '```';

  const markdown = `

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
    "margin": {"l": 10, "r": 10, "t": 10, "b": 10}
  }
}
${quote}

## Key Performance Indicators

| **Metric**               | **Value**         |
|---------------------------|-------------------|
| Weighted Cost (LCOE)      | $65.93/MWh        |
| Weighted Carbon Intensity | 278.25 gCO2eq/kWh |

`;

  const theme: Theme = {
    table: {
      headerBg: '#444',                // Dark background for headers
      oddRowBg: '#2b2b2b',            // Dark grey for even rows
      oddRowFontColor: 'var(--color-text)',     // Light grey text for even rows
      oddRowHover: '#333',            // Slightly lighter grey for even row hover
      evenRowBg: '#1e1e1e',             // Slightly darker grey for odd rows
      evenRowFontColor: 'var(--color-text)',      // Light grey text for odd rows
      evenRowHover: '#333',             // Slightly lighter grey for odd row hover
      border: '1px solid #444',        // Medium grey border for cells
    },
    text: {
      h1Color: 'var(--color-h1)',
      h2Color: 'white',

    },
    plot: {
      paper_bgcolor: "#1b2925",
      font: { color: "#d4f0e4" },
      fillParent: 'width'
    }
  }

</script>


<Markdown {markdown} {theme} />