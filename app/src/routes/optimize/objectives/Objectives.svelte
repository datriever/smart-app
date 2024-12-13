<script lang="ts" module>
  import Checkbox from "./Checkbox.svelte";

  export type Props = {
    cost: boolean
    emissions: boolean
    risk: boolean
  };
</script>

<script lang="ts">
  import Icon from "@iconify/svelte";
  let { cost = $bindable(), emissions = $bindable(), risk = $bindable() }: Props = $props();
</script>

<div class="objectives">
  <Checkbox label="Price" bind:checked={cost}>
    {#snippet icon()}
      <Icon icon="twemoji:dollar-banknote" />
    {/snippet}
  </Checkbox>
  <Checkbox label="Emissions" bind:checked={emissions}>
    {#snippet icon()}
      <Icon icon="fa:leaf" style='color: #4CAF50;' />
    {/snippet}
  </Checkbox>
  <Checkbox label="Risk" bind:checked={risk}>
    {#snippet icon()}
      <Icon icon="fluent-emoji-flat:police-car-light" />
    {/snippet}
  </Checkbox>
</div>

<style>
  .objectives {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
</style>
