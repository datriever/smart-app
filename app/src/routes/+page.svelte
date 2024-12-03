<script lang="ts">
  import Plotly, { type Data, type Layout } from "svelte-plotly.js";

  const data: Data[] = [
    {
      values: [40, 35, 25], // Percentages
      labels: ["Solar", "Wind", "Natural Gas"],
      type: "pie",
      marker: {
        colors: ["#a8f0c6", "#8fbf9d", "#f8b88b"], // Theme-aligned colors
      },
      textinfo: "label+percent",
      insidetextorientation: "radial",
    },
  ];

  const layout: Partial<Layout> = {
    paper_bgcolor: "#1b2925",
    plot_bgcolor: "#1b2925",
    margin: { l: 0, r: 0, t: 0, b: 0 },
    font: { color: "#d4f0e4" },
  };
</script>

<main>
  <h1>Smart Energy App</h1>

  <!-- Pie Chart -->
  <div class="card">
    <h2 style="margin-bottom: 0.4rem;">Your Portfolio</h2>
    <Plotly {data} {layout} fillParent="width" />
  </div>

  <!-- Indicators -->
  <div class="card">
    <h2 style="margin-bottom: 0.4rem;">Key Indicators</h2>
    <div>Weighted Cost: <strong>$0.098 / kWh</strong></div>
    <div>CO₂ Intensity: <strong>0.162 kg CO₂ / kWh</strong></div>
  </div>

  <!-- Quick Insights -->
  <div class="card">
    <h2 style="margin-bottom: 0.4rem;">Quick Insights</h2>
    <p>🌟 Congratulations! Your portfolio is 75% renewable.</p>
    <p>⚠️ Consider reducing reliance on natural gas for lower emissions.</p>
  </div>

  <!-- Recommendations -->
  <div class="card">
    <h2 style="margin-bottom: 1rem;">Recommendations</h2>
    <div class="btn-group">
      <a href="strategy/green">🌱 Greener Strategy</a>
      <a href="strategy/cheap">💰 Cheaper Strategy</a>
      <a href="strategy/balanced">⚖️ Balanced Strategy</a>
    </div>
  </div>

  <!-- Tools -->
  <div class="card">
    <h2 style="margin-bottom: 1rem;">Tools</h2>
    <div class="btn-group">
      <a href="optimize">📊 Portfolio Optimization</a>
      <a href="market">📈 Market Predictions</a>
    </div>
  </div>
</main>

<style>

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    overflow-y: auto;
  }

  h1 {
    font-size: 1.5rem;
    color: var(--color-heading-1);
  }

  .card {
    padding: 1rem;
    background-color: var(--color-bg-2);
    border-radius: 0.4rem;
    width: 100%;
  }

  .btn-group {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: stretch;
    justify-content: stretch;
  }

  a {
    padding: 1rem;
    background-color: #1f4930;
    color: #d4f0e4;
    border: none;
    border-radius: 0.4rem;
    text-decoration: none;

    font-size: 1.2rem;
    display: block;
  }

  a:hover {
    background-color: #163c26;
  }

  a:active {
    scale: 0.95;
    transition: scale 0.1s;
  }

</style>
