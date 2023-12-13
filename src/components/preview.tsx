import parse from "html-react-parser";
import type { OutputData } from "@editorjs/editorjs";
import edjsHTML from "editorjs-html";
import { paymentLineParser } from "./tools/paymentLine";
import {
  imageParser,
  linkParser,
  headerParser,
  listParser,
  embedParser,
  quoteParser,
} from "../components/viewTools";
import React from "react";

export type ViewType<T> = {
  data: T;
  id: string;
  type: string;
};

export type Parser<T> = (data: ViewType<T>) => string;

export const edjsParser = edjsHTML({
  header: headerParser,
  list: listParser,
  payment: paymentLineParser,
  image: imageParser,
  link: linkParser,
  embed: embedParser,
  quote: quoteParser,
});

type Props = {
  data?: OutputData;
};

const Preview: React.FC<Props> = ({ data }) => {
  if (!data) return <div />;
  const html = edjsParser.parse(data);

  return <div className="w-full">{parse(html.join(""))}</div>;
};

export default Preview;
