<script lang='ts'>
  import Objectives from './objectives/Objectives.svelte';
    import Results from './results/Results.svelte';
  import { DEFAULT_SOURCES, SourcesInput } from './sources/index';

  let sources = $state(DEFAULT_SOURCES);
  let cost = $state(false)
  let emissions = $state(false)
  let risk = $state(false)

  type Tab = 'objectives' | 'sources' | 'results';
  let tab = $state<Tab>('objectives');

  function setTab(newTab: Tab) {
    tab = newTab;
  }

</script>

<div class='container'>
  <main>
    <h1>Portfolio Optimization</h1>
    {#if tab === 'objectives'}
      <div class='objectives-tab'>
        <h2>Objectives</h2>
        <Objectives bind:cost bind:emissions bind:risk />
        <button onclick={() => setTab('results')}>Optimize</button>
      </div>
    {:else if tab === 'sources'}
      <div class='sources-tab'>
        <h2>Sources</h2>
        <div class='sources-scroll'>
          <SourcesInput bind:sources />
        </div>
      </div>
    {:else if tab === 'results'}
      <div class='results-tab'>
        <Results {cost} {emissions} {risk} {sources} />
      </div>
    {/if}
  </main>
  <footer>
    <button style={tab === 'objectives' ? 'background: var(--color-accent-2);' : ''} onclick={() => setTab('objectives')}>Objectives</button>
    <button style={tab === 'sources' ? 'background: var(--color-accent-2);' : ''} onclick={() => setTab('sources')}>Sources</button>
    <button style={tab === 'results' ? 'background: var(--color-accent-2);' : ''} onclick={() => setTab('results')}>Results</button>
  </footer>
</div>

<style>

  .container {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    overflow-y: auto;
  }

  .objectives-tab {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-items: end;
    align-items: center;
    gap: 1rem;
  }

  .objectives-tab button {
    padding: 1.4rem;
    background-color: transparent;
    border: none;
    font-size: 1.4rem;
    font-weight: bold;
    border: 4px solid var(--color-accent-2);
    border-radius: 0.5rem;

    transition: background-color 0.1s ease;
  }

  .objectives-tab button:active {
    background-color: var(--color-accent-2);
  }

  .sources-tab {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    overflow: hidden;
  }

  .sources-scroll {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }

  footer {
    width: 100%;
    display: flex;
  }

  footer button {
    flex: 1;
    border: none;
    padding: 2rem 0;
    background-color: transparent;
    font-size: 1.2rem;
    border-top: 1px solid white;

    font-weight: bold;
  }

  footer button:active {
    background-color: #fff8;
  }

  footer :not(:last-child) {
    border-right: 1px solid white;
  }

</style>
