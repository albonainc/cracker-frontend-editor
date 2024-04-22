export { type OutputData } from '@editorjs/editorjs'
export { type ToolConfigs } from './components/editorTools'
export { Preview, Index } from './components/preview'
export { counter, useEditorCounter } from './components/countTools'
export { isFoundedPreviewURL } from './components/searchTools'
import SetPaymentLine from './components/setPaymentLine'
export interface OutputBlockData<
  Type extends string = string,
  Data extends object | undefined = undefined,
> {
  id?: string
  type: Type
  data: Data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tunes?: { [name: string]: any }
}

export { SetPaymentLine }
