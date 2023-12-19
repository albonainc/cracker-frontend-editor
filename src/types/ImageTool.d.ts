declare module "@editorjs/image" {
  /**
   * @typedef {object} ImageToolData
   * @description Image Tool's input and output data format
   * @property {string} caption — image caption
   * @property {boolean} withBorder - should image be rendered with border
   * @property {boolean} withBackground - should image be rendered with background
   * @property {boolean} stretched - should image be stretched to full width of container
   * @property {object} file — Image file data returned from backend
   * @property {string} file.url — image URL
   */
  type ImageToolData = {
    caption: string;
    withBorder: boolean;
    withBackground: boolean;
    stretched: boolean;
    file: {
      url: string;
    };
  };

  /**
   * @typedef {object} ImageConfig
   * @description Config supported by Tool
   * @property {object} endpoints - upload endpoints
   * @property {string} endpoints.byFile - upload by file
   * @property {string} endpoints.byUrl - upload by URL
   * @property {string} field - field name for uploaded image
   * @property {string} types - available mime-types
   * @property {string} captionPlaceholder - placeholder for Caption field
   * @property {object} additionalRequestData - any data to send with requests
   * @property {object} additionalRequestHeaders - allows to pass custom headers with Request
   * @property {string} buttonContent - overrides for Select File button
   * @property {object} [uploader] - optional custom uploader
   * @property {function(File): Promise.<UploadResponseFormat>} [uploader.uploadByFile] - method that upload image by File
   * @property {function(string): Promise.<UploadResponseFormat>} [uploader.uploadByUrl] - method that upload image by URL
   */
  type ImageToolConfig = {
    endpoints?: {
      byFile: string;
      byUrl: string;
    };
    field?: string;
    types?: string;
    captionPlaceholder?: string;
    additionalRequestData?: Object;
    additionalRequestHeaders?: Object;
    buttonContent?: string;
    uploader?: {
      uploadByFile(file: File): Promise<UploadResponseFormat>;
      uploadByUrl(url: string): Promise<UploadResponseFormat>;
    };
  };

  /**
   * @typedef {object} UploadResponseFormat
   * @description This format expected from backend on file uploading
   * @property {number} success - 1 for successful uploading, 0 for failure
   * @property {object} file - Object with file data.
   *                           'url' is required,
   *                           also can contain any additional data that will be saved and passed back
   * @property {string} file.url - [Required] image source URL
   */
  interface UploadResponseFormat {
    success: number;
    file: {
      url: string;
    };
  }

  export default class ImageTool
    implements import("@editorjs/editorjs").BlockToolConstructable
  {
    /**
     * Notify core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported(): boolean;

    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox(): {
      icon: string;
      title: "Image";
    };

    /**
     * Available image tools
     *
     * @returns {Array}
     */
    static get tunes(): [
      {
        name: "withBorder";
        icon: IconAddBorder;
        title: "With border";
        toggle: true;
      },
      {
        name: "stretched";
        icon: IconStretch;
        title: "Stretch image";
        toggle: true;
      },
      {
        name: "withBackground";
        icon: IconAddBackground;
        title: "With background";
        toggle: true;
      }
    ];

    /**
     * @param {object} tool - tool properties got from editor.js
     * @param {ImageToolData} tool.data - previously saved data
     * @param {ImageConfig} tool.config - user config for Tool
     * @param {object} tool.api - Editor.js API
     * @param {boolean} tool.readOnly - read-only mode flag
     * @param {BlockAPI|{}} tool.block - current Block API
     */
    new(
      config: import("@editorjs/editorjs").BlockToolConstructorOptions<
        ImageToolData,
        ImageToolConfig
      >
    ): import("@editorjs/editorjs").BlockTool;

    /**
     * Renders Block content
     *
     * @public
     *
     * @returns {HTMLDivElement}
     */
    render(): HTMLDivElement;

    /**
     * Validate data: check if Image exists
     *
     * @param {ImageToolData} savedData — data received after saving
     * @returns {boolean} false if saved data is not correct, otherwise true
     * @public
     */
    validate(savedData: ImageToolData): boolean;

    /**
     * Return Block data
     *
     * @public
     *
     * @returns {ImageToolData}
     */
    save(): ImageToolData;

    /**
     * Returns configuration for block tunes: add background, add border, stretch image
     *
     * @public
     *
     * @returns {Array}
     */
    renderSettings(): Array<typeof tunes>;

    /**
     * Fires after clicks on the Toolbox Image Icon
     * Initiates click on the Select File button
     *
     * @public
     */
    appendCallback(): void;

    /**
     * Specify paste substitutes
     *
     * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
     * @returns {{tags: string[], patterns: object<string, RegExp>, files: {extensions: string[], mimeTypes: string[]}}}
     */
    static get pasteConfig(): {
      tags: string[];
      patterns: {
        [key: string]: RegExp;
      };
      files: {
        extensions: string[];
        mimeTypes: string[];
      };
    };

    /**
     * Specify paste handlers
     *
     * @public
     * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
     * @param {CustomEvent} event - editor.js custom paste event
     *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
     * @returns {void}
     */
    async onPaste(event: CustomEvent): void;

    /**
     * Private methods
     * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
     */

    /**
     * Stores all Tool's data
     *
     * @private
     *
     * @param {ImageToolData} data - data in Image Tool format
     */
    private set data(data: ImageToolData): void;

    /**
     * Return Tool data
     *
     * @private
     *
     * @returns {ImageToolData}
     */
    private get data(): ImageToolData;

    /**
     * Set new image file
     *
     * @private
     *
     * @param {object} file - uploaded file data
     */
    private set image(file: FIle);

    /**
     * File uploading callback
     *
     * @private
     *
     * @param {UploadResponseFormat} response - uploading server response
     * @returns {void}
     */
    private onUpload(response: UploadResponseFormat): void;

    /**
     * Handle uploader errors
     *
     * @private
     * @param {string} errorText - uploading error text
     * @returns {void}
     */
    private uploadingFailed(errorText: string): void;

    /**
     * Callback fired when Block Tune is activated
     *
     * @private
     *
     * @param {string} tuneName - tune that has been clicked
     * @returns {void}
     */
    private tuneToggled(tuneName: string): void;

    /**
     * Set one tune
     *
     * @param {string} tuneName - {@link Tunes.tunes}
     * @param {boolean} value - tune state
     * @returns {void}
     */
    private setTune(tuneName: string, value: boolean): void;

    /**
     * Show preloader and upload image by target url
     *
     * @param {string} url - url pasted
     * @returns {void}
     */
    private uploadUrl(url: string): void;
  }
}