<script lang='ts' module>
  import { marked } from 'marked'
  import type { MarkedRendererProps } from 'svelte-markdown'
  export type Props = MarkedRendererProps<marked.Tokens.Code> & {
    fillParent?: 'width' | 'height' | boolean
    layout?: Partial<Layout>
  }
  import type { Data, Layout } from 'svelte-plotly.js'

  export type Plot = {
    data: Data[],
    layout?: Partial<Layout>
  }

</script>

<script lang='ts'>
  import SvelteMarkdown from 'svelte-markdown';
  import Plotly from 'svelte-plotly.js';

  function parsePlot(json?: string): Plot {
    try {
      return JSON.parse(json!)
    } catch (e) {
      console.error('Parsing:', json, 'Error:', e)
      return { data: [] }
    }
  }

  const { text, lang, raw, fillParent, layout }: Props = $props()

  console.log('Layout:', layout)

</script>

{#if lang === 'plot'}
  {@const plt = parsePlot(text)}
  <Plotly data={plt.data} layout={{ ...layout, ...plt.layout }} {fillParent}  />
{:else}
  <SvelteMarkdown source={raw} />
{/if}
