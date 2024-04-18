import type { BlockTool, BlockToolData, ToolboxConfig } from '@editorjs/editorjs';
export type PaymentLineData = {};
declare class PaymentLine implements BlockTool {
    constructor();
    static get toolbox(): ToolboxConfig;
    render(): HTMLElement;
    save(): BlockToolData;
}
export default PaymentLine;
//# sourceMappingURL=paymentLine.d.ts.map