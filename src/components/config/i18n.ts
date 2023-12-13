import type { I18nConfig } from "@editorjs/editorjs";

export const i18n: I18nConfig = {
  messages: {
    ui: {
      blockTunes: {
        toggler: {
          "Click to tune": "ブロックの操作",
        },
      },
      inlineToolbar: {
        converter: {
          "Convert to": "変更",
        },
      },
      toolbar: {
        toolbox: {
          Add: "追加",
        },
      },
    },
    toolNames: {
      Text: "文章",
      Heading: "子見出し",
      List: "リスト",
      Quote: "引用",
      Link: "リンク",
      Image: "画像",
      Payment: "有料ライン",
      Embed: "埋め込み",
    },
    tools: {
      link: {
        "Add a link": "リンクを追加",
        Link: "リンク",
        "Couldn't get this link data, try the other one":
          "リンク先の情報を取得できませんでした。",
      },
      image: {
        "Select an Image": "画像を選択",
        Caption: "キャプション",
        "With border": "枠を追加",
        "Stretch image": "画像を拡大",
        "With background": "背景を追加",
      },
      quote: {
        "Enter a quote": "引用を追加",
        "Enter a caption": "キャプションを追加",
      },
    },
    blockTunes: {
      delete: {
        Delete: "削除",
        "Click to delete": "クリックで削除",
      },
      moveUp: {
        "Move up": "上に移動",
      },
      moveDown: {
        "Move down": "下に移動",
      },
    },
  },
};
