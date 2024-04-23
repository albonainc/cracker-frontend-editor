import EditorJs, { OutputData } from '@editorjs/editorjs'
import { useEffect, useRef, forwardRef, useImperativeHandle, ComponentProps, Ref } from 'react'

import { i18n } from '../components/config/i18n'
import { generateTool, ToolConfigs } from '../components/editorTools'

type Props = {
  id: string
  data?: OutputData
  onChange?: (data: OutputData) => void
  config?: ToolConfigs
}
export interface EditorImplements {
  save: () => Promise<OutputData>
}

const Editor = forwardRef<EditorImplements, Props>(({ id, data, onChange, config }: Props, ref) => {
  const editorJs = useRef<EditorJs | null>(null)

  useEffect(() => {
    if (!editorJs.current && typeof window !== 'undefined') {
      const editor = new EditorJs({
        holder: id,
        tools: generateTool(config),
        autofocus: false,
        data: data,
        placeholder: '文字を入力',
        async onChange() {
          if (onChange) {
            const res = await save()
            res && onChange(res)
          }
        },
        i18n,
      })
      editorJs.current = editor
    }
    return () => {
      // 型定義にはdestroyが存在するが、実際の動きでは存在しない場合があるので、destroyの存在チェック
      if (editorJs.current && editorJs.current.destroy) {
        editorJs.current.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const save = (): Promise<OutputData> => {
    return editorJs.current?.save() || Promise.reject('Editor not initialized')
  }

  useImperativeHandle(ref, () => ({
    save,
  }))

  return <div id={id} className="w-full" />
})

// dynamic importではrefという名前のpropsが使えないためwrap
export const EditorWrap: React.FC<
  ComponentProps<typeof Editor> & { editorRef?: Ref<EditorImplements> }
> = ({ editorRef, ...props }) => <Editor {...props} ref={editorRef} />

export default EditorWrap
