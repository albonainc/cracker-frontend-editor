import { jsx as l, jsxs as m } from "react/jsx-runtime";
import a from "classnames";
import { Fragment as q, useState as y, useEffect as I, useMemo as h, useCallback as F } from "react";
const L = "_payment_8gufy_89", r = {
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
  payment: L,
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
}, g = ({ id: t, data: e }) => {
  if (e)
    return /* @__PURE__ */ l(
      "p",
      {
        id: t,
        className: a(r["ce-paragraph"], r["cdx-block"]),
        dangerouslySetInnerHTML: { __html: e.text }
      }
    );
}, x = ({ id: t, data: e }) => {
  if (e)
    return /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l("div", { id: t, className: a(e.withBackground && "bg-[#cdd1e0] p-[15px]"), children: /* @__PURE__ */ l(
      "img",
      {
        src: e.file.url,
        alt: e.caption ?? void 0,
        className: a(
          e.withBackground && "max-w-[60%]",
          "m-auto",
          e.withBorder && "border border-[#e8e8eb]",
          e.stretched && "w-full"
        )
      }
    ) }) });
}, k = ({ id: t, data: e }) => {
  if (!e)
    return;
  const n = new URL(e.link).hostname;
  return /* @__PURE__ */ l("div", { className: r["cdx-block"], children: /* @__PURE__ */ l("div", { id: t, className: r["link-tool"], children: /* @__PURE__ */ m(
    "a",
    {
      className: a(
        r["link-tool__content"],
        r["link-tool__content--rendered"]
      ),
      target: "_blank",
      rel: "nofollow noindex noreferrer",
      href: e.link,
      children: [
        /* @__PURE__ */ l(
          "div",
          {
            className: r["link-tool__image"],
            style: {
              backgroundImage: `url(${e.meta.image.url})`
            }
          }
        ),
        /* @__PURE__ */ l("div", { className: r["link-tool__title"], children: e.meta.title }),
        /* @__PURE__ */ l("p", { className: r["link-tool__description"], children: e.meta.description }),
        /* @__PURE__ */ l("span", { className: r["link-tool__anchor"], children: n })
      ]
    }
  ) }) });
}, b = ({ id: t, data: e }) => {
  if (e)
    return e.level === 2 ? /* @__PURE__ */ l(
      "h2",
      {
        id: t,
        className: r["ce-header"],
        "data-placeholder": "へッダー",
        style: {
          fontSize: "1.25rem",
          fontWeight: "bold"
        },
        children: e.text
      }
    ) : e.level === 3 ? /* @__PURE__ */ l(
      "h3",
      {
        id: t,
        className: r["ce-header"],
        "data-placeholder": "へッダー",
        style: {
          fontSize: "1.125rem",
          fontWeight: "bold"
        },
        children: e.text
      }
    ) : /* @__PURE__ */ l(
      "h2",
      {
        id: t,
        className: r["ce-header"],
        "data-placeholder": "へッダー",
        style: {
          fontSize: "1rem",
          fontWeight: "bold"
        },
        children: e.text
      }
    );
}, v = ({ id: t, data: e }) => {
  if (!e)
    return;
  const n = e.style, s = n === "ordered" ? "cdx-nested-list--ordered" : "cdx-nested-list--unordered", o = (c) => c.map((i, u) => /* @__PURE__ */ l("li", { className: r["cdx-nested-list__item"], children: /* @__PURE__ */ m("div", { className: r["cdx-nested-list__item-body"], children: [
    /* @__PURE__ */ l(
      "div",
      {
        className: r["cdx-nested-list__item-content"],
        dangerouslySetInnerHTML: {
          __html: i.content ?? ""
        }
      }
    ),
    i.items.length !== 0 && n === "ordered" && /* @__PURE__ */ l(
      "ol",
      {
        className: a(
          r["cdx-nested-list"],
          r["cdx-nested-list__item-children"],
          r[s]
        ),
        children: o(i.items)
      }
    ),
    i.items.length !== 0 && n === "unordered" && /* @__PURE__ */ l(
      "ul",
      {
        className: a(
          r["cdx-nested-list"],
          r["cdx-nested-list__item-children"],
          r[s]
        ),
        children: o(i.items)
      }
    )
  ] }) }, u));
  return e.style === "ordered" ? /* @__PURE__ */ l(
    "ol",
    {
      id: t,
      className: a(
        r["cdx-nested-list"],
        r["cdx-block"],
        r[s]
      ),
      children: o(e.items)
    }
  ) : /* @__PURE__ */ l(
    "ul",
    {
      id: t,
      className: a(
        r["cdx-nested-list"],
        r["cdx-block"],
        r[s]
      ),
      children: o(e.items)
    }
  );
}, N = ({ id: t, data: e }) => {
  if (e)
    return /* @__PURE__ */ l("div", { className: r["cdx-block"], children: /* @__PURE__ */ l("div", { id: t, className: r["embed-tool"], children: /* @__PURE__ */ l(
      "iframe",
      {
        frameBorder: "0",
        src: e.embed,
        height: "320",
        className: r["embed-tool__content"]
      }
    ) }) });
}, S = ({ id: t, data: e }) => {
  if (!e)
    return;
  const n = e.caption.replace(/<br\s*\/?>/gi, "");
  return /* @__PURE__ */ l("blockquote", { id: t, className: a(r["cdx-block"], r["cdx-quote"]), children: /* @__PURE__ */ m(
    "div",
    {
      className: a(r["cdx-input"], r["cdx-quote__text"]),
      style: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      },
      children: [
        /* @__PURE__ */ l(
          "span",
          {
            dangerouslySetInnerHTML: {
              __html: e.text
            }
          }
        ),
        /* @__PURE__ */ l(
          "cite",
          {
            style: {
              display: "flex",
              justifyContent: "flex-end",
              color: "#707684"
            },
            dangerouslySetInnerHTML: {
              __html: n
            }
          }
        )
      ]
    }
  ) });
}, B = ({ id: t }) => /* @__PURE__ */ l("div", { id: t, className: r.payment, children: "このラインより先を有料にする" }), w = (t = {}) => {
  const e = Object.assign({}, t), n = (o) => o.map(s), s = (o, c) => {
    if (e[o.type])
      return /* @__PURE__ */ l("div", { className: r["ce-block"], children: /* @__PURE__ */ l("div", { className: r["cdx-block"], children: e[o.type](o) }) }, c);
    throw new E(o.type);
  };
  return {
    parse: n
  };
};
class E extends Error {
  constructor(e) {
    super(`\x1B[31m The Parser function of type "${e}" is not defined. 

    Define your custom parser functions as: \x1B[34mhttps://github.com/pavittarx/editorjs-html#extend-for-custom-blocks \x1B[0m`), this.name = "ParseFunctionError";
  }
}
const A = ({ key: t, value: e, onClick: n }) => /* @__PURE__ */ l(
  "button",
  {
    className: e ? r.payment : r["payment-button"],
    onClick: n,
    children: "このラインより先を有料にする"
  },
  t
), D = (t) => {
  const e = (c) => {
    if (typeof document < "u" && c) {
      const i = document.getElementById(c);
      i == null || i.scrollIntoView({ behavior: "smooth" });
    }
  }, n = {
    cursor: "pointer",
    margin: "1rem"
  }, s = {
    listStyle: "none",
    fontSize: "1rem",
    lineHeight: "1.5rem",
    ...n
  }, o = {
    paddingLeft: "0.5rem",
    listStyle: "none",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    ...n
  };
  return /* @__PURE__ */ m(
    "div",
    {
      style: {
        backgroundColor: "#FDFDFD"
      },
      children: [
        /* @__PURE__ */ l(
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
        /* @__PURE__ */ l(
          "ul",
          {
            style: {
              color: "#3F3F3F",
              listStyleType: "decimal",
              listStylePosition: "inside"
            },
            children: t.map((c, i) => /* @__PURE__ */ m(q, { children: [
              /* @__PURE__ */ l(
                "li",
                {
                  style: (() => {
                    if (c.data.level === 2)
                      return s;
                    if (c.data.level === 3)
                      return o;
                  })(),
                  onClick: () => e(c.id),
                  children: c.data.text
                }
              ),
              t.length - 1 !== i && /* @__PURE__ */ l(
                "hr",
                {
                  style: {
                    color: "#A3A3A3",
                    opacity: 0.3
                  }
                }
              )
            ] }, c.id))
          }
        )
      ]
    }
  );
}, H = w({
  paragraph: g,
  header: b,
  list: v,
  payment: B,
  image: x,
  link: k,
  embed: N,
  quote: S
}), K = ({ blocks: t }) => {
  if (!t)
    return /* @__PURE__ */ l("div", {});
  const e = H.parse(t);
  return /* @__PURE__ */ l("div", { className: "w-full", children: e });
}, Q = ({ blocks: t }) => {
  if (!t)
    return /* @__PURE__ */ l("div", {});
  const e = D(
    t.filter((n) => n.type === "header")
  );
  return /* @__PURE__ */ l("div", { className: "w-full", children: e });
}, X = (t) => {
  const [e, n] = y(0);
  return I(() => {
    n(t ? M(t) : 0);
  }, [t]), e;
}, M = (t) => {
  let e = 0;
  return t.blocks.forEach((n) => {
    n.type === "paragraph" && (e += T(n.data)), n.type === "link" && (e += z(n.data)), n.type === "header" && (e += $(n.data)), n.type === "list" && (e += V(n.data)), n.type === "embed" && (e += W(n.data)), n.type === "image" && (e += j(n.data)), n.type === "quote" && (e += R(n.data));
  }), e;
}, T = ({ text: t }) => t.length, j = ({ caption: t }) => (t == null ? void 0 : t.length) ?? 0, z = ({ link: t }) => t.length, $ = ({ text: t }) => t.length, V = ({ items: t }) => {
  const e = (n) => n.map((s) => {
    var o;
    return (((o = s.content) == null ? void 0 : o.length) ?? 0) + e(s.items);
  }).reduce((s, o) => s + o, 0);
  return e(t);
}, W = (t) => (t == null ? void 0 : t.source.length) ?? 0, R = ({ text: t, caption: e }) => t.length + e.length, Y = (t) => {
  const e = /https?:\/\/[\w.-]+(:\d+)?\/article\/preview\/[^/\s?]+(?:[/?][^\s]*)?/g;
  let n = !1;
  return typeof t == "string" ? n = !!t.match(e) : t.blocks.forEach((s) => {
    if (s.type === "paragraph" && s.data.text.match(e) && (n = !0), s.type === "header" && s.data.text.match(e) && (n = !0), s.type === "list") {
      const o = (c) => {
        c.forEach((i) => {
          var u;
          (u = i.content) != null && u.match(e) && (n = !0), o(i.items);
        });
      };
      o(s.data.items);
    }
    s.type === "link" && s.data.link.match(e) && (n = !0), s.type === "quote" && (s.data.text.match(e) && (n = !0), s.data.caption.match(e) && (n = !0));
  }), n;
}, U = w({
  paragraph: g,
  header: b,
  list: v,
  image: x,
  link: k,
  embed: N,
  quote: S
}), Z = ({ data: t, onChange: e }) => {
  const n = h(() => {
    const d = t.blocks.findIndex((_) => _.type === "payment");
    return d === -1 ? void 0 : d;
  }, [t]), s = h(() => ({
    ...t,
    blocks: t.blocks.filter((d) => d.type !== "payment")
  }), [t]), o = h(
    () => U.parse(s.blocks),
    [s]
  ), [c, i] = y(n), u = F(
    (d) => {
      if (c === d)
        i(void 0), e(s);
      else {
        i(d);
        const _ = s.blocks.length - 1, C = {
          ...s,
          blocks: s.blocks.flatMap((f, p) => p === d ? [
            {
              id: "----------",
              type: "payment",
              data: {}
            },
            f
          ] : p === _ && p === d - 1 ? [
            f,
            {
              id: "----------",
              type: "payment",
              data: {}
            }
          ] : f)
        };
        e(C);
      }
    },
    [e, s, c]
  ), P = h(() => o.flatMap((d, _) => [
    d,
    A({
      key: `${_}-payment-button`,
      value: c === _ + 1,
      onClick: () => {
        u(_ + 1);
      }
    })
  ]), [o, u, c]);
  return /* @__PURE__ */ l("div", { className: "w-full", children: P });
};
export {
  Q as Index,
  K as Preview,
  Z as SetPaymentLine,
  M as counter,
  Y as isFoundedPreviewURL,
  X as useEditorCounter
};
//# sourceMappingURL=index.js.map
