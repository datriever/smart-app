<script lang='ts' module>
  import type { MarketPred, MarketCandle } from '$lib/client/index';

  export type Props = {
    candles: MarketCandle[]
    preds: MarketPred[]
  }

</script>

<script lang='ts'>
  import Plotly, { type Layout, type Data } from 'svelte-plotly.js'
  const { candles, preds }: Props = $props()

  const candleData: Data = {
    type: 'candlestick',
    name: 'Market',
    x: candles.map(c => c.time),
    close: candles.map(c => c.close),
    high: candles.map(c => c.high),
    low: candles.map(c => c.low),
    open: candles.map(c => c.open),
    xaxis: 'x',
    yaxis: 'y'
  }
  const predsData: Data = {
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Predictions',
    x: preds.map(p => p.time),
    y: preds.map(p => p.price)
  }
  const data: Data[] = [candleData, predsData]

  const numCandles = Math.min(10, candles.length)

  const ymin = Math.min(...candles.slice(candles.length-numCandles).map(c => c.low))
  const ymax = Math.max(...candles.slice(candles.length-numCandles).map(c => c.high))
  const width = ymax - ymin


  const layout: Partial<Layout> = {
    dragmode: 'pan',
    selectdirection: 'h',
    xaxis: {
      type: 'date',
      rangeslider: { visible: false },
      range: [candles[candles.length-numCandles].time, candles[candles.length-1].time],
    },
    yaxis: {
      range: [ymin-0.5*width, ymax+0.5*width],
    },
    paper_bgcolor: '#1b2925',
    plot_bgcolor: '#1b2925',
    modebar: {},
    margin: { l: 30, r: 0, t: 0, b: 0, pad: 0 },
    font: { color: '#d4f0e4' },
    legend: {
      orientation: 'h',
      xanchor: 'left',
      yanchor: 'top',
      y: -0.2,
      x: 0,
    }
  }

</script>

<Plotly {data} {layout} fillParent='width' config={{ displayModeBar: false, displaylogo: false}} />