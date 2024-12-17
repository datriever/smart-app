<script lang="ts" module>
  export type TableTheme = {
    headerBg?: string
    headerFontColor?: string
    headerFontSize?: string
    headerPadding?: string
    evenRowBg?: string
    evenRowFontColor?: string
    evenRowFontSize?: string
    oddRowBg?: string
    oddRowFontColor?: string
    oddRowFontSize?: string
    cellPadding?: string
    evenRowHover?: string
    oddRowHover?: string
    font?: string
    margin?: string
    border?: string
    borderRadius?: string
    rowBorder?: string
  };

  export type TextTheme = {
    font?: string;
    textColor?: string;
    linkColor?: string;
    linkHoverColor?: string;
    h1Color?: string;
    h2Color?: string;
    h3Color?: string;
    h4Color?: string;
    h5Color?: string;
    h6Color?: string;
    h1FontSize?: string;
    h2FontSize?: string;
    h3FontSize?: string;
    h4FontSize?: string;
    h5FontSize?: string;
    h6FontSize?: string;
    h1Margin?: string;
    h2Margin?: string;
    h3Margin?: string;
    h4Margin?: string;
    h5Margin?: string;
    h6Margin?: string;
    ulPaddingLeft?: string;
    olPaddingLeft?: string;
    ulMargin?: string;
    olMargin?: string;
    paragraphMargin?: string;
    paragraphLineHeight?: string;
    margin?: string;
    padding?: string;
    backgroundColor?: string;
  };

  export type PlotTheme = Partial<Layout> & {
    fillParent?: 'width' | 'height'
  }

  export type Theme = {
    table?: TableTheme
    text?: TextTheme
    plot?: PlotTheme
  };

  export type Props = {
    markdown: string;
    theme?: Theme;
  };
</script>

<script lang="ts">
  const defaultTable: TableTheme = {
    headerBg: 'transparent',
    headerFontColor: 'inherit',
    headerFontSize: 'inherit',
    headerPadding: '8px 12px',
    evenRowBg: 'transparent',
    evenRowFontColor: 'inherit',
    evenRowFontSize: 'inherit',
    oddRowBg: 'transparent',
    oddRowFontColor: 'inherit',
    oddRowFontSize: 'inherit',
    cellPadding: '8px 12px',
    evenRowHover: '#f9f9f9',
    oddRowHover: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '4px',
    rowBorder: 'unset',
    font: 'inherit',
    margin: '0 0 1rem 0',
  };

  // Default Text Theme
  const defaultText: Required<TextTheme> = {
    font: 'inherit',
    textColor: 'inherit',
    linkColor: '#3498db',
    linkHoverColor: '#1e88e5',
    h1Color: 'inherit',
    h2Color: 'inherit',
    h3Color: 'inherit',
    h4Color: 'inherit',
    h5Color: 'inherit',
    h6Color: 'inherit',
    h1FontSize: '2rem',
    h2FontSize: '1.75rem',
    h3FontSize: '1.5rem',
    h4FontSize: '1.25rem',
    h5FontSize: '1rem',
    h6FontSize: '0.875rem',
    h1Margin: '1.5rem 0',
    h2Margin: '1.25rem 0',
    h3Margin: '1rem 0',
    h4Margin: '0.75rem 0',
    h5Margin: '0.5rem 0',
    h6Margin: '0.25rem 0',
    ulPaddingLeft: '1.5rem',
    olPaddingLeft: '1.5rem',
    ulMargin: '0.4rem 0 1rem 0',
    olMargin: '0.4rem 0 1rem 0',
    paragraphMargin: '0 0 1rem 0',
    paragraphLineHeight: '1.6',
    margin: '0',
    padding: '1rem',
    backgroundColor: 'transparent',
  };

  const { markdown, theme }: Props = $props();
  const table = { ...defaultTable, ...theme?.table };
  const text = { ...defaultText, ...theme?.text };

  import SvelteMarkdown from 'svelte-markdown'
  import CodeRenderer from './CodeRenderer.svelte';
  import type { Layout } from 'svelte-plotly.js';
  // import HtmlRenderer from './HtmlRenderer.svelte';
  // import { preprocessMarkdown } from './markdown';
  // const preprocessedMarkdown = preprocessMarkdown(markdown);

</script>

