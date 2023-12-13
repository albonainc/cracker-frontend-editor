import EditorJs, { EditorConfig, API, OutputData } from "@editorjs/editorjs";

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
  toolbar: API["toolbar"];
  borderStyle: string;
  api: API["blocks"];
  holder: HTMLElement | null | undefined;
  readOnly: boolean | undefined;
  startBlock: number | null;
  endBlock: number | null;
  save: () => Promise<OutputData>;

  /**
   * @param editor: object
   *   editor — Editor.js instance object
   */
  constructor(
    {
      configuration,
      blocks,
      toolbar,
      save,
    }: EditorJs & { configuration: EditorConfig },
    borderStyle?: string
  ) {
    this.toolbar = toolbar;
    this.borderStyle = borderStyle || "1px dashed #aaa";
    this.api = blocks;
    this.holder =
      typeof configuration.holder === "string"
        ? document.getElementById(configuration.holder)
        : configuration.holder;
    this.readOnly = configuration.readOnly;
    this.startBlock = null;
    this.endBlock = null;
    this.save = save;

    this.setDragListener();
    this.setDropListener();
  }

  /**
   * Sets the cursor at the begining of the drag element
   */
  setElementCursor(element?: HTMLElement | null) {
    if (!element) return;
    const range = document.createRange();
    const selection = window.getSelection();

    range.setStart(element.childNodes[0], 0);
    range.collapse(true);
    selection?.removeAllRanges();
    selection?.addRange(range);
    element.focus();
  }

  /**
   * Sets the drag events listener.
   */
  setDragListener() {
    if (!this.readOnly) {
      const settingsButton = this.holder?.querySelector(
        ".ce-toolbar__settings-btn"
      );

      settingsButton?.setAttribute("draggable", "true");
      settingsButton?.addEventListener("dragstart", () => {
        this.startBlock = this.api.getCurrentBlockIndex();
      });
      settingsButton?.addEventListener("drag", () => {
        this.toolbar.close(); // this closes the toolbar when we start the drag
        if (!this.isTheOnlyBlock()) {
          const allBlocks =
            this.holder?.querySelectorAll<HTMLElement>(".ce-block");
          const blockFocused = this.holder?.querySelector<HTMLElement>(
            ".ce-block--drop-target"
          );
          this.setElementCursor(blockFocused);
          this.setBorderBlocks(allBlocks, blockFocused);
        }
      });
    }
  }

  setBorderBlocks(
    allBlocks?: NodeListOf<HTMLElement>,
    blockFocused?: HTMLElement | null
  ) {
    if (!allBlocks || !blockFocused) return;
    allBlocks.forEach((block) => {
      const blockContent =
        block.querySelector<HTMLElement>(".ce-block__content");
      if (block !== blockFocused) {
        blockContent?.style.removeProperty("border-top");
        blockContent?.style.removeProperty("border-bottom");
      } else {
        const index = Object.keys(allBlocks).find((key) => {
          // @ts-ignore
          return allBlocks[key] === blockFocused;
        });
        if (
          (index as unknown as number | undefined) ??
          0 > (this.startBlock ?? 0)
        ) {
          if (blockContent?.style.borderBottom)
            blockContent.style.borderBottom =
              this.borderStyle || "1px dashed #aaa";
        } else {
          if (blockContent?.style.borderTop) {
            blockContent.style.borderTop = this.borderStyle;
          }
        }
      }
    });
  }

  /**
   * Sets the drop events listener.
   */
  setDropListener() {
    document.addEventListener("drop", (event) => {
      const { target } = event;
      if (!target) return;
      if (this.holder?.contains(target as Node) && this.startBlock !== null) {
        const dropTarget = this.getDropTarget(target as HTMLElement);
        if (dropTarget) {
          const blockContent =
            dropTarget.querySelector<HTMLElement>(".ce-block__content");
          blockContent?.style.removeProperty("border-top");
          blockContent?.style.removeProperty("border-bottom");
          this.endBlock = this.getTargetPosition(dropTarget);
          this.moveBlocks();
        }
      }
      this.startBlock = null;
    });
  }

  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }

  /**
   * Returns the closest block DOM element to the drop event target.
   *
   * @param {HTMLElement} target  DOM element which received the drop event.
   * @returns {HTMLElement}
   */
  getDropTarget(target: HTMLElement): HTMLElement | null {
    return target.classList.contains("ce-block")
      ? target
      : target.closest(".ce-block");
  }

  /**
   * Returns the target position in the child subtree.
   *
   * @param {HTMLElement} target  DOM element which received the drop event.
   * @returns {Number}
   */
  getTargetPosition(target: HTMLElement): number {
    return Array.from(target.parentNode!.children).indexOf(target);
  }

  isTheOnlyBlock() {
    return this.api.getBlocksCount() === 1;
  }

  /**
   * Moves the dragged element to the drop position.
   *
   * @see {@link https://editorjs.io/blocks#move}
   */
  moveBlocks(): void {
    if (!this.isTheOnlyBlock() && this.endBlock && this.startBlock) {
      this.api.move(this.endBlock, this.startBlock);
    }
  }
}
