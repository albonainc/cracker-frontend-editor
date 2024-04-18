/// <reference types="src/types/linkTool" />
import { ToolConstructable, ToolSettings } from "@editorjs/editorjs";
import { LinkToolConfig } from "@editorjs/link";
import { ImageToolConfig } from "editorjs-image";
export type ToolConfigs = {
    link?: LinkToolConfig;
    image: ImageToolConfig;
};
export declare const generateTool: (config?: ToolConfigs) => {
    [toolName: string]: ToolConstructable | ToolSettings;
};
//# sourceMappingURL=editorTools.d.ts.map