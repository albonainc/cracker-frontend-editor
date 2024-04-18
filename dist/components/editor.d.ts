import { OutputData } from '@editorjs/editorjs';
import React from 'react';
import { ToolConfigs } from '../components/editorTools';
type Props = {
    id: string;
    data?: OutputData;
    onChange?: (data: OutputData) => void;
    config?: ToolConfigs;
};
declare const Editor: React.FC<Props>;
export default Editor;
//# sourceMappingURL=editor.d.ts.map