<script lang='ts' module>
  import type { Market } from './markets'

  export type Props = {
    markets: Market[]
    selected: number
  }

</script>

<script lang="ts">
  let { markets, selected = $bindable() }: Props = $props()
</script>

<div>
  {#each markets as market, i}
    <button class:active={i === selected} onclick={() => selected = i}>
      <strong>{market.name}</strong>
      <span>{market.location}</span>
    </button>
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    background: var(--color-bg-2);
    gap: 0.5rem; /* Add spacing between buttons */
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.75rem 1rem;
    background: var(--color-bg-3);
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background 0.2s ease;
    color: var(--color-text);
    text-align: left;
  }

  button:hover {
    background: var(--color-accent-1);
  }

  button.active {
    background: var(--color-accent-2);
    color: var(--color-h1);
  }

  button strong {
    font-size: 1rem;
    color: var(--color-h1);
    margin-bottom: 0.25rem;
  }

  button span {
    font-size: 0.875rem;
    color: var(--color-text);
    opacity: 0.8; /* Slightly dimmed for secondary information */
  }
</style>
