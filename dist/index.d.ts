/// <reference types="react" />
import type { OutputData as Data } from '@editorjs/editorjs';
import Editor from '@/components/editor';
import type { ToolConfigs as Config } from '@/components/editorTools';
import '@/global.css';
export type OutputData = Data;
export interface OutputBlockData<Type extends string = string, Data extends object | undefined = undefined> {
    id?: string;
    type: Type;
    data: Data;
    tunes?: {
        [name: string]: any;
    };
}
export type ToolConfigs = Config;
export declare const Preview: import("react").FC<{
    blocks?: import("@editorjs/editorjs").OutputBlockData<string, any>[] | undefined;
}>;
export default Editor;
//# sourceMappingURL=index.d.ts.map