import EditorJs, { OutputData, EditorConfig } from '@editorjs/editorjs'
import DragDrop from 'editorjs-drag-drop'
import React from 'react'

import { i18n } from '../components/config/i18n'
import { generateTool, ToolConfigs } from '../components/editorTools'

type Props = {
  id: string
  data?: OutputData
  onChange?: (data: OutputData) => void
  config?: ToolConfigs
}

const Editor: React.FC<Props> = ({ id, data, onChange, config }) => {
  const editorJs = React.useRef<EditorJs | null>(null)

  React.useEffect(() => {
    if (!editorJs.current) {
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
        onReady() {
          new DragDrop(editor as EditorJs & { configuration: EditorConfig })
        },
      })
      editorJs.current = editor
    }
    return () => {
      if (editorJs.current && editorJs.current.destroy) {
        editorJs.current.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const save = (): Promise<OutputData> | undefined => {
    if (!editorJs.current?.save) return undefined
    return editorJs.current.save().then((outputData) => outputData)
  }

  return <div id={id} className="w-full" />
}

export default Editor
