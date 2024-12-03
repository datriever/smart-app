<script lang='ts' module>
    import { DEFAULT_MARKDOWN } from './example';
    import Markdown, { type Theme } from './Markdown.svelte'
    import { tableThemes, textThemes } from './themes.js'

  const defaultTheme: Theme = {
    table: tableThemes.darkGreen,
    text: textThemes.darkGreen,
  }

  export type Props = {
    theme?: Partial<Theme>
    startMarkdown?: string
  }

</script>

<script lang='ts'>

  const { startMarkdown = DEFAULT_MARKDOWN, theme: propsTheme }: Props = $props()

  const theme = { ...defaultTheme, ...propsTheme }

  let markdown = $state(startMarkdown)
  let divider = $state(40)
  let resizing = $state(false)

  function startResize() {
    resizing = true
  }

  function stopResize() {
    resizing = false
  }

  function handleResize(event: MouseEvent) {
    if (!resizing) return;
    const container = document.querySelector('.container')!
    const containerRect = container.getBoundingClientRect()
    const newLeftWidth = ((event.clientX - containerRect.left) / containerRect.width) * 100

    if (newLeftWidth > 20 && newLeftWidth < 80) {
      divider = newLeftWidth
    }
  }

  window.addEventListener('mousemove', handleResize)
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class='hbox container' onmouseup={stopResize}>
  <textarea class='editor' style={`width:${divider}%;`} bind:value={markdown}></textarea>
  <div class='divider' onmousedown={startResize}> </div>
  <div class='right' style={`width:${100-divider}%;background:${theme.text?.backgroundColor};`}>
    <Markdown {markdown} {theme} />
  </div>
</div>

<style>
  .hbox {
    display: flex;
    width: 100vw;
    height: 100vh;
  }

  .editor {
    padding: 1rem;
    color: white;
    background-color: #232;
  }

  .divider {
    width: 10px;
    cursor: ew-resize;
    background-color: #ddd;
    position: relative;
  }

  .right {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  }
</style>