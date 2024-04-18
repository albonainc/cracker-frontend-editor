/// <reference types="@/types/paragraph" />
/// <reference types="@/types/linkTool" />
/// <reference types="@/types/header" />
/// <reference types="@/types/nestedList" />
import type { OutputData } from '@editorjs/editorjs';
import type { HeaderData } from '@editorjs/header';
import type { LinkToolData } from '@editorjs/link';
import type { ListData } from '@editorjs/nested-list';
import type { ParagraphData } from '@editorjs/paragraph';
import type { EmbedData } from 'editorjs-embed';
import type { ImageToolData } from 'editorjs-image';
import type { QuoteData } from 'editorjs-quote';
export type Counter<T> = (data: T) => number;
export declare const useEditorCounter: (data?: OutputData) => number;
export declare const counter: (data: OutputData) => number;
export declare const paragraphCounter: Counter<ParagraphData>;
export declare const imageCounter: Counter<ImageToolData>;
export declare const linkCounter: Counter<LinkToolData>;
export declare const headerCounter: Counter<HeaderData>;
export declare const listCounter: Counter<ListData>;
export declare const embedCounter: Counter<EmbedData | undefined>;
export declare const quoteCounter: Counter<QuoteData>;
//# sourceMappingURL=countTools.d.ts.map