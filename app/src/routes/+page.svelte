<script lang="ts" module>
  import { getPortfolio, type PortfolioSource } from "$lib/client";
  import { createClient } from "@hey-api/client-fetch";
  const client = createClient({ baseUrl: 'http://localhost:8000' })
</script>

<script lang='ts'>
  import Portfolio from "./Portfolio.svelte";
  import { base } from "$app/paths";
  import Icon from "@iconify/svelte";


  type PortfolioState = {
    tag: 'error'
  } | {
    tag: 'success'
    portfolio: PortfolioSource[]
  }

  let portfolio: PortfolioState = $state({ tag: 'success', portfolio: [] })

  async function fetchPortfolio() {
    const res = await getPortfolio({ client, throwOnError: false })
    if (res.data)
      portfolio = { tag: 'success', portfolio: res.data }
    else
      portfolio = { tag: 'error' }
  }

  $effect.root(() => { fetchPortfolio() })

</script>

<main>
  <h1>Smart Energy App</h1>

  <!-- Portfolio -->
  {#if portfolio.tag === 'success'}
    <Portfolio portfolio={portfolio.portfolio} />
  {:else}
    <p>Error fetching portfolio</p>
  {/if}
  
  <!-- Quick Insights -->
  <div class="card">
    <h2 style="margin-bottom: 0.4rem;">Quick Insights</h2>
    <p>
      <Icon icon="fa:star" style='color: #FFD700;' scale={10} inline />
      Congratulations! Your portfolio is 75% renewable.
    </p>
    <p>
    <Icon icon="fa:exclamation-triangle" style='color: #FFC107;' />
      Consider reducing reliance on natural gas for lower emissions.
    </p>
  </div>

  <!-- Recommendations -->
  <div class="card">
    <h2 style="margin-bottom: 1rem;">Recommendations</h2>
    <div class="btn-group">
      <a href={`${base}/strategy/green`}>
        <Icon icon="fa:leaf" style='color: #4CAF50;' />
        <p>Greener Strategy</p>
      </a>
      <a href={`${base}/strategy/cheap`}>
        <Icon icon="twemoji:dollar-banknote" />
        <p>Cheaper Strategy</p>
      </a>
      <a href={`${base}/strategy/balanced`}>
        <Icon icon="twemoji:balance-scale" />
        <p>Balanced Strategy</p>
      </a>
    </div>
  </div>

  <!-- Tools -->
  <div class="card">
    <h2 style="margin-bottom: 1rem;">Tools</h2>
    <div class="btn-group">
      <a href={`${base}/optimize`}>
        <Icon icon="fluent-emoji-flat:bar-chart" />
        <p>Portfolio Optimization</p>
      </a>
      <a href={`${base}/market`}>
        <Icon icon="fluent-emoji-flat:chart-increasing" />
        <p>Market Predictions</p>
      </a>
      <a href={`${base}/solar`}>
        <Icon icon="fluent-emoji-flat:sun" />
        <p>Solar Trading</p>
      </a>
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
    color: var(--color-h1);
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
    background-color: var(--color-accent-2);
    color: #d4f0e4;
    border: none;
    border-radius: 0.4rem;
    text-decoration: none;
    font-size: 1.2rem;

    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  
  a:hover {
    background-color: var(--color-accent-1);
  }

</style>