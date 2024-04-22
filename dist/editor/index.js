import { jsx as c } from "react/jsx-runtime";
import m from "@editorjs/editorjs";
import { forwardRef as u, useRef as g, useEffect as H, useImperativeHandle as h } from "react";
import p from "@editorjs/header";
import f from "@editorjs/link";
import V from "@editorjs/nested-list";
import v from "editorjs-embed";
import w from "editorjs-image";
import b from "editorjs-quote";
const L = {
  messages: {
    ui: {
      blockTunes: {
        toggler: {
          "Click to tune": "ブロックの操作"
        }
      },
      inlineToolbar: {
        converter: {
          "Convert to": "変更"
        }
      },
      toolbar: {
        toolbox: {
          Add: "追加"
        }
      }
    },
    toolNames: {
      Text: "文章",
      Heading: "子見出し",
      List: "リスト",
      Quote: "引用",
      Link: "リンク",
      Image: "画像",
      Payment: "有料ライン",
      Embed: "埋め込み"
    },
    tools: {
      link: {
        "Add a link": "リンクを追加",
        Link: "リンク",
        "Couldn't get this link data, try the other one": "リンク先の情報を取得できませんでした。"
      },
      image: {
        "Select an Image": "画像を選択",
        Caption: "キャプション",
        "With border": "枠を追加",
        "Stretch image": "画像を拡大",
        "With background": "背景を追加"
      },
      header: {
        "Heading 2": "H2",
        "Heading 3": "H3"
      },
      list: {
        Unordered: "番号なし",
        Ordered: "番号あり"
      },
      embed: {
        Link: "リンク"
      }
    },
    blockTunes: {
      delete: {
        Delete: "削除",
        "Click to delete": "クリックで削除"
      },
      moveUp: {
        "Move up": "上に移動"
      },
      moveDown: {
        "Move down": "下に移動"
      }
    }
  }
}, i = {
  fontWeight: "bold",
  backgroundColor: "#FFDA00",
  width: "100%",
  textAlign: "center",
  paddingTop: "0.3em",
  paddingBottom: "0.3em",
  border: "1px solid white"
}, k = "このラインより先を有料にする";
class y {
  constructor() {
  }
  static get toolbox() {
    return {
      title: "Payment",
      icon: '<svg style="transform:scale(0.7)" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0097 11.2778H14.218V12.7222H10.2863V14.1667H14.218V15.6111H10.2863V18.5H8.71365V15.6111H4.78198V14.1667H8.71365V12.7222H4.78198V11.2778H7.99022L3.99564 5.5H5.85926L9.49998 10.765L13.1407 5.5H15.0043L11.0097 11.2778Z" fill="#000000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H6.16354L9.5 9.82499L12.8365 5H16L12.0054 10.7778H14.7684V13.2222H10.8368V13.6667H14.7684V16.1111H10.8368V19H8.16323V16.1111H4.23156V13.6667H8.16323V13.2222H4.23156V10.7778H6.99457L3 5ZM4.99133 6L8.9859 11.7778H5.33243V12.2222H9.2641V14.6667H5.33243V15.1111H9.2641V18H9.7359V15.1111H13.6676V14.6667H9.7359V12.2222H13.6676V11.7778H10.0141L14.0087 6H13.445L9.5 11.705L5.55501 6H4.99133Z" fill="#000000"/><rect width="4" height="3" fill="#000000"/><rect x="5" width="4" height="3" fill="#000000"/><rect x="10" width="4" height="3" fill="#000000"/><rect x="15" width="4" height="3" fill="#000000"/></svg>'
    };
  }
  render() {
    var n, s, d, o, l, r;
    const t = document.createElement("div");
    return t.innerText = k, t.style.fontWeight = ((n = i.fontWeight) == null ? void 0 : n.toString()) ?? "", t.style.backgroundColor = ((s = i.backgroundColor) == null ? void 0 : s.toString()) ?? "", t.style.paddingTop = ((d = i.paddingTop) == null ? void 0 : d.toString()) ?? "", t.style.paddingBottom = ((o = i.paddingBottom) == null ? void 0 : o.toString()) ?? "", t.style.width = ((l = i.width) == null ? void 0 : l.toString()) ?? "", t.style.textAlign = ((r = i.textAlign) == null ? void 0 : r.toString()) ?? "", t;
  }
  save() {
    return {};
  }
}
const x = {
  class: p,
  shortcut: "CMD+SHIFT+H",
  config: {
    placeholder: "へッダー",
    levels: [2, 3],
    defaultLevel: 2
  }
}, T = {
  class: V,
  inlineToolbar: !0,
  config: {
    defaultStyle: "unordered"
  }
}, S = {
  class: v,
  inlineToolbar: !0,
  config: {
    services: {
      youtube: !0,
      vimeo: !0,
      twitter: !0,
      instagram: !0
    }
  }
}, C = {
  class: b,
  config: {
    quotePlaceholder: "引用を追加",
    captionPlaceholder: "キャプションを追加"
  }
}, E = (e) => ({
  class: f,
  config: e
}), A = (e) => ({
  class: w,
  config: e
}), M = {
  class: y
}, P = (e) => ({
  header: x,
  link: E(e == null ? void 0 : e.link),
  list: T,
  embed: S,
  image: A(e == null ? void 0 : e.image),
  quote: C,
  payment: M
}), N = u(({ id: e, data: t, onChange: n, config: s }, d) => {
  const o = g(null);
  H(() => {
    if (!o.current && typeof window < "u") {
      const r = new m({
        holder: e,
        tools: P(s),
        autofocus: !1,
        data: t,
        placeholder: "文字を入力",
        async onChange() {
          if (n) {
            const a = await l();
            a && n(a);
          }
        },
        i18n: L
      });
      o.current = r;
    }
    return () => {
      o.current && o.current.destroy();
    };
  }, []);
  const l = () => {
    var r;
    return ((r = o.current) == null ? void 0 : r.save()) || Promise.reject("Editor not initialized");
  };
  return h(d, () => ({
    save: l
  })), /* @__PURE__ */ c("div", { id: e, className: "w-full" });
});
export {
  N as default
};
//# sourceMappingURL=index.js.map
