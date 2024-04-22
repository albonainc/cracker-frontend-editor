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
      if (editorJs.current) {
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
export {
  Editor as default
};
//# sourceMappingURL=index.js.map
