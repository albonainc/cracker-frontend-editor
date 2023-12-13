import type {
  BlockToolConstructorOptions,
  BlockTool,
  BlockToolData,
  ToolboxConfig,
} from "@editorjs/editorjs";
import type { CSSProperties } from "react";
import type { Parser } from "../preview";

const styles: CSSProperties = {
  backgroundColor: "#FFDA00",
  padding: "0.5rem",
  width: "100%",
  textAlign: "center",
};
const text = "このラインより先を有料にする";

class PaymentLine implements BlockTool {
  constructor(config?: BlockToolConstructorOptions) {}

  static get toolbox(): ToolboxConfig {
    return {
      title: "Payment",
      icon: '<svg style="transform:scale(0.7)" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0097 11.2778H14.218V12.7222H10.2863V14.1667H14.218V15.6111H10.2863V18.5H8.71365V15.6111H4.78198V14.1667H8.71365V12.7222H4.78198V11.2778H7.99022L3.99564 5.5H5.85926L9.49998 10.765L13.1407 5.5H15.0043L11.0097 11.2778Z" fill="#000000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H6.16354L9.5 9.82499L12.8365 5H16L12.0054 10.7778H14.7684V13.2222H10.8368V13.6667H14.7684V16.1111H10.8368V19H8.16323V16.1111H4.23156V13.6667H8.16323V13.2222H4.23156V10.7778H6.99457L3 5ZM4.99133 6L8.9859 11.7778H5.33243V12.2222H9.2641V14.6667H5.33243V15.1111H9.2641V18H9.7359V15.1111H13.6676V14.6667H9.7359V12.2222H13.6676V11.7778H10.0141L14.0087 6H13.445L9.5 11.705L5.55501 6H4.99133Z" fill="#000000"/><rect width="4" height="3" fill="#000000"/><rect x="5" width="4" height="3" fill="#000000"/><rect x="10" width="4" height="3" fill="#000000"/><rect x="15" width="4" height="3" fill="#000000"/></svg>',
    };
  }

  render(): HTMLElement {
    const div = document.createElement("div");

    div.innerText = text;
    div.style.backgroundColor = styles.backgroundColor?.toString() ?? "";
    div.style.padding = styles.padding?.toString() ?? "";
    div.style.width = styles.width?.toString() ?? "";
    div.style.textAlign = styles.textAlign?.toString() ?? "";

    return div;
  }

  save(block: HTMLElement): BlockToolData {
    return {};
  }
}

export const paymentLineParser: Parser<{}> = () => {
  const style = () => {
    return Object.entries(styles)
      .map<string>(([key, value]) => `${key}: ${value};`)
      .join(" ");
  };
  return `<div style="${style()}">このラインより先を有料にする</div>`;
};

export default PaymentLine;
