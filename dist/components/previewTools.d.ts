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
import type { ReactNode, FC } from 'react';
import type { PaymentLineData } from './editorTools/paymentLine';
import type { OutputBlockData } from '../index';
export type Parser<Type extends string = string, Data extends object | undefined = undefined> = (data: OutputBlockData<Type, Data | undefined>) => ReactNode;
export declare const paragraphParser: Parser<'paragraph', ParagraphData>;
export declare const imageParser: Parser<'image', ImageToolData>;
export declare const linkParser: Parser<'link', LinkToolData>;
export declare const headerParser: Parser<'header', HeaderData>;
export declare const listParser: Parser<'list', ListData>;
export declare const embedParser: Parser<'embed', EmbedData>;
export declare const quoteParser: Parser<'quote', QuoteData>;
export declare const paymentLineParser: Parser<'payment', PaymentLineData>;
export declare const parser: (plugins?: {
    [x: string]: Parser<string, undefined>;
}) => {
    parse: (blocks: OutputData['blocks']) => Array<ReactNode>;
};
export declare const paymentButton: FC<{
    key?: string;
    value?: boolean;
    onClick?: () => void;
}>;
export declare const indexParser: FC<OutputBlockData<'header', HeaderData>[]>;
//# sourceMappingURL=previewTools.d.ts.map