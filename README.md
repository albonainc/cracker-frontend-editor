# cracker-frontend-editor

## 概要

このプロジェクトは、EditorJSを使って作成されたカスタムエディタです。

## 検証環境作成

1. 必要なパッケージをインストール

```sh
  yarn
```

2. テストサーバー起動

```sh
  yarn run dev
```

## ビルド

```sh
  yarn run build
```

## プロジェクト構造

- `src/`: エディタ検証環境のソースコード
- `src/components`: エディタのソースコード
- `src/components/editor.tsx`: 編集エディタのコンポーネント
- `src/components/preview.tsx`: 記事データの表示コンポーネント
- `src/components/searchTools.ts`: 記事データの中から特定の文言などを抽出するためのツール
- `src/components/setPaymentLine.tsx`: 記事データのブロックの間に有料ラインを設置するためにコンポーネント
- `src/components/countTools.ts`: 記事データの文字数を計算するためのコンポーネント
- `src/components/config/`: 記事データの設定情報など
- `src/types/`: editorjsプラグインの型定義ファイル
- `src/global.css`: editorjsのcss上書きと、プラグインのcss上書きが記載されています
- `dist/`: 公開されるファイル。公開用のCI/CD環境が作成された場合は、gitignoreしてください
- `dist/editor`: 公開されるファイル。nextjsでdynamic importしたい箇所

## ビルド注意事項

distとdist/editorが別れている理由は
CSR必須ではない関数を呼んでもCSRエラーが起きたので原因コンポーネントを分離した。

## 注意

このプロジェクトは多数のeditorjsプラグイン(独自含む)を依存して作成しているため、
他のプラグインの仕様を変更した場合こちらの環境で検証してください。
