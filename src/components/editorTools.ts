import {
  ToolConstructable,
  ToolSettings,
  BlockToolConstructable,
} from "@editorjs/editorjs";
import Header, { HeaderConfig } from "@editorjs/header";
import LinkTool, { LinkToolConfig } from "@editorjs/link";
import List, { ListConfig } from "@editorjs/nested-list";
import Embed, { EmbedConfig } from "editorjs-embed";
import ImageTool, { ImageToolConfig } from "editorjs-image";
import Quote, { QuoteConfig } from "editorjs-quote";

import PaymentLine from "./editorTools/paymentLine";

const header: ToolSettings<HeaderConfig> = {
  class: Header,
  shortcut: "CMD+SHIFT+H",
  config: {
    placeholder: "へッダー",
    levels: [2, 3],
    defaultLevel: 2,
  },
};

const list: ToolSettings<ListConfig> = {
  class: List as unknown as BlockToolConstructable,
  inlineToolbar: true,
  config: {
    defaultStyle: "unordered",
  },
};

const embed: ToolSettings<EmbedConfig> = {
  class: Embed as unknown as BlockToolConstructable,
  inlineToolbar: true,
  config: {
    services: {
      youtube: true,
      vimeo: true,
      twitter: true,
      instagram: true,
    },
  },
};

const quote: ToolSettings<QuoteConfig> = {
  class: Quote as unknown as BlockToolConstructable,
  config: {
    quotePlaceholder: "引用を追加",
    captionPlaceholder: "キャプションを追加",
  },
};

const link = (config?: LinkToolConfig): ToolSettings<LinkToolConfig> => ({
  class: LinkTool,
  config,
});

const image = (config?: ImageToolConfig): ToolSettings<ImageToolConfig> => ({
  class: ImageTool as unknown as BlockToolConstructable,
  config: config,
});

const payment: ToolSettings = {
  class: PaymentLine as unknown as BlockToolConstructable,
};

export type ToolConfigs = {
  link?: LinkToolConfig;
  image: ImageToolConfig;
};

export const generateTool = (
  config?: ToolConfigs
): {
  [toolName: string]: ToolConstructable | ToolSettings;
} => ({
  header,
  link: link(config?.link),
  list,
  embed,
  image: image(config?.image),
  quote,
  payment,
});
