export { type OutputData } from '@editorjs/editorjs';
export * from './components/editorTools';
export * from './components/preview';
export * from './components/previewTools';
export * from './components/countTools';
export * from './components/searchTools';
import Editor from './components/editor';
import SetPaymentLine from './components/setPaymentLine';
import './global.css';
export interface OutputBlockData<Type extends string = string, Data extends object | undefined = undefined> {
    id?: string;
    type: Type;
    data: Data;
    tunes?: {
        [name: string]: any;
    };
}
export { Editor, SetPaymentLine };
//# sourceMappingURL=index.d.ts.map