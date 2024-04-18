declare module '@editorjs/paragraph' {
  /**
   * Base Paragraph Block for the Editor.js.
   * Represents a regular text block
   *
   * @author CodeX (team@codex.so)
   * @copyright CodeX 2018
   * @license The MIT License (MIT)
   */

  /**
   * @typedef {object} ParagraphConfig
   * @property {string} placeholder - placeholder for the empty paragraph
   * @property {boolean} preserveBlank - Whether or not to keep blank paragraphs when saving editor data
   */
  type ParagraphConfig = {
    placeholder: string
    preserveBlank: boolean
  }

  /**
   * @typedef {object} ParagraphData
   * @description Tool's input and output data format
   * @property {string} text — Paragraph's content. Can include HTML tags: <a><b><i>
   */
  export type ParagraphData = {
    text: string
  }

  export default class Paragraph implements import('@editorjs/editorjs').BlockToolConstructable {
    /**
     * Default placeholder for Paragraph Tool
     *
     * @returns {string}
     * @class
     */
    static get DEFAULT_PLACEHOLDER(): string

    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {object} params - constructor params
     * @param {ParagraphData} params.data - previously saved data
     * @param {ParagraphConfig} params.config - user config for Tool
     * @param {object} params.api - editor.js api
     * @param {boolean} readOnly - read only mode flag
     */
    new(
      config: import('@editorjs/editorjs').BlockToolConstructorOptions<
        ParagraphData,
        ParagraphConfig
      >,
    ): import('@editorjs/editorjs').BlockTool

    /**
     * Check if text content is empty and set empty string to inner html.
     * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
     *
     * @param {KeyboardEvent} e - key up event
     */
    onKeyUp(e: KeyboardEvent): void

    /**
     * Create Tool's view
     *
     * @returns {HTMLElement}
     * @private
     */
    drawView(): HTMLElement

    /**
     * Return Tool's view
     *
     * @returns {HTMLDivElement}
     */
    render(): HTMLDivElement

    /**
     * Method that specified how to merge two Text blocks.
     * Called by Editor.js by backspace at the beginning of the Block
     *
     * @param {ParagraphData} data
     * @public
     */
    merge(data: ParagraphData)

    /**
     * Validate Paragraph block data:
     * - check for emptiness
     *
     * @param {ParagraphData} savedData — data received after saving
     * @returns {boolean} false if saved data is not correct, otherwise true
     * @public
     */
    validate(savedData: ParagraphData): boolean

    /**
     * Extract Tool's data from the view
     *
     * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
     * @returns {ParagraphData} - saved data
     * @public
     */
    save(toolsContent: HTMLDivElement): ParagraphData

    /**
     * On paste callback fired from Editor.
     *
     * @param {PasteEvent} event - event with pasted data
     */
    onPaste(event: import('@editorjs/editorjs').PasteConfig)

    /**
     * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
     */
    static get conversionConfig(): {
      export: 'text' // to convert Paragraph to other block, use 'text' property of saved data
      import: 'text' // to covert other block's exported string to Paragraph, fill 'text' property of tool data
    }

    /**
     * Sanitizer rules
     */
    static get sanitize(): {
      text: {
        br: true
      }
    }

    /**
     * Returns true to notify the core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported(): true

    /**
     * Get current Tools`s data
     *
     * @returns {ParagraphData} Current data
     * @private
     */
    get data(): ParagraphData

    /**
     * Store data in plugin:
     * - at the this._data property
     * - at the HTML
     *
     * @param {ParagraphData} data — data to set
     * @private
     */
    set data(data: ParagraphData)

    /**
     * Fill tool's view with data
     */
    hydrate(): void

    /**
     * Used by Editor paste handling API.
     * Provides configuration to handle P tags.
     *
     * @returns {{tags: string[]}}
     */
    static get pasteConfig(): {
      tags: ['P']
    }

    /**
     * Icon and title for displaying at the Toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox(): {
      icon: IconText
      title: 'Text'
    }
  }
}
