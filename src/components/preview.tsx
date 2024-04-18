import type { OutputBlockData } from '@editorjs/editorjs'
import type { HeaderData } from '@editorjs/header'
import React from 'react'

import {
  Parser,
  paragraphParser,
  imageParser,
  linkParser,
  headerParser,
  listParser,
  embedParser,
  quoteParser,
  paymentLineParser,
  parser,
  indexParser,
} from './previewTools'

const editorParser = parser({
  paragraph: paragraphParser as unknown as Parser,
  header: headerParser as unknown as Parser,
  list: listParser as unknown as Parser,
  payment: paymentLineParser as unknown as Parser,
  image: imageParser as unknown as Parser,
  link: linkParser as unknown as Parser,
  embed: embedParser as unknown as Parser,
  quote: quoteParser as unknown as Parser,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props<Type extends string = string, Data extends object = any> = {
  blocks?: OutputBlockData<Type, Data>[]
}

const Preview: React.FC<Props> = ({ blocks }) => {
  if (!blocks) return <div />
  const html = editorParser.parse(blocks)
  return <div className="w-full">{html}</div>
}

const Index: React.FC<Props> = ({ blocks }) => {
  if (!blocks) return <div />
  // filterしてるのでasで型キャスト
  const html = indexParser(
    blocks.filter((block) => block.type === 'header') as OutputBlockData<'header', HeaderData>[],
  )
  return <div className="w-full">{html}</div>
}

export { Preview, Index }
