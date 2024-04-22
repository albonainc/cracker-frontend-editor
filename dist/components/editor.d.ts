/// <reference types="react" />
import { OutputData } from '@editorjs/editorjs';
import { ToolConfigs } from '../components/editorTools';
import '../global.css';
type Props = {
    id: string;
    data?: OutputData;
    onChange?: (data: OutputData) => void;
    config?: ToolConfigs;
};
interface Editor {
    save: () => Promise<OutputData>;
}
declare const Editor: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<Editor>>;
export default Editor;
//# sourceMappingURL=editor.d.ts.map