import type { OutputData } from '@editorjs/editorjs'
import type { HeaderData } from '@editorjs/header'
import type { LinkToolData } from '@editorjs/link'
import type { ListData } from '@editorjs/nested-list'
import type { ParagraphData } from '@editorjs/paragraph'
import classNames from 'classnames'
import type { EmbedData } from 'editorjs-embed'
import type { ImageToolData } from 'editorjs-image'
import type { QuoteData } from 'editorjs-quote'
import type { ReactNode, FC, CSSProperties } from 'react'
import { Fragment } from 'react'

import type { PaymentLineData } from './editorTools/paymentLine'
import Styles from './previewTools.module.css'
import type { OutputBlockData } from '../index'

export type Parser<Type extends string = string, Data extends object | undefined = undefined> = (
  data: OutputBlockData<Type, Data | undefined>,
) => ReactNode

export const paragraphParser: Parser<'paragraph', ParagraphData> = ({ id, data }) => {
  if (!data) return
  return (
    <p
      id={id}
      className={classNames(Styles['ce-paragraph'], Styles['cdx-block'])}
      dangerouslySetInnerHTML={{ __html: data.text }}
    />
  )
}

export const imageParser: Parser<'image', ImageToolData> = ({ id, data }) => {
  if (!data) return
  return (
    <div>
      <div id={id} className={classNames(data.withBackground && 'bg-[#cdd1e0] p-[15px]')}>
        <img
          src={data.file.url}
          alt={data.caption ?? undefined}
          className={classNames(
            data.withBackground && 'max-w-[60%]',
            'm-auto',
            data.withBorder && 'border border-[#e8e8eb]',
            data.stretched && 'w-full',
          )}
        />
      </div>
    </div>
  )
}

export const linkParser: Parser<'link', LinkToolData> = ({ id, data }) => {
  if (!data) return
  const anchor = new URL(data.link).hostname
  return (
    <div className={Styles['cdx-block']}>
      <div id={id} className={Styles['link-tool']}>
        <a
          className={classNames(
            Styles['link-tool__content'],
            Styles['link-tool__content--rendered'],
          )}
          target="_blank"
          rel="nofollow noindex noreferrer"
          href={data.link}
        >
          <div
            className={Styles['link-tool__image']}
            style={{
              backgroundImage: `url(${data.meta.image.url})`,
            }}
          />
          <div className={Styles['link-tool__title']}>{data.meta.title}</div>
          <p className={Styles['link-tool__description']}>{data.meta.description}</p>
          <span className={Styles['link-tool__anchor']}>{anchor}</span>
        </a>
      </div>
    </div>
  )
}

export const headerParser: Parser<'header', HeaderData> = ({ id, data }) => {
  if (!data) return
  if (data.level === 2)
    return (
      <h2
        id={id}
        className={Styles['ce-header']}
        data-placeholder="へッダー"
        style={{
          fontSize: '1.25rem',
          fontWeight: 'bold',
        }}
      >
        {data.text}
      </h2>
    )
  if (data.level === 3)
    return (
      <h3
        id={id}
        className={Styles['ce-header']}
        data-placeholder="へッダー"
        style={{
          fontSize: '1.125rem',
          fontWeight: 'bold',
        }}
      >
        {data.text}
      </h3>
    )
  else
    return (
      <h2
        id={id}
        className={Styles['ce-header']}
        data-placeholder="へッダー"
        style={{
          fontSize: '1rem',
          fontWeight: 'bold',
        }}
      >
        {data.text}
      </h2>
    )
}

export const listParser: Parser<'list', ListData> = ({ id, data }) => {
  if (!data) return
  const orderStyle = data.style
  const orderStyleClass =
    orderStyle === 'ordered' ? 'cdx-nested-list--ordered' : 'cdx-nested-list--unordered'
  const createItem = (items: ListData['items']): ReactNode[] => {
    return items.map((item, i) => (
      <li className={Styles['cdx-nested-list__item']} key={i}>
        <div className={Styles['cdx-nested-list__item-body']}>
          <div
            className={Styles['cdx-nested-list__item-content']}
            dangerouslySetInnerHTML={{
              __html: item.content ?? '',
            }}
          />
          {item.items.length !== 0 && orderStyle === 'ordered' && (
            <ol
              className={classNames(
                Styles['cdx-nested-list'],
                Styles['cdx-nested-list__item-children'],
                Styles[orderStyleClass],
              )}
            >
              {createItem(item.items)}
            </ol>
          )}
          {item.items.length !== 0 && orderStyle === 'unordered' && (
            <ul
              className={classNames(
                Styles['cdx-nested-list'],
                Styles['cdx-nested-list__item-children'],
                Styles[orderStyleClass],
              )}
            >
              {createItem(item.items)}
            </ul>
          )}
        </div>
      </li>
    ))
  }

  if (data.style === 'ordered') {
    return (
      <ol
        id={id}
        className={classNames(
          Styles['cdx-nested-list'],
          Styles['cdx-block'],
          Styles[orderStyleClass],
        )}
      >
        {createItem(data.items)}
      </ol>
    )
  } else {
    return (
      <ul
        id={id}
        className={classNames(
          Styles['cdx-nested-list'],
          Styles['cdx-block'],
          Styles[orderStyleClass],
        )}
      >
        {createItem(data.items)}
      </ul>
    )
  }
}

