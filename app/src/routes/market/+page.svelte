<script lang="ts" module>
  import { createClient } from "@hey-api/client-fetch";
  const client = createClient({ baseUrl: 'http://localhost:8000' })
</script>

<script lang='ts'>
  import type { Req } from '$lib'
  import { getMarketPrices, getMarkets, type Market, type MarketPrices } from '$lib/client';
  import Markets from './Markets.svelte';
  import PricesPlot from './PricesPlot.svelte'

  let prices: Req<MarketPrices> = $state({ tag: 'loading' })
  let markets: Req<Market[]> = $state({ tag: 'loading' })
  let selected = $state(0)

  async function fetchMarkets() {
    markets = { tag: 'loading' }
    const res = await getMarkets({ client, throwOnError: false })
    if (res.data)
      markets = { tag: 'loaded', val: res.data }
    else
      markets = { tag: 'error' }
  }

  async function fetchPrices() {
    console.log('Fetching prices')
    if (markets.tag !== 'loaded')
      return console.log('Markets not loaded')
    
    prices = { tag: 'loading' }
    const res = await getMarketPrices({ client, path: { id: markets.val[selected].id }, throwOnError: false })
    if (res.data)
      prices = { tag: 'loaded', val: res.data }
    else
      prices = { tag: 'error' }

    console.log('Prices fetched:', res.data)
  }

  $effect.root(() => { fetchMarkets() })
  $effect(() => { fetchPrices() })

</script>

<main>
  <h1>Market Predictions</h1>
  <div class="card">
    {#if markets.tag === 'loading'}
      <p>Loading...</p>
    {:else if markets.tag === 'error'}
      <p>Error fetching data</p>
    {:else if markets.tag === 'loaded'}
      <h2>{markets.val[selected].name}</h2>
      <h3>{markets.val[selected].unit}</h3>
    {/if}
    {#if prices.tag === 'loading'}
      <p>Loading...</p>
    {:else if prices.tag === 'error'}
      <p>Error fetching data</p>
    {:else if prices.tag === 'loaded'}
      <PricesPlot candles={prices.val.candles} preds={prices.val.preds} />
    {/if}
  </div>
  <div class="card">
    <h2 style="margin-bottom: 1rem;">Markets</h2>
    <div class='markets'>
      {#if markets.tag === 'loading'}
      <p>Loading...</p>
      {:else if markets.tag === 'error'}
        <p>Error fetching data</p>
      {:else if markets.tag === 'loaded'}
        <Markets markets={markets.val} bind:selected />
      {/if}
    </div>
  </div>
</main>

<style>
  .card {
    padding: 1rem;
    background-color: var(--color-bg-2);
    border-radius: 0.4rem;
    width: 100%;
  }

  .markets {
    max-height: 20rem;
    overflow-y: auto;
  }

  main {
    background-color: var(--color-bg);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
  } 

  h1 {
    font-size: 1.5rem;
    color: var(--color-h1);
  }

  h3 {
    font-size: 1rem;
    font-style: italic;
    color: var(--color-text);
  }

  div {
    width: 100%;
  }
</style>