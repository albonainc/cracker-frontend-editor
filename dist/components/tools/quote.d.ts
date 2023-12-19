import type { BlockToolConstructorOptions, BlockTool } from "@editorjs/editorjs";
export interface QuoteData {
    text: string;
    caption: string;
    alignment: "center" | "left";
}
export interface QuoteConfig {
    quotePlaceholder?: string;
    captionPlaceholder?: string;
    defaultAlignment?: "center" | "left";
}
interface TunesMenuConfig {
    icon: string;
    label: string;
    isActive: boolean;
    closeOnActivate: boolean;
    onActivate: () => void;
}
interface TunesMenuConfig {
    icon: string;
    label: string;
    isActive: boolean;
    closeOnActivate: boolean;
    onActivate: () => void;
}
export default class Quote implements BlockTool {
    static get isReadOnlySupported(): boolean;
    static get toolbox(): {
        icon: string;
        title: string;
    };
    static get contentless(): boolean;
    static get enableLineBreaks(): boolean;
    static get ALIGNMENTS(): {
        readonly left: "left";
        readonly center: "center";
    };
    static get DEFAULT_ALIGNMENT(): "left";
    static get conversionConfig(): {
        import: string;
        export: (quoteData: QuoteData) => string;
    };
    get CSS(): {
        input: string;
        baseClass: string;
        wrapper: string;
        text: string;
        caption: string;
    };
    get settings(): readonly [{
        readonly name: "left";
        readonly icon: string;
    }, {
        readonly name: "center";
        readonly icon: string;
    }];
    api: BlockToolConstructorOptions["api"];
    readOnly: boolean;
    quotePlaceholder: string;
    captionPlaceholder: string;
    data: QuoteData;
    constructor({ data, config, api, readOnly, }: BlockToolConstructorOptions<QuoteData, QuoteConfig>);
    render(): HTMLElement;
    save(quoteElement: HTMLDivElement): QuoteData;
    static get sanitize(): {
        text: {
            br: boolean;
        };
        caption: {
            br: boolean;
        };
        alignment: {};
    };
    renderSettings(): TunesMenuConfig[];
    private _toggleTune;
    private _make;
}
export {};
