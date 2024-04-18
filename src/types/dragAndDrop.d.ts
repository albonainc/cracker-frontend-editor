declare module 'editorjs-drag-drop' {
  /**
   * Drag/Drop feature for Editor.js.
   *
   * @typedef {Object} DragDrop
   * @description Feature's initialization class.
   * @property {Object} api — Editor.js API
   * @property {HTMLElement} holder — DOM element where the editor is initialized.
   * @property {Number} startBlock - Dragged block position.
   * @property {Number} endBlock - Position where the dragged block is gonna be placed.
   * @property {Function} setDragListener - Sets the drag events listener.
   * @property {Function} setDropListener - Sets the drop events listener.
   */
  export default class DragDrop {
    /**
     * @param editor: object
     *   editor — Editor.js instance object
     */
    constructor(
      config: import('@editorjs/editorjs').EditorJs & { configuration: import('@editorjs/editorjs').EditorConfig }
    )

    /**
     * Sets the cursor at the begining of the drag element
     */
    setElementCursor(element?: HTMLElement | null): void

    /**
     * Sets the drag events listener.
     */
    setDragListener(): void

    setBorderBlocks(allBlocks?: NodeListOf<HTMLElement>, blockFocused?: HTMLElement | null): void

    /**
     * Sets the drop events listener.
     */
    setDropListener(): void

    /**
     * Notify core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported(): boolean

    /**
     * Returns the closest block DOM element to the drop event target.
     *
     * @param {HTMLElement} target  DOM element which received the drop event.
     * @returns {HTMLElement}
     */
    getDropTarget(target: HTMLElement): HTMLElement | null

    /**
     * Returns the target position in the child subtree.
     *
     * @param {HTMLElement} target  DOM element which received the drop event.
     * @returns {Number}
     */
    getTargetPosition(target: HTMLElement): number

    isTheOnlyBlock(): boolean

    /**
     * Moves the dragged element to the drop position.
     *
     * @see {@link https://editorjs.io/blocks#move}
     */
    moveBlocks(): void
  }
}