{#snippet code(props)}
  <CodeRenderer fillParent={theme?.plot?.fillParent} layout={theme?.plot} {...props} />
{/snippet}

<main
  style="
    --table-header-bg: {table.headerBg};
    --table-header-font-color: {table.headerFontColor};
    --table-header-font-size: {table.headerFontSize};
    --table-header-padding: {table.headerPadding};
    --table-even-row-bg: {table.evenRowBg};
    --table-even-row-font-color: {table.evenRowFontColor};
    --table-even-row-font-size: {table.evenRowFontSize};
    --table-odd-row-bg: {table.oddRowBg};
    --table-odd-row-font-color: {table.oddRowFontColor};
    --table-odd-row-font-size: {table.oddRowFontSize};
    --table-cell-padding: {table.cellPadding};
    --table-even-row-hover: {table.evenRowHover};
    --table-odd-row-hover: {table.oddRowHover};
    --table-font-family: {table.font};
    --table-margin: {table.margin};
    --table-border: {table.border};
    --table-border-radius: {table.borderRadius};
    --table-row-border: {table.rowBorder};

    --padding: {text.padding};
    --background-color: {text.backgroundColor};
    --font-family: {text.font};
    --text-color: {text.textColor};
    --link-color: {text.linkColor};
    --link-hover-color: {text.linkHoverColor};
    --h1-color: {text.h1Color};
    --h2-color: {text.h2Color};
    --h3-color: {text.h3Color};
    --h4-color: {text.h4Color};
    --h5-color: {text.h5Color};
    --h6-color: {text.h6Color};
    --h1-font-size: {text.h1FontSize};
    --h2-font-size: {text.h2FontSize};
    --h3-font-size: {text.h3FontSize};
    --h4-font-size: {text.h4FontSize};
    --h5-font-size: {text.h5FontSize};
    --h6-font-size: {text.h6FontSize};
    --h1-margin: {text.h1Margin};
    --h2-margin: {text.h2Margin};
    --h3-margin: {text.h3Margin};
    --h4-margin: {text.h4Margin};
    --h5-margin: {text.h5Margin};
    --h6-margin: {text.h6Margin};
    --ul-padding-left: {text.ulPaddingLeft};
    --ol-padding-left: {text.olPaddingLeft};
    --ul-margin: {text.ulMargin};
    --ol-margin: {text.olMargin};
    --paragraph-margin: {text.paragraphMargin};
    --paragraph-line-height: {text.paragraphLineHeight};
    --text-margin: {text.margin};
  "
  class="markdown"
>
  <SvelteMarkdown source={markdown} renderers={{
    code: code
  }}
  />
</main>

<style>
  
  :global(.markdown) {
    font-family: var(--font-family);
    color: var(--text-color);
    margin: var(--content-margin);
    padding: var(--padding);
    background-color: var(--background-color);
  }

  /* Header styles */
  :global(.markdown h1) {
    color: var(--h1-color);
    font-size: var(--h1-font-size);
    margin: var(--h1-margin);
  }

  :global(.markdown h2) {
    color: var(--h2-color);
    font-size: var(--h2-font-size);
    margin: var(--h2-margin);
  }

  :global(.markdown h3) {
    color: var(--h3-color);
    font-size: var(--h3-font-size);
    margin: var(--h3-margin);
  }

  :global(.markdown h4) {
    color: var(--h4-color);
    font-size: var(--h4-font-size);
    margin: var(--h4-margin);
  }

  :global(.markdown h5) {
    color: var(--h5-color);
    font-size: var(--h5-font-size);
    margin: var(--h5-margin);
  }

  :global(.markdown h6) {
    color: var(--h6-color);
    font-size: var(--h6-font-size);
    margin: var(--h6-margin);
  }

  /* Link styles */
  :global(.markdown a) {
    color: var(--link-color);
    text-decoration: none;
  }

  :global(.markdown a:hover) {
    color: var(--link-hover-color);
    text-decoration: underline;
  }

  :global(.markdown ul) {
    padding-left: var(--ul-padding-left);
    margin: var(--ul-margin);
  }

  :global(.markdown ol) {
    padding-left: var(--ol-padding-left);
    margin: var(--ol-margin);
  }

  :global(.markdown li) {
    margin-bottom: 0.5rem;
  }

  :global(.markdown p) {
    margin: var(--paragraph-margin);
    line-height: var(--paragraph-line-height);
  }
  
  :global(.markdown hr) {
    margin: 1rem 0;
  }


  /* TABLE STYLES */
  :global(.markdown table) {
    border-spacing: 0;
    border-collapse: separate;
    border-radius: var(--table-border-radius);
    overflow: hidden;
    margin: var(--table-margin);
    font-family: var(--table-font-family);
  }

  :global(.markdown th) {
    background-color: var(--table-header-bg);
    color: var(--table-header-font-color);
    font-size: var(--table-header-font-size);
    padding: var(--table-header-padding);
    border-bottom: var(--table-row-border);
    text-align: center;
  }

  :global(.markdown td) {
    padding: var(--table-cell-padding);
    border-bottom: var(--table-row-border);
  }

  :global(.markdown tr:nth-child(even)) {
    background-color: var(--table-even-row-bg);
    color: var(--table-even-row-font-color);
    font-size: var(--table-even-row-font-size);
  }

  :global(.markdown tr:nth-child(odd)) {
    background-color: var(--table-odd-row-bg);
    color: var(--table-odd-row-font-color);
    font-size: var(--table-odd-row-font-size);
  }

  :global(.markdown tr:nth-child(even):hover) {
    background-color: var(--table-even-row-hover);
  }

  :global(.markdown tr:nth-child(odd):hover) {
    background-color: var(--table-odd-row-hover);
  }
</style>
