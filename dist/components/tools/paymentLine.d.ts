import type { BlockToolConstructorOptions, BlockTool, BlockToolData, ToolboxConfig } from "@editorjs/editorjs";
import type { Parser } from "../preview";
declare class PaymentLine implements BlockTool {
    constructor(config?: BlockToolConstructorOptions);
    static get toolbox(): ToolboxConfig;
    render(): HTMLElement;
    save(block: HTMLElement): BlockToolData;
}
export declare const paymentLineParser: Parser<{}>;
export default PaymentLine;
