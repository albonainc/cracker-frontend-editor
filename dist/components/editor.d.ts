import { OutputData } from '@editorjs/editorjs';
import { ComponentProps, Ref } from 'react';
import { ToolConfigs } from '../components/editorTools';
type Props = {
    id: string;
    data?: OutputData;
    onChange?: (data: OutputData) => void;
    config?: ToolConfigs;
};
export interface EditorImplements {
    save: () => Promise<OutputData>;
}
declare const Editor: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<EditorImplements>>;
export declare const EditorWrap: React.FC<ComponentProps<typeof Editor> & {
    editorRef?: Ref<EditorImplements>;
}>;
export default EditorWrap;
//# sourceMappingURL=editor.d.ts.map