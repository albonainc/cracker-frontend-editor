import EditorJs, { OutputData } from '@editorjs/editorjs'
import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'

import { i18n } from '../components/config/i18n'
import { generateTool, ToolConfigs } from '../components/editorTools'

type Props = {
  id: string
  data?: OutputData
  onChange?: (data: OutputData) => void
  config?: ToolConfigs
}
interface Editor {
  save: () => Promise<OutputData>
}

const Editor = forwardRef<Editor, Props>(({ id, data, onChange, config }: Props, ref) => {
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
      if (editorJs.current) {
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

export default Editor
