import {
  ToolConstructable,
  ToolSettings,
  BlockToolConstructable,
} from "@editorjs/editorjs";
import LinkTool, { LinkToolConfig } from "@editorjs/link";
import Header, { HeaderConfig } from "@editorjs/header";
import List, { ListConfig } from "@editorjs/nested-list";
import Embed, { EmbedConfig } from "../components/tools/embed";
import ImageTool, { ImageToolConfig } from "@editorjs/image";
import Quote, { QuoteConfig } from "../components/tools/quote";
import PaymentLine from "../components/tools/paymentLine";

const header: ToolSettings<HeaderConfig> = {
  class: Header,
  shortcut: "CMD+SHIFT+H",
  config: {
    placeholder: "へッダー",
    levels: [2, 3],
    defaultLevel: 3,
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
};

const link: ToolSettings<LinkToolConfig> = {
  class: LinkTool,
  config: {
    endpoint: "http://localhost:3000/api/getMeta", // Your backend endpoint for url data fetching,
  },
};

const image: ToolSettings<ImageToolConfig> = {
  class: ImageTool,
  config: {
    types: "image/*",
    endpoints: {
      byFile: "http://localhost:3000/api/postImage", // Your backend file uploader endpoint
      byUrl: "http://localhost:3000/api/postImage", // Your endpoint that provides uploading by Url
    },
  },
};

const payment: ToolSettings<{}> = {
  class: PaymentLine as unknown as BlockToolConstructable,
};

export const tools: {
  [toolName: string]: ToolConstructable | ToolSettings;
} = {
  header,
  link,
  list,
  embed,
  image,
  quote,
  payment,
};
