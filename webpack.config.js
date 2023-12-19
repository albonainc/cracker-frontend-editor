import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  entry: "./src/index.tsx", // あなたのエントリーポイント
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js", // 出力ファイル名
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // CSSをDOMに注入するためのローダー
          "style-loader",
          // CSSをCommonJSに変換するローダー
          "css-loader",
          // SassをCSSにコンパイルするローダー
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
  devtool: "inline-source-map",
};
