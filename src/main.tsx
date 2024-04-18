import React from 'react'
import ReactDOM from 'react-dom/client'

import Editor from './index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="h-4">
      <Editor id="editor" />
    </div>
  </React.StrictMode>,
)
