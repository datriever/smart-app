<script lang="ts" module>
  import SourceAccordion from "./SourceAccordion.svelte";
  import type { Source } from "./sources";

  export type Props = {
    sources: Source[]
  }

</script>

<script lang="ts">

  const { sources = $bindable() }: Props = $props()
  
</script>

<div class='sources-container'>
  {#each sources as source, i}
    <SourceAccordion {source} setSource={src => sources[i] = src} />
  {/each}
</div>


<style>
  .sources-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
</style>
