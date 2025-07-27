import type { OutputData } from '@editorjs/editorjs'
import type { HeaderData } from '@editorjs/header'
import type { LinkToolData } from '@editorjs/link'
import type { ListData } from '@editorjs/nested-list'
import type { ParagraphData } from '@editorjs/paragraph'
import type { EmbedData } from 'editorjs-embed'
import type { ImageToolData } from 'editorjs-image'
import type { QuoteData } from 'editorjs-quote'
import { useEffect, useState } from 'react'

export type Counter<T> = (data: T) => number

export const useEditorCounter = (data?: OutputData) => {
  const [textCount, setTextCount] = useState<number>(0)

  useEffect(() => {
    data ? setTextCount(counter(data)) : setTextCount(0)
  }, [data])

  return textCount
}

export const counter = (data: OutputData): number => {
  let count = 0
  data.blocks.forEach((item) => {
    if (item.type === 'paragraph') count += paragraphCounter(item.data)
    if (item.type === 'link') count += linkCounter(item.data)
    if (item.type === 'header') count += headerCounter(item.data)
    if (item.type === 'list') count += listCounter(item.data)
    if (item.type === 'embed') count += embedCounter(item.data)
    if (item.type === 'image') count += imageCounter(item.data)
    if (item.type === 'quote') count += quoteCounter(item.data)
  })
  return count
}

export const paragraphCounter: Counter<ParagraphData> = ({ text }) => {
  return text.length
}

export const imageCounter: Counter<ImageToolData> = ({ caption }) => {
  return caption?.length ?? 0
}

export const linkCounter: Counter<LinkToolData> = ({ link }) => {
  return link.length
}

export const headerCounter: Counter<HeaderData> = ({ text }) => {
  return text.length
}

export const listCounter: Counter<ListData> = ({ items }) => {
  const countItem = (data: ListData['items']): number => {
    return data
      .map((item) => {
        return (item.content?.length ?? 0) + countItem(item.items)
      })
      .reduce((sum, currentItem) => sum + currentItem, 0)
  }

  return countItem(items)
}

export const embedCounter: Counter<EmbedData | undefined> = (data) => {
  return data?.source.length ?? 0
}

export const quoteCounter: Counter<QuoteData> = ({ text, caption }) => {
  return (text?.length ?? 0) + (caption?.length ?? 0)
}
