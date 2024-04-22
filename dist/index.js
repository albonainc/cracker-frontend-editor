(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode("/* global */\n._cdx-block_8gufy_2 {\n  font-size: 18px;\n  line-height: 1.7rem;\n  padding: 0.4em 0;\n}\n._ce-block_8gufy_7 a {\n  cursor: pointer;\n  -webkit-text-decoration: underline;\n  text-decoration: underline;\n}\n\n/* paragraph */\n._ce-paragraph_8gufy_14 {\n  word-break: break-all;\n  line-height: 2rem;\n  font-size: 1rem;\n}\n\n/* link */\n._link-tool_8gufy_21 {\n  position: relative;\n}\n._link-tool__content--rendered_8gufy_24 {\n  background: #fff;\n  border: 1px solid rgba(201, 201, 204, 0.48);\n  box-shadow: 0 1px 3px #0000001a;\n  border-radius: 6px;\n  will-change: filter;\n  animation: _link-in_8gufy_1 0.45s 1 cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n._link-tool__content_8gufy_24 {\n  display: block;\n  padding: 25px;\n  border-radius: 2px;\n  box-shadow: 0 0 0 2px #fff;\n  color: initial !important;\n  text-decoration: none !important;\n}\n._link-tool__content_8gufy_24:after {\n  content: '';\n  clear: both;\n  display: table;\n}\n._link-tool__image_8gufy_45 {\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin: 0 0 0 30px;\n  width: 65px;\n  height: 65px;\n  border-radius: 3px;\n  float: right;\n}\n._link-tool__title_8gufy_55 {\n  font-size: 17px;\n  font-weight: 600;\n  line-height: 1.5em;\n  margin: 0 0 10px;\n}\n._link-tool__description_8gufy_61 {\n  margin: 0 0 20px;\n  font-size: 15px;\n  line-height: 1.55em;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n._link-tool__anchor_8gufy_70 {\n  display: block;\n  font-size: 15px;\n  line-height: 1em;\n  color: #888 !important;\n  border: 0 !important;\n  padding: 0 !important;\n}\n\n/* embed */\n._embed-tool_8gufy_80 {\n  position: relative;\n  padding: 0.4em 0;\n}\n._embed-tool__content_8gufy_84 {\n  width: 100%;\n}\n\n/* payment */\n._payment_8gufy_89 {\n  font-weight: bold;\n  background-color: #ffda00;\n  padding-top: 0.3rem;\n  padding-bottom: 0.3rem;\n  width: 100%;\n  text-align: center;\n  border: 1px solid white;\n}\n\n/* quote */\n._cdx-quote_8gufy_100 {\n  margin: 0;\n}\n._cdx-input_8gufy_103 {\n  border: 1px solid rgba(201, 201, 204, 0.48);\n  box-shadow: inset 0 1px 2px #232c480f;\n  border-radius: 3px;\n  padding: 10px 12px;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n}\n._cdx-quote__text_8gufy_114 {\n  min-height: 158px;\n  background-color: #ededed;\n  border: none;\n}\n\n/* nested-list */\n._cdx-nested-list_8gufy_121 {\n  margin: 0;\n  padding: 0 1rem;\n  outline: none;\n  background-color: #f4f4f4;\n  counter-reset: number 0 !important;\n}\n._cdx-nested-list--ordered_8gufy_128 {\n  list-style: none;\n}\n._cdx-nested-list--ordered_8gufy_128 ._cdx-nested-list__item_8gufy_131::before {\n  background: #ffda00;\n  border-radius: 50%;\n  counter-increment: number 1 !important;\n  content: counter(number) !important;\n  display: inline-block;\n  font-size: 13px;\n  font-weight: 700;\n  height: 1.5rem;\n  min-height: 1.5rem;\n  width: 1.5rem;\n  min-width: 1.5rem;\n  line-height: 1.5rem;\n  margin: 0 0.5rem;\n  text-align: center;\n}\n._cdx-nested-list--ordered_8gufy_128 ._cdx-nested-list__item_8gufy_131::marker {\n  content: none;\n}\n._cdx-nested-list--unordered_8gufy_150 {\n  list-style: none;\n}\n._cdx-nested-list--unordered_8gufy_150 ._cdx-nested-list__item_8gufy_131::before {\n  background: #ffda00;\n  border-radius: 50%;\n  content: '' !important;\n  display: inline-block;\n  font-size: 13px;\n  font-weight: 700;\n  height: 1rem;\n  min-height: 1rem;\n  width: 1rem;\n  min-width: 1rem;\n  margin: 0.3rem 0.5rem;\n  text-align: center;\n}\n._cdx-nested-list--unordered_8gufy_150 ._cdx-nested-list__item_8gufy_131::marker {\n  content: none;\n}\n._cdx-nested-list__item_8gufy_131 {\n  padding: 5.5px 0 5.5px 3px;\n  line-height: 1.6em;\n  display: flex;\n  margin: 2px 0;\n}\n._cdx-list-settings_8gufy_176 {\n  display: flex;\n}\n._cdx-list-settings_8gufy_176 ._cdx-settings-button_8gufy_179 {\n  width: 50%;\n}\n\n/* paymentButton */\n._payment-button_8gufy_184 {\n  font-weight: bold;\n  width: 100%;\n  text-align: center;\n  padding-top: 0.3rem;\n  padding-bottom: 0.3rem;\n  border: 1px solid black;\n}\n._payment-button_8gufy_184:hover {\n  background-color: #a3a3a3;\n}"));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
import { jsx, jsxs } from "react/jsx-runtime";
import classNames from "classnames";
import { Fragment, useState, useEffect, useMemo, useCallback } from "react";
const payment = "_payment_8gufy_89";
const Styles = {
  "cdx-block": "_cdx-block_8gufy_2",
  "ce-block": "_ce-block_8gufy_7",
  "ce-paragraph": "_ce-paragraph_8gufy_14",
  "link-tool": "_link-tool_8gufy_21",
  "link-tool__content--rendered": "_link-tool__content--rendered_8gufy_24",
  "link-in": "_link-in_8gufy_1",
  "link-tool__content": "_link-tool__content_8gufy_24",
  "link-tool__image": "_link-tool__image_8gufy_45",
  "link-tool__title": "_link-tool__title_8gufy_55",
  "link-tool__description": "_link-tool__description_8gufy_61",
  "link-tool__anchor": "_link-tool__anchor_8gufy_70",
  "embed-tool": "_embed-tool_8gufy_80",
  "embed-tool__content": "_embed-tool__content_8gufy_84",
  payment,
  "cdx-quote": "_cdx-quote_8gufy_100",
  "cdx-input": "_cdx-input_8gufy_103",
  "cdx-quote__text": "_cdx-quote__text_8gufy_114",
  "cdx-nested-list": "_cdx-nested-list_8gufy_121",
  "cdx-nested-list--ordered": "_cdx-nested-list--ordered_8gufy_128",
  "cdx-nested-list__item": "_cdx-nested-list__item_8gufy_131",
  "cdx-nested-list--unordered": "_cdx-nested-list--unordered_8gufy_150",
  "cdx-list-settings": "_cdx-list-settings_8gufy_176",
  "cdx-settings-button": "_cdx-settings-button_8gufy_179",
  "payment-button": "_payment-button_8gufy_184"
};
const paragraphParser = ({ id, data }) => {
  if (!data)
    return;
  return /* @__PURE__ */ jsx(
    "p",
    {
      id,
      className: classNames(Styles["ce-paragraph"], Styles["cdx-block"]),
      dangerouslySetInnerHTML: { __html: data.text }
    }
  );
};
const imageParser = ({ id, data }) => {
  if (!data)
    return;
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { id, className: classNames(data.withBackground && "bg-[#cdd1e0] p-[15px]"), children: /* @__PURE__ */ jsx(
    "img",
    {
      src: data.file.url,
      alt: data.caption ?? void 0,
      className: classNames(
        data.withBackground && "max-w-[60%]",
        "m-auto",
        data.withBorder && "border border-[#e8e8eb]",
        data.stretched && "w-full"
      )
    }
  ) }) });
};
const linkParser = ({ id, data }) => {
  if (!data)
    return;
  const anchor = new URL(data.link).hostname;
  return /* @__PURE__ */ jsx("div", { className: Styles["cdx-block"], children: /* @__PURE__ */ jsx("div", { id, className: Styles["link-tool"], children: /* @__PURE__ */ jsxs(
    "a",
    {
      className: classNames(
        Styles["link-tool__content"],
        Styles["link-tool__content--rendered"]
      ),
      target: "_blank",
      rel: "nofollow noindex noreferrer",
      href: data.link,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: Styles["link-tool__image"],
            style: {
              backgroundImage: `url(${data.meta.image.url})`
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: Styles["link-tool__title"], children: data.meta.title }),
        /* @__PURE__ */ jsx("p", { className: Styles["link-tool__description"], children: data.meta.description }),
        /* @__PURE__ */ jsx("span", { className: Styles["link-tool__anchor"], children: anchor })
      ]
    }
  ) }) });
};
const headerParser = ({ id, data }) => {
  if (!data)
    return;
  if (data.level === 2)
    return /* @__PURE__ */ jsx(
      "h2",
      {
        id,
        className: Styles["ce-header"],
        "data-placeholder": "へッダー",
        style: {
          fontSize: "1.25rem",
          fontWeight: "bold"
        },
        children: data.text
      }
    );
  if (data.level === 3)
    return /* @__PURE__ */ jsx(
      "h3",
      {
        id,
        className: Styles["ce-header"],
        "data-placeholder": "へッダー",
        style: {
          fontSize: "1.125rem",
          fontWeight: "bold"
        },
        children: data.text
      }
    );
  else
    return /* @__PURE__ */ jsx(
      "h2",
      {
        id,
        className: Styles["ce-header"],
        "data-placeholder": "へッダー",
        style: {
          fontSize: "1rem",
          fontWeight: "bold"
        },
        children: data.text
      }
    );
};
const listParser = ({ id, data }) => {
  if (!data)
    return;
  const orderStyle = data.style;
  const orderStyleClass = orderStyle === "ordered" ? "cdx-nested-list--ordered" : "cdx-nested-list--unordered";
  const createItem = (items) => {
    return items.map((item, i) => /* @__PURE__ */ jsx("li", { className: Styles["cdx-nested-list__item"], children: /* @__PURE__ */ jsxs("div", { className: Styles["cdx-nested-list__item-body"], children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: Styles["cdx-nested-list__item-content"],
          dangerouslySetInnerHTML: {
            __html: item.content ?? ""
          }
        }
      ),
      item.items.length !== 0 && orderStyle === "ordered" && /* @__PURE__ */ jsx(
        "ol",
        {
          className: classNames(
            Styles["cdx-nested-list"],
            Styles["cdx-nested-list__item-children"],
            Styles[orderStyleClass]
          ),
          children: createItem(item.items)
        }
      ),
      item.items.length !== 0 && orderStyle === "unordered" && /* @__PURE__ */ jsx(
        "ul",
        {
          className: classNames(
            Styles["cdx-nested-list"],
            Styles["cdx-nested-list__item-children"],
            Styles[orderStyleClass]
          ),
          children: createItem(item.items)
        }
      )
    ] }) }, i));
  };
  if (data.style === "ordered") {
    return /* @__PURE__ */ jsx(
      "ol",
      {
        id,
        className: classNames(
          Styles["cdx-nested-list"],
          Styles["cdx-block"],
          Styles[orderStyleClass]
        ),
        children: createItem(data.items)
      }
    );
  } else {
    return /* @__PURE__ */ jsx(
      "ul",
      {
        id,
        className: classNames(
          Styles["cdx-nested-list"],
          Styles["cdx-block"],
          Styles[orderStyleClass]
        ),
        children: createItem(data.items)
      }
    );
  }
};
const embedParser = ({ id, data }) => {
  if (!data)
    return;
  return /* @__PURE__ */ jsx("div", { className: Styles["cdx-block"], children: /* @__PURE__ */ jsx("div", { id, className: Styles["embed-tool"], children: /* @__PURE__ */ jsx(
    "iframe",
    {
      frameBorder: "0",
      src: data.embed,
      height: "320",
      className: Styles["embed-tool__content"]
    }
  ) }) });
};
const quoteParser = ({ id, data }) => {
  if (!data)
    return;
  const caption = data.caption.replace(/<br\s*\/?>/gi, "");
  return /* @__PURE__ */ jsx("blockquote", { id, className: classNames(Styles["cdx-block"], Styles["cdx-quote"]), children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: classNames(Styles["cdx-input"], Styles["cdx-quote__text"]),
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      },
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            dangerouslySetInnerHTML: {
              __html: data.text
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "cite",
          {
            style: {
              display: "flex",
              justifyContent: "flex-end",
              color: "#707684"
            },
            dangerouslySetInnerHTML: {
              __html: caption
            }
          }
        )
      ]
    }
  ) });
};
const paymentLineParser = ({ id }) => {
  return /* @__PURE__ */ jsx("div", { id, className: Styles["payment"], children: "このラインより先を有料にする" });
};
const parser = (plugins = {}) => {
  const parsers = Object.assign({}, plugins);
  const parse = (blocks) => {
    return blocks.map(_mapper);
  };
  const _mapper = (block, i) => {
    if (parsers[block.type]) {
      return /* @__PURE__ */ jsx("div", { className: Styles["ce-block"], children: /* @__PURE__ */ jsx("div", { className: Styles["cdx-block"], children: parsers[block.type](block) }) }, i);
    } else
      throw new ParseFunctionError(block.type);
  };
  return {
    parse
  };
};
class ParseFunctionError extends Error {
  constructor(type) {
    super(`\x1B[31m The Parser function of type "${type}" is not defined. 

    Define your custom parser functions as: \x1B[34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks \x1B[0m`);
    this.name = "ParseFunctionError";
  }
}
const paymentButton = ({ key, value, onClick }) => /* @__PURE__ */ jsx(
  "button",
  {
    className: value ? Styles["payment"] : Styles["payment-button"],
    onClick,
    children: "このラインより先を有料にする"
  },
  key
);
const indexParser = (headers) => {
  const onClickLink = (headerId) => {
    if (typeof document !== "undefined" && headerId) {
      const el = document.getElementById(headerId);
      el == null ? void 0 : el.scrollIntoView({ behavior: "smooth" });
    }
  };
  const baseStyle = {
    cursor: "pointer",
    margin: "1rem"
  };
  const h2Style = {
    listStyle: "none",
    fontSize: "1rem",
    lineHeight: "1.5rem",
    ...baseStyle
  };
  const h3Style = {
    paddingLeft: "0.5rem",
    listStyle: "none",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    ...baseStyle
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        backgroundColor: "#FDFDFD"
      },
      children: [
        /* @__PURE__ */ jsx(
          "p",
          {
            style: {
              textAlign: "center",
              color: "#A3A3A3",
              margin: "o.5rem"
            },
            children: "目次"
          }
        ),
        /* @__PURE__ */ jsx(
          "ul",
          {
            style: {
              color: "#3F3F3F",
              listStyleType: "decimal",
              listStylePosition: "inside"
            },
            children: headers.map((header, i) => /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(
                "li",
                {
                  style: (() => {
                    if (header.data.level === 2)
                      return h2Style;
                    else if (header.data.level === 3)
                      return h3Style;
                    else
                      ;
                  })(),
                  onClick: () => onClickLink(header.id),
                  children: header.data.text
                }
              ),
              headers.length - 1 !== i && /* @__PURE__ */ jsx(
                "hr",
                {
                  style: {
                    color: "#A3A3A3",
                    opacity: 0.3
                  }
                }
              )
            ] }, header.id))
          }
        )
      ]
    }
  );
};
const editorParser$1 = parser({
  paragraph: paragraphParser,
  header: headerParser,
  list: listParser,
  payment: paymentLineParser,
  image: imageParser,
  link: linkParser,
  embed: embedParser,
  quote: quoteParser
});
const Preview = ({ blocks }) => {
  if (!blocks)
    return /* @__PURE__ */ jsx("div", {});
  const html = editorParser$1.parse(blocks);
  return /* @__PURE__ */ jsx("div", { className: "w-full", children: html });
};
const Index = ({ blocks }) => {
  if (!blocks)
    return /* @__PURE__ */ jsx("div", {});
  const html = indexParser(
    blocks.filter((block) => block.type === "header")
  );
  return /* @__PURE__ */ jsx("div", { className: "w-full", children: html });
};
const useEditorCounter = (data) => {
  const [textCount, setTextCount] = useState(0);
  useEffect(() => {
    data ? setTextCount(counter(data)) : setTextCount(0);
  }, [data]);
  return textCount;
};
const counter = (data) => {
  let count = 0;
  data.blocks.forEach((item) => {
    if (item.type === "paragraph")
      count += paragraphCounter(item.data);
    if (item.type === "link")
      count += linkCounter(item.data);
    if (item.type === "header")
      count += headerCounter(item.data);
    if (item.type === "list")
      count += listCounter(item.data);
    if (item.type === "embed")
      count += embedCounter(item.data);
    if (item.type === "image")
      count += imageCounter(item.data);
    if (item.type === "quote")
      count += quoteCounter(item.data);
  });
  return count;
};
const paragraphCounter = ({ text }) => {
  return text.length;
};
const imageCounter = ({ caption }) => {
  return (caption == null ? void 0 : caption.length) ?? 0;
};
const linkCounter = ({ link }) => {
  return link.length;
};
const headerCounter = ({ text }) => {
  return text.length;
};
const listCounter = ({ items }) => {
  const countItem = (data) => {
    return data.map((item) => {
      var _a;
      return (((_a = item.content) == null ? void 0 : _a.length) ?? 0) + countItem(item.items);
    }).reduce((sum, currentItem) => sum + currentItem, 0);
  };
  return countItem(items);
};
const embedCounter = (data) => {
  return (data == null ? void 0 : data.source.length) ?? 0;
};
const quoteCounter = ({ text, caption }) => {
  return text.length + caption.length;
};
const isFoundedPreviewURL = (data) => {
  const regex = /https?:\/\/[\w.-]+(:\d+)?\/article\/preview\/[^/\s?]+(?:[/?][^\s]*)?/g;
  let isFounded = false;
  if (typeof data === "string") {
    isFounded = !!data.match(regex);
  } else
    data.blocks.forEach((block) => {
      if (block.type === "paragraph") {
        if (block.data.text.match(regex))
          isFounded = true;
      }
      if (block.type === "header") {
        if (block.data.text.match(regex))
          isFounded = true;
      }
      if (block.type === "list") {
        const searchItem = (items) => {
          items.forEach((item) => {
            var _a;
            if ((_a = item.content) == null ? void 0 : _a.match(regex)) {
              isFounded = true;
            }
            searchItem(item.items);
          });
        };
        searchItem(block.data.items);
      }
      if (block.type === "link") {
        if (block.data.link.match(regex))
          isFounded = true;
      }
      if (block.type === "quote") {
        if (block.data.text.match(regex))
          isFounded = true;
        if (block.data.caption.match(regex))
          isFounded = true;
      }
    });
  return isFounded;
};
const editorParser = parser({
  paragraph: paragraphParser,
  header: headerParser,
  list: listParser,
  image: imageParser,
  link: linkParser,
  embed: embedParser,
  quote: quoteParser
});
const SetPaymentLine = ({ data, onChange }) => {
  const paymentLineIndex = useMemo(() => {
    const index = data.blocks.findIndex((block) => block.type === "payment");
    return index === -1 ? void 0 : index;
  }, [data]);
  const removePaymentFromData = useMemo(() => {
    return {
      ...data,
      blocks: data.blocks.filter((block) => block.type !== "payment")
    };
  }, [data]);
  const html = useMemo(
    () => editorParser.parse(removePaymentFromData.blocks),
    [removePaymentFromData]
  );
  const [value, setValue] = useState(paymentLineIndex);
  const onChangeValue = useCallback(
    (index) => {
      if (value === index) {
        setValue(void 0);
        onChange(removePaymentFromData);
      } else {
        setValue(index);
        const lastBlockIndex = removePaymentFromData.blocks.length - 1;
        const newData = {
          ...removePaymentFromData,
          blocks: removePaymentFromData.blocks.flatMap((block, i) => {
            if (i === index) {
              return [
                {
                  id: "----------",
                  type: "payment",
                  data: {}
                },
                block
              ];
            } else if (i === lastBlockIndex && i === index - 1) {
              return [
                block,
                {
                  id: "----------",
                  type: "payment",
                  data: {}
                }
              ];
            }
            return block;
          })
        };
        onChange(newData);
      }
    },
    [onChange, removePaymentFromData, value]
  );
  const mappedHtml = useMemo(() => {
    return html.flatMap((node, i) => {
      return [
        node,
        paymentButton({
          key: `${i}-payment-button`,
          value: value === i + 1,
          onClick: () => {
            onChangeValue(i + 1);
          }
        })
      ];
    });
  }, [html, onChangeValue, value]);
  return /* @__PURE__ */ jsx("div", { className: "w-full", children: mappedHtml });
};
export {
  Index,
  Preview,
  SetPaymentLine,
  counter,
  isFoundedPreviewURL,
  useEditorCounter
};
//# sourceMappingURL=index.js.map
