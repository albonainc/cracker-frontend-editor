import type { OutputData } from "@editorjs/editorjs";
import edjsHTML from "editorjs-html";
import React from "react";
export type ViewType<T> = {
    data: T;
    id: string;
    type: string;
};
export type Parser<T> = (data: ViewType<T>) => string;
export declare const edjsParser: edjsHTML;
type Props = {
    data?: OutputData;
};
declare const Preview: React.FC<Props>;
export default Preview;
