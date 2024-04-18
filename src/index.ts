import type { OutputData as Data } from '@editorjs/editorjs'

import Editor from '@/components/editor'
import type { ToolConfigs as Config } from '@/components/editorTools'
import { Preview as CustomPreview } from '@/components/preview'
import '@/global.css'

export type OutputData = Data
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

export type ToolConfigs = Config

export const Preview = CustomPreview

export default Editor
