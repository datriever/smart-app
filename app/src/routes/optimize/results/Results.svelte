<script lang="ts" module>
  import { createClient } from '@hey-api/client-fetch';
  import { optimizePortfolio } from '$lib/client'

  export type Props = {
    cost: boolean
    emissions: boolean
    risk: boolean
    sources: Source[]
  }

  const client = createClient({ baseUrl: 'http://localhost:8000' });

</script>

<script lang="ts">
  import Markdown from "$lib/renderer";
  import type { Theme } from "$lib/renderer/Markdown.svelte";
  import type { Source } from '../sources';
    import { resultsMarkdown } from './results';

  const { cost, emissions, risk, sources }: Props = $props()

  type Result = {
    tag: 'loading' | 'error' | 'impossible'
  } | {
    tag: 'success'
    proportions: number[]
    markdown: string
  }
  let result: Result = $state({ tag: 'loading' })

  async function optimize() {
    console.log('Optimizing portfolio')
    const res = await optimizePortfolio({
      client, throwOnError: false, body: {
        goals: { cheap: cost ? 1 : 0, green: emissions ? 1 : 0, safe: risk ? 1 : 0 },
        sources, constraints: {}
      }
    })
    if (res.error) {
      result = { tag: 'error' }
    } else if (res.data) {
      const proportions = res.data
      const portfolio = sources
        .map((source, i): [Source, number] => [source, proportions[i]])
        .filter(([_, proportion]) => proportion > 0);

      console.log('Optimized portfolio', portfolio)
      result = {
        tag: 'success', proportions,
        markdown: resultsMarkdown(portfolio)
      }
    } else {
      result = { tag: 'impossible' }
    }
  }

  $effect(() => { optimize() })


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


{#if result.tag === 'loading'}
  <p>Loading...</p>
{:else if result.tag === 'error'}
  <p>Error</p>
{:else if result.tag === 'impossible'}
  <p>Impossible</p>
{:else if result.tag === 'success'}
  <Markdown {theme} markdown={result.markdown} />
{/if}