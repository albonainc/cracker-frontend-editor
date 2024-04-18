declare module '@editorjs/link' {
  /**
   * @typedef {object} metaData
   * @description Fetched link meta data
   * @property {string} image - link's meta image
   * @property {string} title - link's meta title
   * @property {string} description - link's description
   */
  type metaData = {
    image: {
      url: string
    }
    title: string
    description: string
  }

  /**
   * @typedef {object} LinkToolData
   * @description Link Tool's input and output data format
   * @property {string} link — data url
   * @property {metaData} meta — fetched link data
   */
  type LinkToolData = {
    link: string
    meta: metaData
  }

  /**
   * @typedef {object} LinkToolConfig
   * @property {string} endpoint - the endpoint for link data fetching
   * @property {object} headers - the headers used in the GET request
   */
  type LinkToolConfig = {
    endpoint: string
    // eslint-disable-next-line @typescript-eslint/ban-types
    headers?: Object
  }

  /**
   * @typedef {object} UploadResponseFormat
   * @description This format expected from backend on link data fetching
   * @property {number} success  - 1 for successful uploading, 0 for failure
   * @property {metaData} meta - Object with link data.
   *
   * Tool may have any data provided by backend, currently are supported by design:
   * title, description, image, url
   */
  type UploadResponseFormat = {
    success: 1 | 0
    meta: metaData
  }

  export default class LinkTool implements import('@editorjs/editorjs').BlockToolConstructable {
    /**
     * Notify core that read-only mode supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported(): boolean

    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox(): { icon: string; title: 'Link' }

    /**
     * Allow to press Enter inside the LinkTool input
     *
     * @returns {boolean}
     * @public
     */
    static get enableLineBreaks(): boolean

    /**
     * @param {object} options - Tool constructor options fot from Editor.js
     * @param {LinkToolData} options.data - previously saved data
     * @param {LinkToolConfig} options.config - user config for Tool
     * @param {object} options.api - Editor.js API
     * @param {boolean} options.readOnly - read-only mode flag
     */
    new(
      config: import('@editorjs/editorjs').BlockToolConstructorOptions<
        LinkToolData,
        LinkToolConfig
      >,
    ): import('@editorjs/editorjs').BlockTool

    /**
     * Renders Block content
     *
     * @public
     *
     * @returns {HTMLDivElement}
     */
    render(): HTMLDivElement

    /**
     * Return Block data
     *
     * @public
     *
     * @returns {LinkToolData}
     */
    save(): LinkToolData

    /**
     * Validate Block data
     * - check if given link is an empty string or not.
     *
     * @public
     *
     * @returns {boolean} false if saved data is incorrect, otherwise true
     */
    validate(): boolean

    /**
     * Stores all Tool's data
     *
     * @param {LinkToolData} data - data to store
     */
    set data(data: LinkToolData)

    /**
     * Return Tool data
     *
     * @returns {LinkToolData}
     */
    get data(): LinkToolData

    /**
     * @returns {object} - Link Tool styles
     */
    get CSS(): {
      baseClass: string
      input: string

      /**
       * Tool's classes
       */
      container: 'link-tool'
      inputEl: 'link-tool__input'
      inputHolder: 'link-tool__input-holder'
      inputError: 'link-tool__input-holder--error'
      linkContent: 'link-tool__content'
      linkContentRendered: 'link-tool__content--rendered'
      linkImage: 'link-tool__image'
      linkTitle: 'link-tool__title'
      linkDescription: 'link-tool__description'
      linkText: 'link-tool__anchor'
      progress: 'link-tool__progress'
      progressLoading: 'link-tool__progress--loading'
      progressLoaded: 'link-tool__progress--loaded'
    }

    /**
     * Prepare input holder
     *
     * @returns {HTMLElement}
     */
    makeInputHolder(): HTMLElement

    /**
     * Activates link data fetching by url
     *
     * @param {PasteEvent|KeyboardEvent} event - fetching could be fired by a pase or keydown events
     */
    startFetching(event: ClipboardEvent | KeyboardEvent): void

    /**
     * If previous link data fetching failed, remove error styles
     */
    removeErrorStyle(): void

    /**
     * Select LinkTool input content by CMD+A
     *
     * @param {KeyboardEvent} event - keydown
     */
    selectLinkUrl(event: KeyboardEvent): void

    /**
     * Prepare link preview holder
     *
     * @returns {HTMLElement}
     */
    prepareLinkPreview(): HTMLElement

    /**
     * Compose link preview from fetched data
     *
     * @param {metaData} meta - link meta data
     */
    showLinkPreview({ image, title, description }: metaData): void

    /**
     * Show loading progress bar
     */
    showProgress(): void

    /**
     * Hide loading progress bar
     *
     * @returns {Promise<void>}
     */
    hideProgress(): Promise<void>

    /**
     * If data fetching failed, set input error style
     */
    applyErrorStyle(): void

    /**
     * Sends to backend pasted url and receives link data
     *
     * @param {string} url - link source url
     */
    async fetchLinkData(url: string)

    /**
     * Link data fetching callback
     *
     * @param {UploadResponseFormat} response - backend response
     */
    onFetch(response: UploadResponseFormat)

    /**
     * Handle link fetching errors
     *
     * @private
     *
     * @param {string} errorMessage - message to explain user what he should do
     */
    fetchingFailed(errorMessage: string)

    /**
     * Helper method for elements creation
     *
     * @param {string} tagName - name of creating element
     * @param {string|string[]} [classNames] - list of CSS classes to add
     * @param {object} [attributes] - object with attributes to add
     * @returns {HTMLElement}
     */
    make(
      tagName: string,
      classNames: string | string[] = null,
      // eslint-disable-next-line @typescript-eslint/ban-types
      attributes: Object = {},
    ): HTMLElement
  }
}
