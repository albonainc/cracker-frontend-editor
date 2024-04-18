import type { OutputData } from '@editorjs/editorjs'
import type { HeaderData } from '@editorjs/header'
import type { LinkToolData } from '@editorjs/link'
import type { ListData } from '@editorjs/nested-list'
import type { ParagraphData } from '@editorjs/paragraph'
import type { QuoteData } from 'editorjs-quote'

export const isFoundedPreviewURL = (data: string | OutputData): boolean => {
  const regex = /https?:\/\/[\w.-]+(:\d+)?\/article\/preview\/[^/\s?]+(?:[/?][^\s]*)?/g
  let isFounded = false
  if (typeof data === 'string') {
    isFounded = !!data.match(regex)
  } else
    data.blocks.forEach((block) => {
      if (block.type === 'paragraph') {
        if ((block.data as ParagraphData).text.match(regex)) isFounded = true
      }
      if (block.type === 'header') {
        if ((block.data as HeaderData).text.match(regex)) isFounded = true
      }
      if (block.type === 'list') {
        const searchItem = (items: ListData['items']) => {
          items.forEach((item) => {
            if (item.content?.match(regex)) {
              isFounded = true
            }
            searchItem(item.items)
          })
        }
        searchItem((block.data as ListData).items)
      }
      if (block.type === 'link') {
        if ((block.data as LinkToolData).link.match(regex)) isFounded = true
      }
      if (block.type === 'quote') {
        if ((block.data as QuoteData).text.match(regex)) isFounded = true
        if ((block.data as QuoteData).caption.match(regex)) isFounded = true
      }
    })
  return isFounded
}
