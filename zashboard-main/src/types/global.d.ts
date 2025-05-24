declare const __APP_VERSION__: string

declare module 'vue-virtual-scroller'
declare interface Navigator {
  standalone?: boolean
}

type ToolTipParams = {
  data: {
    value: number
    name: number
  }
  seriesName: string
  color: string
}
