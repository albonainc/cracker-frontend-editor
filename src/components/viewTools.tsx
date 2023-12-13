import type { Parser } from "../components/preview";
import type { ImageToolData } from "@editorjs/image";
import type { LinkToolData } from "@editorjs/link";
import type { HeaderData } from "@editorjs/header";
import type { ListData } from "@editorjs/nested-list";
import type { EmbedData } from "../components/tools/embed";
import type { QuoteData } from "../components/tools/quote";

export const imageParser: Parser<ImageToolData> = ({ id, data }) => {
  return `
    <div id="${id}" class="image-tool__image">
      <img src="${data.file.url}" class="image-tool__image-picture" alt="${data.caption}">
    </div>
  `;
};

export const linkParser: Parser<LinkToolData> = ({ id, data }) => {
  const anchor = new URL(data.link).hostname;
  return `
    <div id="${id}" class="link-tool">
      <a class="link-tool__content link-tool__content--rendered" target="_blank" rel="nofollow noindex noreferrer" href="${data.link}">
        <div class="link-tool__image" style="background-image: url(&quot;${data.meta.image}&quot;);"></div>
        <div class="link-tool__title">${data.meta.title}</div>
        <p class="link-tool__description">${data.meta.description}</p>
        <span class="link-tool__anchor">${anchor}</span>
      </a>
    </div>
  `;
};

export const headerParser: Parser<HeaderData> = ({ id, data }) => {
  return `
    <h${data.level} id="${id}" class="ce-header" data-placeholder="へッダー">${data.text}</h$>
  `;
};

export const listParser: Parser<ListData> = ({ id, data }) => {
  const orderStyleClass = `cdx-nested-list--${data.style}`;
  const createItem = (data: ListData["items"]): string => {
    return data
      .map(
        (item) => `
      <li class="cdx-nested-list__item">
        <div class="cdx-nested-list__item-body">
          <div class="cdx-nested-list__item-content">${item.content}</div>
          ${
            item.items.length !== 0
              ? `
              <ul class="cdx-nested-list cdx-nested-list__item-children ${orderStyleClass}">
                ${createItem(item.items)}
              </ul>
            `
              : ""
          }
        </div>
      </li>
    `
      )
      .join("\n");
  };

  return `
    <ul id="${id}" class="cdx-nested-list cdx-block ${orderStyleClass}">
      ${createItem(data.items)}
    </ul>
  `;
};

export const embedParser: Parser<EmbedData> = ({ id, data }) => {
  return `
    <div id="${id}" class="embed-tool">
      <iframe style="width: ${data.width};" height="${data.height}" frameborder="0" allowfullscreen="" src="${data.embed}" class="embed-tool__content"></iframe>
    </div>
  `;
};

export const quoteParser: Parser<QuoteData> = ({ id, data }) => {
  return `
    <blockquote id="${id}" class="cdx-block cdx-quote">
      <div class="cdx-input cdx-quote__text cdx-quote__preview">
        ${data.text}
        <cite>${data.caption}</cite>
      </div>
    </blockquote>
  `;
};
