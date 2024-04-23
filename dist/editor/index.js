(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode('*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  .container {\n    max-width: 1536px;\n  }\n}\n.static {\n  position: static;\n}\n.m-auto {\n  margin: auto;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.min-h-\\[300px\\] {\n  min-height: 300px;\n}\n.w-full {\n  width: 100%;\n}\n.max-w-\\[60\\%\\] {\n  max-width: 60%;\n}\n.max-w-\\[800px\\] {\n  max-width: 800px;\n}\n.justify-center {\n  justify-content: center;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-solid {\n  border-style: solid;\n}\n.border-\\[\\#e8e8eb\\] {\n  --tw-border-opacity: 1;\n  border-color: rgb(232 232 235 / var(--tw-border-opacity));\n}\n.bg-\\[\\#cdd1e0\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(205 209 224 / var(--tw-bg-opacity));\n}\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\n.p-\\[15px\\] {\n  padding: 15px;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-\\[10\\%\\] {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n.pt-4 {\n  padding-top: 1rem;\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n/* @editorjs tools css上書き */\n\n/* editorjs */\n@media (max-width: 650px) {\n  .ce-popover {\n    bottom: calc(var(--offset) + env(safe-area-inset-bottom) + 4rem);\n  }\n}\n\n/* editorjsのpopupが表示されるがantdを使いたいのでnone */\n.cdx-notifies {\n  display: none;\n}\n\n/* drag and drop */\n.ce-block--drop-target .ce-block__content:before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: -20px;\n  margin-top: -1px;\n  height: 8px;\n  width: 8px;\n  border: solid #a0a0a0;\n  border-width: 1px 1px 0 0;\n  transform-origin: right;\n  transform: rotate(45deg);\n}\n.ce-block--drop-target .ce-block__content:after {\n  background: none;\n}\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty\n  .ce-block:first-child\n  .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n.codex-editor--toolbox-opened\n  .ce-block:first-child\n  .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty\n  .ce-block:first-child\n  .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n.ce-paragraph {\n  word-break: break-all;\n}\n.ce-paragraph p:first-of-type {\n  margin-top: 0;\n}\n.ce-paragraph p:last-of-type {\n  margin-bottom: 0;\n}\n\n/* nested-list */\n.cdx-nested-list {\n  margin: 0;\n  padding: 0 1rem;\n  outline: none;\n  background-color: #f4f4f4;\n  counter-reset: number 0 !important;\n}\n.cdx-nested-list--ordered {\n  list-style: none;\n}\n.cdx-nested-list--ordered .cdx-nested-list__item::before {\n  background: #ffda00;\n  border-radius: 50%;\n  counter-increment: number 1 !important;\n  content: counter(number) !important;\n  display: inline-block;\n  font-size: 13px;\n  font-weight: 700;\n  height: 1.5rem;\n  min-height: 1.5rem;\n  width: 1.5rem;\n  min-width: 1.5rem;\n  line-height: 1.5rem;\n  margin: 0 0.5rem;\n  text-align: center;\n}\n.cdx-nested-list--ordered .cdx-nested-list__item::marker {\n  content: none;\n}\n.cdx-nested-list--unordered {\n  list-style: none;\n}\n.cdx-nested-list--unordered .cdx-nested-list__item::before {\n  background: #ffda00;\n  border-radius: 50%;\n  content: "" !important;\n  display: inline-block;\n  font-size: 13px;\n  font-weight: 700;\n  height: 1rem;\n  min-height: 1rem;\n  width: 1rem;\n  min-width: 1rem;\n  margin: 0.3rem 0.5rem;\n  text-align: center;\n}\n.cdx-nested-list--unordered .cdx-nested-list__item::marker {\n  content: none;\n}\n.cdx-nested-list__item {\n  padding: 5.5px 0 5.5px 3px;\n  line-height: 1.6em;\n}\n.cdx-list-settings {\n  display: flex;\n}\n.cdx-list-settings .cdx-settings-button {\n  width: 50%;\n}\n\n@keyframes link-in {\n  from {\n    filter: blur(5px);\n  }\n  to {\n    filter: none;\n  }\n}\n.codex-editor--narrow .link-tool__image {\n  display: none;\n}\n\n/* header */\nh2.ce-header {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\nh3.ce-header {\n  font-size: 1.25rem;\n  font-weight: bold;\n}'));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
import { jsx } from "react/jsx-runtime";
import EditorJs from "@editorjs/editorjs";
import { forwardRef, useRef, useEffect, useImperativeHandle } from "react";
import Header from "@editorjs/header";
import LinkTool from "@editorjs/link";
import List from "@editorjs/nested-list";
import Embed from "editorjs-embed";
import ImageTool from "editorjs-image";
import Quote from "editorjs-quote";
const i18n = {
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
};
const styles = {
  fontWeight: "bold",
  backgroundColor: "#FFDA00",
  width: "100%",
  textAlign: "center",
  paddingTop: "0.3em",
  paddingBottom: "0.3em",
  border: "1px solid white"
};
const text = "このラインより先を有料にする";
class PaymentLine {
  constructor() {
  }
  static get toolbox() {
    return {
      title: "Payment",
      icon: '<svg style="transform:scale(0.7)" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0097 11.2778H14.218V12.7222H10.2863V14.1667H14.218V15.6111H10.2863V18.5H8.71365V15.6111H4.78198V14.1667H8.71365V12.7222H4.78198V11.2778H7.99022L3.99564 5.5H5.85926L9.49998 10.765L13.1407 5.5H15.0043L11.0097 11.2778Z" fill="#000000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H6.16354L9.5 9.82499L12.8365 5H16L12.0054 10.7778H14.7684V13.2222H10.8368V13.6667H14.7684V16.1111H10.8368V19H8.16323V16.1111H4.23156V13.6667H8.16323V13.2222H4.23156V10.7778H6.99457L3 5ZM4.99133 6L8.9859 11.7778H5.33243V12.2222H9.2641V14.6667H5.33243V15.1111H9.2641V18H9.7359V15.1111H13.6676V14.6667H9.7359V12.2222H13.6676V11.7778H10.0141L14.0087 6H13.445L9.5 11.705L5.55501 6H4.99133Z" fill="#000000"/><rect width="4" height="3" fill="#000000"/><rect x="5" width="4" height="3" fill="#000000"/><rect x="10" width="4" height="3" fill="#000000"/><rect x="15" width="4" height="3" fill="#000000"/></svg>'
    };
  }
  render() {
    var _a, _b, _c, _d, _e, _f;
    const div = document.createElement("div");
    div.innerText = text;
    div.style.fontWeight = ((_a = styles.fontWeight) == null ? void 0 : _a.toString()) ?? "";
    div.style.backgroundColor = ((_b = styles.backgroundColor) == null ? void 0 : _b.toString()) ?? "";
    div.style.paddingTop = ((_c = styles.paddingTop) == null ? void 0 : _c.toString()) ?? "";
    div.style.paddingBottom = ((_d = styles.paddingBottom) == null ? void 0 : _d.toString()) ?? "";
    div.style.width = ((_e = styles.width) == null ? void 0 : _e.toString()) ?? "";
    div.style.textAlign = ((_f = styles.textAlign) == null ? void 0 : _f.toString()) ?? "";
    return div;
  }
  save() {
    return {};
  }
}
const header = {
  class: Header,
  shortcut: "CMD+SHIFT+H",
  config: {
    placeholder: "へッダー",
    levels: [2, 3],
    defaultLevel: 2
  }
};
const list = {
  class: List,
  inlineToolbar: true,
  config: {
    defaultStyle: "unordered"
  }
};
const embed = {
  class: Embed,
  inlineToolbar: true,
  config: {
    services: {
      youtube: true,
      vimeo: true,
      twitter: true,
      instagram: true
    }
  }
};
const quote = {
  class: Quote,
  config: {
    quotePlaceholder: "引用を追加",
    captionPlaceholder: "キャプションを追加"
  }
};
const link = (config) => ({
  class: LinkTool,
  config
});
const image = (config) => ({
  class: ImageTool,
  config
});
const payment = {
  class: PaymentLine
};
const generateTool = (config) => ({
  header,
  link: link(config == null ? void 0 : config.link),
  list,
  embed,
  image: image(config == null ? void 0 : config.image),
  quote,
  payment
});
const Editor = forwardRef(({ id, data, onChange, config }, ref) => {
  const editorJs = useRef(null);
  useEffect(() => {
    if (!editorJs.current && typeof window !== "undefined") {
      const editor = new EditorJs({
        holder: id,
        tools: generateTool(config),
        autofocus: false,
        data,
        placeholder: "文字を入力",
        async onChange() {
          if (onChange) {
            const res = await save();
            res && onChange(res);
          }
        },
        i18n
      });
      editorJs.current = editor;
    }
    return () => {
      if (editorJs.current && editorJs.current.destroy) {
        editorJs.current.destroy();
      }
    };
  }, []);
  const save = () => {
    var _a;
    return ((_a = editorJs.current) == null ? void 0 : _a.save()) || Promise.reject("Editor not initialized");
  };
  useImperativeHandle(ref, () => ({
    save
  }));
  return /* @__PURE__ */ jsx("div", { id, className: "w-full" });
});
const EditorWrap = ({ editorRef, ...props }) => /* @__PURE__ */ jsx(Editor, { ...props, ref: editorRef });
export {
  EditorWrap as default
};
//# sourceMappingURL=index.js.map
