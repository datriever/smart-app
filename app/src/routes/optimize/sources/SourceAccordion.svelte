<!-- svelte-ignore a11y_no_static_element_interactions, a11y_click_events_have_key_events -->

<script lang="ts" module>
  import { type Source } from './sources'
  
  export type Props = {
    source: Source
    setSource(source: Source): void
  }

</script>


<script lang="ts">
  const { source, setSource }: Props = $props()
  let expanded = $state(false)
</script>

<div class="accordion">
  <div class="accordion-summary" onclick={() => { expanded = !expanded }}>
    <strong>{source.name}</strong>
    <span>
      {source.cost} €/kWh, {source.emissions} gCO₂/MWh
    </span>
  </div>
  <div class={`accordion-details ${expanded ? "" : "hidden"}`}>
    <label>
      <span>Minimum Proportion:</span>
      <input
        type="number"
        min="0"
        max="1"
        step="0.01"
        value={source.p_min ?? 0}
        oninput={e => setSource({ ...source, p_min: +e.currentTarget.value })}
      />
    </label>
    <label>
      Maximum Proportion:
      <input
        type="number"
        min="0"
        max="1"
        step="0.01"
        value={source.p_max ?? 1}
        oninput={e => setSource({ ...source, p_max: +e.currentTarget.value })}
      />
    </label>
    <label>
      Cost:
      <input
        type="number"
        value={source.cost}
        oninput={e => setSource({ ...source, cost: +e.currentTarget.value })}
      />
    </label>
    <label>
      Emissions:
      <input
        type="number"
        value={source.emissions}
        oninput={e => setSource({ ...source, emissions: +e.currentTarget.value })}
      />
    </label>
    <label>
      Risk:
      <input
        type="number"
        value={source.risk}
        oninput={e => setSource({ ...source, risk: +e.currentTarget.value })}
      />
    </label>
  </div>
</div>


<style>
  .accordion {
    background-color: var(--color-bg-2);
    border-radius: 1rem;
  }

  .accordion-summary {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    cursor: pointer;
  }

  .accordion-details {
    padding: 1rem;
    transition: all 0.3s ease;
  }

  .accordion-details.hidden {
    height: 0;
    overflow: hidden;
    padding: 0 1rem;
  }

  .accordion-details label {
    display: flex;
    justify-content: space-between;
  }

  .accordion-details input {
    margin-bottom: 0.5em;
    width: 5rem;
  }

  input {
    background-color: var(--color-bg-4);
    border: none;
    border-radius: 2px;
    padding: 0.4rem;
  }
</style>