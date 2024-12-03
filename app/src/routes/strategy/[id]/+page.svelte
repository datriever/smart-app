<script lang="ts">
  import { tableThemes, textThemes } from '$lib/renderer';
	import Markdown, { type Theme } from '$lib/renderer/Markdown.svelte';
  import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();

  const mobile = window.matchMedia('(max-width: 600px)').matches;

  const theme: Theme = {
    table: {
      headerBg: '#444',                // Dark background for headers
      headerFontColor: 'var(--color-heading-1)',         // White text for headers
      oddRowBg: '#2b2b2b',            // Dark grey for even rows
      oddRowFontColor: 'var(--color-text)',     // Light grey text for even rows
      oddRowHover: '#333',            // Slightly lighter grey for even row hover
      evenRowBg: '#1e1e1e',             // Slightly darker grey for odd rows
      evenRowFontColor: 'var(--color-text)',      // Light grey text for odd rows
      evenRowHover: '#333',             // Slightly lighter grey for odd row hover
      border: '1px solid #444',        // Medium grey border for cells
    },
    plot: {
      paper_bgcolor: "#1b2925",
      font: { color: "#d4f0e4" },
      fillParent: mobile ? 'width' : undefined
    }
  }

</script>

<main>
  <Markdown markdown={data.markdown} {theme}  />
</main>

<style>

  /* Mobile */
  /* @media (max-width: 600px) {
  } */

  /* Desktop */
  @media (min-width: 600px) {
    main {
      margin: 0 auto;
      max-width: 60;
    }
  }

</style>