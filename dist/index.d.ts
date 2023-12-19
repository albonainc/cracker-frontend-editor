/// <reference types="react" />
import CustomEditor from "./components/editor";
import type { OutputData as Data } from "@editorjs/editorjs";
export type OutputData = Data;
export declare const Preview: import("react").FC<{
    data?: Data;
}>;
export default CustomEditor;
