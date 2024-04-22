import type { OutputBlockData } from '@editorjs/editorjs';
import type { FC } from 'react';
type Props<Type extends string = string, Data extends object = any> = {
    blocks?: OutputBlockData<Type, Data>[];
};
declare const Preview: FC<Props>;
declare const Index: FC<Props>;
export { Preview, Index };
//# sourceMappingURL=preview.d.ts.map