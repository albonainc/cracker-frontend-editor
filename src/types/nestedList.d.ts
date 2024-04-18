declare module '@editorjs/nested-list' {
  /**
   * @typedef {object} ListData
   * @property {string} style - list type 'ordered' or 'unordered'
   * @property {ListItem[]} items - list of first-level elements
   */
  interface ListData {
    style: 'ordered' | 'unordered'
    items: ListItem[]
  }

  /**
   * @typedef {object} ListItem
   * @property {string} content - list item text content
   * @property {ListItem[]} items - sublist items
   */
  interface ListItem {
    content: string | null
    items: ListItem[]
  }

  /**
   * @typedef {object} ListConfig
   * @description Tool's config from Editor
   * @property {string} defaultStyle — ordered or unordered
   */
  interface ListConfig {
    defaultStyle: string
  }

  /**
   * NestedList Tool for EditorJS
   */
  export default class NestedList implements import('@editorjs/editorjs').BlockToolConstructable {
    /**
     * Notify core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported(): boolean

    /**
     * Allow to use native Enter behaviour
     *
     * @returns {boolean}
     * @public
     */
    static get enableLineBreaks(): boolean

    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox(): {
      icon: string
      title: 'List'
    }

    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {object} params - tool constructor options
     * @param {ListData} params.data - previously saved data
     * @param {object} params.config - user config for Tool
     * @param {object} params.api - Editor.js API
     * @param {boolean} params.readOnly - read-only mode flag
     */
    new(
      config: import('@editorjs/editorjs').BlockToolConstructorOptions<ListData, ListConfig>,
    ): import('@editorjs/editorjs').BlockTool

    /**
     * Returns list tag with items
     *
     * @returns {Element}
     * @public
     */
    render(): HTMLElement

    /**
     * Creates Block Tune allowing to change the list style
     *
     * @public
     * @returns {Array}
     */
    renderSettings(): import('@editorjs/editorjs/types/tools/tool-settings').TunesMenuConfigItem[]

    /**
     * On paste sanitzation config. Allow only tags that are allowed in the Tool.
     *
     * @returns {PasteConfig} - paste config.
     */
    static get pasteConfig(): import('@editorjs/editorjs').PasteConfig | undefined

    /**
     * On paste callback that is fired from Editor.
     *
     * @param {PasteEvent} event - event with pasted data
     */
    onPaste(event: import('@editorjs/editorjs').PasteEvent)

    /**
     * Handle UL, OL and LI tags paste and returns List data
     *
     * @param {HTMLUListElement|HTMLOListElement|HTMLLIElement} element
     * @returns {ListData}
     */
    pasteHandler(element: HTMLUListElement | HTMLOListElement | HTMLLIElement): ListData

    /**
     * Renders children list
     *
     * @param {ListItem[]} items - items data to append
     * @param {Element} parentItem - where to append
     * @returns {void}
     */
    appendItems(items: ListItem[], parentItem: HTMLElementTagNameMap)

    /**
     * Renders the single item
     *
     * @param {string} content - item content to render
     * @param {ListItem[]} [items] - children
     * @returns {Element}
     */
    createItem(content: string, items: ListItem): HTMLElement

    /**
     * Extracts tool's data from the DOM
     *
     * @returns {ListData}
     */
    save(): ListData

    /**
     * Append children list to passed item
     *
     * @param {Element} parentItem - item that should contain passed sub-items
     * @param {ListItem[]} items - sub items to append
     */
    addChildrenList(parentItem: HTMLElement, items: ListItem[])

    /**
     * Creates main <ul> or <ol> tag depended on style
     *
     * @param {string} [style] - 'ordered' or 'unordered'
     * @param {string[]} [classes] - additional classes to append
     * @returns {HTMLOListElement|HTMLUListElement}
     */
    makeListWrapper(
      style: string = this.listStyle,
      classes = [],
    ): HTMLOListElement | HTMLUListElement

    /**
     * Styles
     *
     * @returns {object} - CSS classes names by keys
     * @private
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    get CSS(): Object

    /**
     * Get list style name
     *
     * @returns {string}
     */
    get listStyle(): string

    /**
     * Set list style
     *
     * @param {string} style - new style to set
     */
    set listStyle(style: string)

    /**
     * Returns current List item by the caret position
     *
     * @returns {Element}
     */
    get currentItem(): HTMLElement

    /**
     * Handles Enter keypress
     *
     * @param {KeyboardEvent} event - keydown
     * @returns {void}
     */
    enterPressed(event: KeyboardEvent): void

    /**
     * Decrease indentation of the current item
     *
     * @returns {void}
     */
    unshiftItem(): void

    /**
     * Return the item content
     *
     * @param {Element} item - item wrapper (<li>)
     * @returns {string}
     */
    getItemContent(item: HTMLElement): string

    /**
     * Sets focus to the item's content
     *
     * @param {Element} item - item (<li>) to select
     * @param {boolean} atStart - where to set focus: at the start or at the end
     * @returns {void}
     */
    focusItem(item: HTMLElement, atStart: boolean): void

    /**
     * Get out from List Tool by Enter on the empty last item
     *
     * @returns {void}
     */
    getOutOfList(): void

    /**
     * Handle backspace
     *
     * @param {KeyboardEvent} event - keydown
     */
    backspace(event: KeyboardEvent): void

    /**
     * Add indentation to current item
     *
     * @param {KeyboardEvent} event - keydown
     */
    addTab(event: KeyboardEvent): void

    /**
     * Reduce indentation for current item
     *
     * @param {KeyboardEvent} event - keydown
     * @returns {void}
     */
    shiftTab(event: KeyboardEvent): void

    /**
     * Convert from list to text for conversionConfig
     *
     * @param {ListData} data
     * @returns {string}
     */
    static joinRecursive(data: ListData): string

    /**
     * Convert from text to list with import and export list to text
     */
    static get conversionConfig(): import('@editorjs/editorjs').ConversionConfig
  }
}
