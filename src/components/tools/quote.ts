import type {
  BlockToolConstructorOptions,
  BlockTool,
} from "@editorjs/editorjs";
import { IconAlignLeft, IconAlignCenter, IconQuote } from "@codexteam/icons";

type WritableKeysOf<T> = {
  [P in keyof T]: T[P] extends Function ? never : P;
}[keyof T];

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
  static get isReadOnlySupported() {
    return true;
  }

  static get toolbox() {
    return {
      icon: IconQuote,
      title: "Quote",
    };
  }

  static get contentless() {
    return true;
  }

  static get enableLineBreaks() {
    return true;
  }

  static get ALIGNMENTS() {
    return {
      left: "left",
      center: "center",
    } as const;
  }

  static get DEFAULT_ALIGNMENT() {
    return Quote.ALIGNMENTS.left;
  }

  static get conversionConfig() {
    return {
      import: "text",
      export: (quoteData: QuoteData): string => {
        return quoteData.caption
          ? `${quoteData.text} — ${quoteData.caption}`
          : quoteData.text;
      },
    };
  }

  get CSS() {
    return {
      input: this.api.styles.input,
      baseClass: this.api.styles.block,
      wrapper: "cdx-quote",
      text: "cdx-quote__text",
      caption: "cdx-quote__caption",
    };
  }

  get settings() {
    return [
      {
        name: "left",
        icon: IconAlignLeft,
      },
      {
        name: "center",
        icon: IconAlignCenter,
      },
    ] as const;
  }

  api: BlockToolConstructorOptions["api"];
  readOnly: boolean;
  quotePlaceholder: string;
  captionPlaceholder: string;
  data: QuoteData;

  constructor({
    data,
    config,
    api,
    readOnly,
  }: BlockToolConstructorOptions<QuoteData, QuoteConfig>) {
    const { ALIGNMENTS, DEFAULT_ALIGNMENT } = Quote;

    this.api = api;
    this.readOnly = readOnly;

    this.quotePlaceholder = this.api.i18n.t("Enter a quote");
    this.captionPlaceholder = this.api.i18n.t("Enter a caption");

    this.data = {
      text: data.text || "",
      caption: data.caption || "",
      alignment:
        (Object.values(ALIGNMENTS).includes(data.alignment) &&
          data.alignment) ||
        config?.defaultAlignment ||
        DEFAULT_ALIGNMENT,
    };
  }

  render(): HTMLElement {
    const container = this._make("blockquote", [
      this.CSS.baseClass,
      this.CSS.wrapper,
    ]);
    const quote = this._make("div", [this.CSS.input, this.CSS.text], {
      // @ts-ignore
      contentEditable: !this.readOnly,
      innerHTML: this.data.text,
    });
    const caption = this._make("div", [this.CSS.input, this.CSS.caption], {
      // @ts-ignore
      contentEditable: !this.readOnly,
      innerHTML: this.data.caption,
    });

    quote.dataset.placeholder = this.quotePlaceholder;
    caption.dataset.placeholder = this.captionPlaceholder;

    container.appendChild(quote);
    container.appendChild(caption);

    return container;
  }

  save(quoteElement: HTMLDivElement): QuoteData {
    const text = quoteElement.querySelector(`.${this.CSS.text}`);
    const caption = quoteElement.querySelector(`.${this.CSS.caption}`);

    return Object.assign(this.data, {
      text: text?.innerHTML,
      caption: caption?.innerHTML,
    });
  }

  static get sanitize() {
    return {
      text: {
        br: true,
      },
      caption: {
        br: true,
      },
      alignment: {},
    };
  }

  renderSettings(): TunesMenuConfig[] {
    const capitalize = (str: string) => str[0].toUpperCase() + str.substr(1);

    return this.settings.map((item) => ({
      icon: item.icon,
      label: this.api.i18n.t(`Align ${capitalize(item.name)}`),
      isActive: this.data.alignment === item.name,
      onActivate: () => this._toggleTune(item.name),
      closeOnActivate: true,
    }));
  }

  private _toggleTune(tune: "left" | "center") {
    this.data.alignment = tune;
  }

  private _make(
    tagName: string,
    classNames?: string | string[],
    attributes?: {
      [key in keyof WritableKeysOf<HTMLElement>]: HTMLElement[keyof HTMLElement];
    }
  ) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      // @ts-ignore
      el[attrName] = attributes[attrName];
    }

    return el;
  }
}
