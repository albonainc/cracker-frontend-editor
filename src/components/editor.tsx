import EditorJs, { OutputData, EditorConfig } from "@editorjs/editorjs";
import { tools } from "../components/editorTools";
import DragDrop from "./tools/dragAndDrop";
import { i18n } from "../components/config/i18n";
import "../styles/globals.scss";
import React from "react";

type Props = {
  id: string;
  data?: OutputData;
  onChange?: (data: OutputData) => void;
};

const Editor: React.FC<Props> = ({ id, data, onChange }) => {
  const editorJs = React.useRef<EditorJs | null>(null);

  React.useEffect(() => {
    if (!editorJs.current) {
      const editor = new EditorJs({
        holder: id,
        tools: tools,
        autofocus: false,
        data: data,
        placeholder: "文字を入力",
        async onChange() {
          if (onChange) {
            const res = await save();
            res && onChange(res);
          }
        },
        i18n,
        onReady() {
          new DragDrop(editor as EditorJs & { configuration: EditorConfig });
        },
      });
      editorJs.current = editor;
    }
    return () => {
      if (editorJs.current && editorJs.current.destroy) {
        editorJs.current.destroy();
      }
    };
    // es-lint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const save = (): Promise<OutputData> | undefined => {
    if (!editorJs.current) return undefined;
    return editorJs.current.save().then((outputData) => outputData);
  };

  return <div id={id} className="w-full" />;
};

export default React.memo(Editor);
