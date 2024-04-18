export { type OutputData } from '@editorjs/editorjs'
export * from './components/editorTools'
export * from './components/preview'
export * from './components/previewTools'
export * from './components/countTools'
export * from './components/searchTools'
export * from './components/setPaymentLine'
import Editor from './components/editor'
import './global.css'
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

export default Editor
