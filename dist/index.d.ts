/// <reference types="react" />
import type { OutputData as Data } from "@editorjs/editorjs";
export type OutputData = Data;
declare const _default: {
    CustomEditor: import("react").NamedExoticComponent<{
        id: string;
        data?: Data;
        onChange?: (data: Data) => void;
    }>;
    Preview: import("react").FC<{
        data?: Data;
    }>;
};
export default _default;
