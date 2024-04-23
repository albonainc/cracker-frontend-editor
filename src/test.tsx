import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'

import { Preview, OutputData } from './index'
import Editor, { EditorImplements } from './index.editor'

// eslint-disable-next-line react-refresh/only-export-components
const Main: React.FC = () => {
  const [data, setData] = useState<OutputData>()
  const ref = useRef<EditorImplements>(null)

  const onChange = (value) => {
    setData(value)
  }

  const save = async () => {
    const res = await ref.current?.save()
    console.log(res)
  }
  return (
    <div className="m-auto w-full max-w-[800px]">
      <div className="w-full border">
        <span>preview</span>
        <div className="min-h-[300px] px-[10%]">
          <Preview blocks={data?.blocks} />
        </div>
      </div>
      <div className="border">
        <Editor id="editor" data={data} onChange={onChange} editorRef={ref} />
      </div>
      <div className="flex w-full justify-center pt-4">
        <button onClick={save} className="rounded border border-solid bg-black px-4 text-white">
          save
        </button>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
