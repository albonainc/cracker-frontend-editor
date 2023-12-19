import type { BlockToolConstructorOptions, BlockTool } from "@editorjs/editorjs";
export type EmbedData = {
    service: keyof EmbedConfig["services"];
    source: string;
    embed: string;
    width?: number;
    height?: number;
    caption?: string;
};
type Service = {
    name: string;
    regex: RegExp;
    embedUrl: string;
    html: string;
    height?: number;
    width?: number;
    id?: (groups: string[]) => string | null;
};
export type EmbedConfig = {
    services?: {
        facebook?: boolean;
        instagram?: boolean;
        youtube?: boolean;
        twitter?: boolean;
        "twitch-video"?: boolean;
        "twitch-channel"?: boolean;
        miro?: boolean;
        vimeo?: boolean;
        gfycat?: boolean;
        imgur?: boolean;
        vine?: boolean;
        aparat?: boolean;
        "yandex-music-track"?: boolean;
        "yandex-music-album"?: boolean;
        "yandex-music-playlist"?: boolean;
        coub?: boolean;
        codepen?: boolean;
        pinterest?: boolean;
        github?: boolean;
    };
};
export default class Embed implements BlockTool {
    api: BlockToolConstructorOptions["api"];
    nodes: {
        wrapper: HTMLElement | null;
        container: HTMLElement | null;
        inputHolder: HTMLElement | null;
        progress: HTMLElement | null;
        input: HTMLElement | null;
    };
    readOnly: boolean;
    _data: EmbedData | undefined;
    static services: {
        [key in keyof EmbedConfig["services"]]: Service;
    } | undefined;
    constructor({ data, api, readOnly, }: BlockToolConstructorOptions<EmbedData | {}, EmbedConfig>);
    render(): HTMLElement;
    private makeEmbed;
    private embedIsReady;
    private makeInputHolder;
    private setData;
    static prepare({ config }: {
        toolName: string;
        config: EmbedConfig;
    }): void;
    static checkServiceConfig(config: Service): boolean;
    save(): EmbedData;
    set data(data: EmbedData);
    get data(): EmbedData | undefined;
    static get toolbox(): {
        icon: string;
        title: string;
    };
    private get CSS();
    private showProgress;
    private hideProgress;
    private make;
    static get enableLineBreaks(): boolean;
}
export {};
