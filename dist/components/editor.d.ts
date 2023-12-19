import { OutputData } from "@editorjs/editorjs";
import "../styles/globals.scss";
import React from "react";
type Props = {
    id: string;
    data?: OutputData;
    onChange?: (data: OutputData) => void;
};
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
