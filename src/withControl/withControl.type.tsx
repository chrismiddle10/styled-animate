import { AnimateOptions } from '../Animate';
import { KeyframeName } from '../keyframes';

export interface ControlProps {
    $animate: AnimateOptions | KeyframeName | Array<AnimateOptions | KeyframeName>;
}

export interface ControlRef {
    element: HTMLElement;
    start: () => void;
    stop: () => void;
}
