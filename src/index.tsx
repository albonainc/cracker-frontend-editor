import CustomEditor from "./components/editor";
import CustomPreview from "./components/preview";
import type { OutputData as Data } from "@editorjs/editorjs";

export type OutputData = Data;

export const Preview = CustomPreview;

export default CustomEditor;