export const embedParser: Parser<'embed', EmbedData> = ({ id, data }) => {
  if (!data) return
  return (
    <div className={Styles['cdx-block']}>
      <div id={id} className={Styles['embed-tool']}>
        <iframe
          frameBorder="0"
          src={data.embed}
          height="320"
          className={Styles['embed-tool__content']}
        ></iframe>
      </div>
    </div>
  )
}

export const quoteParser: Parser<'quote', QuoteData> = ({ id, data }) => {
  if (!data) return
  const caption = data.caption.replace(/<br\s*\/?>/gi, '')
  return (
    <blockquote id={id} className={classNames(Styles['cdx-block'], Styles['cdx-quote'])}>
      <div
        className={classNames(Styles['cdx-input'], Styles['cdx-quote__text'])}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: data.text,
          }}
        />
        <cite
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            color: '#707684',
          }}
          dangerouslySetInnerHTML={{
            __html: caption,
          }}
        />
      </div>
    </blockquote>
  )
}

export const paymentLineParser: Parser<'payment', PaymentLineData> = ({ id }) => {
  return (
    <div id={id} className={Styles['payment']}>
      このラインより先を有料にする
    </div>
  )
}

export const parser = (
  plugins: {
    [key in string]: Parser
  } = {},
) => {
  const parsers = Object.assign({}, plugins)

  const parse = (blocks: OutputData['blocks']): Array<ReactNode> => {
    return blocks.map(_mapper)
  }

  const _mapper = (block: OutputBlockData, i: number) => {
    if (parsers[block.type]) {
      return (
        <div className={Styles['ce-block']} key={i}>
          <div className={Styles['cdx-block']}>{parsers[block.type](block)}</div>
        </div>
      )
    } else throw new ParseFunctionError(block.type)
  }

  return {
    parse,
  }
}

class ParseFunctionError extends Error {
  constructor(type: string) {
    super(`\x1b[31m The Parser function of type "${type}" is not defined. \n
    Define your custom parser functions as: \x1b[34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks \x1b[0m`)
    this.name = 'ParseFunctionError'
  }
}

export const paymentButton: FC<{
  key?: string
  value?: boolean
  onClick?: () => void
}> = ({ key, value, onClick }): ReactNode => (
  <button
    key={key}
    className={value ? Styles['payment'] : Styles['payment-button']}
    onClick={onClick}
  >
    このラインより先を有料にする
  </button>
)

export const indexParser: FC<OutputBlockData<'header', HeaderData>[]> = (headers) => {
  const onClickLink = (headerId?: string) => {
    if (typeof document !== 'undefined' && headerId) {
      const el = document.getElementById(headerId)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const baseStyle: CSSProperties = {
    cursor: 'pointer',
    margin: '1rem',
  }

  const h2Style: CSSProperties = {
    listStyle: 'none',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    ...baseStyle,
  }
  const h3Style: CSSProperties = {
    paddingLeft: '0.5rem',
    listStyle: 'none',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    ...baseStyle,
  }
  const otherStyle: CSSProperties = {
    paddingLeft: '1rem',
    listStyle: 'none',
    ...baseStyle,
  }

  return (
    <div
      style={{
        backgroundColor: '#FDFDFD',
      }}
    >
      <p
        style={{
          textAlign: 'center',
          color: '#A3A3A3',
          margin: 'o.5rem',
        }}
      >
        目次
      </p>
      <ul
        style={{
          color: '#3F3F3F',
          listStyleType: 'decimal',
          listStylePosition: 'inside',
        }}
      >
        {headers.map((header, i) => (
          <Fragment key={header.id}>
            <li
              style={(() => {
                // h2の時
                if (header.data.level === 2) return h2Style
                // h2の時
                else if (header.data.level === 3) return h3Style
                else otherStyle
              })()}
              onClick={() => onClickLink(header.id)}
            >
              {header.data.text}
            </li>
            {headers.length - 1 !== i && (
              <hr
                style={{
                  color: '#A3A3A3',
                  opacity: 0.3,
                }}
              />
            )}
          </Fragment>
        ))}
      </ul>
    </div>
  )
}
