/// <reference path="../../src/types/ImageTool.d.ts" />
/// <reference path="../../src/types/linkTool.d.ts" />
/// <reference path="../../src/types/header.d.ts" />
/// <reference path="../../src/types/nestedList.d.ts" />
import type { Parser } from "../components/preview";
import type { ImageToolData } from "@editorjs/image";
import type { LinkToolData } from "@editorjs/link";
import type { HeaderData } from "@editorjs/header";
import type { ListData } from "@editorjs/nested-list";
import type { EmbedData } from "../components/tools/embed";
import type { QuoteData } from "../components/tools/quote";
export declare const imageParser: Parser<ImageToolData>;
export declare const linkParser: Parser<LinkToolData>;
export declare const headerParser: Parser<HeaderData>;
export declare const listParser: Parser<ListData>;
export declare const embedParser: Parser<EmbedData>;
export declare const quoteParser: Parser<QuoteData>;
