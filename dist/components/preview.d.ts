import type { OutputBlockData } from '@editorjs/editorjs';
import React from 'react';
type Props<Type extends string = string, Data extends object = any> = {
    blocks?: OutputBlockData<Type, Data>[];
};
declare const Preview: React.FC<Props>;
declare const Index: React.FC<Props>;
export { Preview, Index };
//# sourceMappingURL=preview.d.ts.map