import React from 'react'
import ReactDOM from 'react-dom/client'

import Editor from '../dist/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Editor id="editor" />
  </React.StrictMode>,
)
