import type { OutputData } from '@editorjs/editorjs'
import React, { useCallback, useMemo, useState } from 'react'

import {
  Parser,
  paragraphParser,
  imageParser,
  linkParser,
  headerParser,
  listParser,
  embedParser,
  quoteParser,
  parser,
  paymentButton,
} from './previewTools'

const editorParser = parser({
  paragraph: paragraphParser as unknown as Parser,
  header: headerParser as unknown as Parser,
  list: listParser as unknown as Parser,
  image: imageParser as unknown as Parser,
  link: linkParser as unknown as Parser,
  embed: embedParser as unknown as Parser,
  quote: quoteParser as unknown as Parser,
})

type Props = {
  data: OutputData
  onChange: (data: OutputData) => void
}

const SetPaymentLine: React.FC<Props> = ({ data, onChange }) => {
  const paymentLineIndex: number | undefined = useMemo(() => {
    const index: number = data.blocks.findIndex((block) => block.type === 'payment')
    return index === -1 ? undefined : index
  }, [data])

  const removePaymentFromData = useMemo(() => {
    return {
      ...data,
      blocks: data.blocks.filter((block) => block.type !== 'payment'),
    }
  }, [data])

  const html = useMemo(
    () => editorParser.parse(removePaymentFromData.blocks),
    [removePaymentFromData],
  )

  const [value, setValue] = useState<number | undefined>(paymentLineIndex)

  const onChangeValue = useCallback(
    (index: number) => {
      if (value === index) {
        setValue(undefined)
        onChange(removePaymentFromData)
      } else {
        setValue(index)
        const lastBlockIndex = removePaymentFromData.blocks.length - 1
        const newData = {
          ...removePaymentFromData,
          blocks: removePaymentFromData.blocks.flatMap((block, i) => {
            if (i === index) {
              return [
                {
                  id: '----------',
                  type: 'payment',
                  data: {},
                },
                block,
              ]
            }
            // 最後のblockに追加された場合
            else if (i === lastBlockIndex && i === index - 1) {
              return [
                block,
                {
                  id: '----------',
                  type: 'payment',
                  data: {},
                },
              ]
            }
            return block
          }),
        }
        onChange(newData)
      }
    },
    [onChange, removePaymentFromData, value],
  )

  const mappedHtml = useMemo(() => {
    return html.flatMap((node, i) => {
      return [
        node,
        paymentButton({
          key: `${i}-payment-button`,
          value: value === i + 1,
          onClick: () => {
            onChangeValue(i + 1)
          },
        }),
      ]
    })
  }, [html, onChangeValue, value])

  return <div className="w-full">{mappedHtml}</div>
}

export default SetPaymentLine
