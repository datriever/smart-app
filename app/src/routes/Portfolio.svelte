<script lang="ts" module>
  import type { PortfolioSource } from "$lib/client";
  export type Props = {
    portfolio: PortfolioSource[]
  }

</script>

<script lang="ts">
  import Plotly, { type Data, type Layout } from "svelte-plotly.js";
  import { sum } from "$lib/util";

  const { portfolio }: Props = $props()

  const values = $derived(portfolio.map(p => p.proportion))
  const labels = $derived(portfolio.map(p => p.name))
  const weightedCost = $derived(sum(portfolio.map(p => p.proportion * p.cost)))
  const weightedEmissions = $derived(sum(portfolio.map(p => p.proportion * p.emissions)))

  const data: Data[] = $derived([
    {
      values, labels,
      type: "pie",
      marker: {
        colors: ["#a8f0c6", "#8fbf9d", "#f8b88b"], // Theme-aligned colors
      },
      textinfo: "label+percent",
    },
  ])

  const layout: Partial<Layout> = {
    paper_bgcolor: "#1b2925",
    plot_bgcolor: "#1b2925",
    margin: { l: 0, r: 0, t: 0, b: 0 },
    font: { color: "#d4f0e4" },
    showlegend: false,
  };
</script>

<!-- Pie Chart -->
<div class="card">
  <h2 style="margin-bottom: 0.4rem;">Your Portfolio</h2>
  <Plotly {data} {layout} fillParent="width" />
</div>

<!-- Indicators -->
<div class="card">
  <h2 style="margin-bottom: 0.4rem;">Key Indicators</h2>
  <p>Weighted Cost: <strong>{weightedCost.toFixed(2)}  €/MWh</strong></p>
  <p>CO₂ Intensity: <strong>{weightedEmissions.toFixed(2)} gCO₂/kWh</strong></p>
</div>


<style>
  .card {
    padding: 1rem;
    background-color: var(--color-bg-2);
    border-radius: 0.4rem;
    width: 100%;
  }
</style>