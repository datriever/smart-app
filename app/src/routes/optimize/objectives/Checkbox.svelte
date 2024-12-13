<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->

<script lang='ts' module>
    import type { Snippet } from 'svelte';

  export type Props = {
    label: string
    icon: Snippet
    checked: boolean
  }

</script>

<script lang='ts'>

  let { label, icon, checked = $bindable() }: Props = $props()

</script>

<div class='card' onclick={() => checked = !checked}>
  <input class='checkbox' type='checkbox' {checked} />
  {@render icon()}
  <span class='label'>{label}</span>
</div>

<style>
  .card {
    display: flex;
    background-color: var(--color-accent-2);
    align-items: center;
    gap: 1rem;
    padding: 3rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;

    font-size: 2rem;
  }

  .checkbox {
    width: 1.4rem;
    height: 1.4rem;
    background-color: var(--color-bg-1);
    border-radius: 1rem;
  }
  
  .label {
    font-weight: bold;
  }

</style>
