type Level = 1 | 2 | 3 | 4 | 5 | 6;
type Tag = "H1" | "H2" | "H3" | "H4" | "H5" | "H5";

declare module "@editorjs/header" {
  /**
   * @typedef {object} level
   * @property {number} number - level number
   * @property {string} tag - tag corresponds with level number
   * @property {string} svg - icon
   */
  type LevelDetail = {
    number: Level;
    tag: Tag;
    svg: string;
  };

  /**
   * @typedef {object} HeaderData
   * @description Tool's input and output data format
   * @property {string} text — Header's content
   * @property {number} level - Header's level from 1 to 6
   */
  type HeaderData = {
    text: string;
    level: Level;
  };

  /**
   * @typedef {object} HeaderConfig
   * @description Tool's config from Editor
   * @property {string} placeholder — Block's placeholder
   * @property {number[]} levels — Heading levels
   * @property {number} defaultLevel — default level
   */
  type HeaderConfig = {
    placeholder: string;
    levels: Level[];
    defaultLevel: Level;
  };

  /**
   * Header block for the Editor.js.
   *
   * @author CodeX (team@ifmo.su)
   * @copyright CodeX 2018
   * @license MIT
   * @version 2.0.0
   */
  export default class Header
    implements import("@editorjs/editorjs").BlockToolConstructable
  {
    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {{data: HeaderData, config: HeaderConfig, api: object}}
     *   data — previously saved data
     *   config - user config for Tool
     *   api - Editor.js API
     *   readOnly - read only mode flag
     */
    new(
      config: import("@editorjs/editorjs").BlockToolConstructorOptions<
        HeaderData,
        HeaderConfig
      >
    ): import("@editorjs/editorjs").BlockTool;

    /**
     * Normalize input data
     *
     * @param {HeaderData} data - saved data to process
     *
     * @returns {HeaderData}
     * @private
     */
    normalizeData(data: HeaderData): HeaderData;

    /**
     * Return Tool's view
     *
     * @returns {HTMLHeadingElement}
     * @public
     */
    render(): HTMLHeadingElement;

    /**
     * Returns header block tunes config
     *
     * @returns {Array}
     */
    renderSettings(): import("@editorjs/editorjs").TunesMenuConfigItem[];

    /**
     * Callback for Block's settings buttons
     *
     * @param {number} level - level to set
     */
    setLevel(level: Level);

    /**
     * Method that specified how to merge two Text blocks.
     * Called by Editor.js by backspace at the beginning of the Block
     *
     * @param {HeaderData} data - saved data to merger with current block
     * @public
     */
    merge(data: HeaderData);

    /**
     * Validate Text block data:
     * - check for emptiness
     *
     * @param {HeaderData} blockData — data received after saving
     * @returns {boolean} false if saved data is not correct, otherwise true
     * @public
     */
    validate(blockData: HeaderData): boolean;

    /**
     * Extract Tool's data from the view
     *
     * @param {HTMLHeadingElement} toolsContent - Text tools rendered view
     * @returns {HeaderData} - saved data
     * @public
     */
    save(toolsContent: HTMLHeadingElement): HeaderData;

    /**
     * Allow Header to be converted to/from other blocks
     */
    static get conversionConfig(): {
      export: "text"; // use 'text' property for other blocks
      import: "text"; // fill 'text' property from other block's export string
    };

    /**
     * Sanitizer Rules
     */
    static get sanitize(): {
      level: false;
      text: {};
    };

    /**
     * Returns true to notify core that read-only is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported(): boolean;

    /**
     * Get current Tools`s data
     *
     * @returns {HeaderData} Current data
     * @private
     */
    private get data(): HeaderData;

    /**
     * Store data in plugin:
     * - at the this._data property
     * - at the HTML
     *
     * @param {HeaderData} data — data to set
     * @private
     */
    private set data(data: HeaderData);

    /**
     * Get tag for target level
     * By default returns second-leveled header
     *
     * @returns {HTMLElement}
     */
    getTag(): HTMLElement;

    /**
     * Get current level
     *
     * @returns {level}
     */
    get currentLevel(): LevelDetail;

    /**
     * Return default level
     *
     * @returns {level}
     */
    get defaultLevel(): LevelDetail;

    /**
     * Available header levels
     *
     * @returns {level[]}
     */
    get levels(): LevelDetail[];

    /**
     * Handle H1-H6 tags on paste to substitute it with header Tool
     *
     * @param {PasteEvent} event - event with pasted content
     */
    onPaste(event: import("@editorjs/editorjs").PasteEvent): void;

    /**
     * Used by Editor.js paste handling API.
     * Provides configuration to handle H1-H6 tags.
     *
     * @returns {{handler: (function(HTMLElement): {text: string}), tags: string[]}}
     */
    static get pasteConfig(): {
      tags: ["H1", "H2", "H3", "H4", "H5", "H6"];
    };

    static get toolbox(): {
      icon: IconHeading;
      title: "Heading";
    };
  }
}
