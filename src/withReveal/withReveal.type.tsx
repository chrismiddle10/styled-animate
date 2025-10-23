import { AnimateOptions } from '../Animate';
import { KeyframeName } from '../keyframes';

export interface RevealOptions {
    /**
     * {element} provides a means of observing the target HTML element.
     */
    element: HTMLElement;

    /**
     * {offset} defines how much of the element ({@link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold|as a number/numbers}) or its margin ({@link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin|as a string}) should be in view before animation is triggered.
     */
    offset?: string | number | number[];

    /**
     * {scroller} defines the element that has its scrolling monitored to detect when the animated element is revealed.
     */
    scroller?: HTMLElement | Document;
}

export interface RevealProps {
    $animate: AnimateOptions | KeyframeName | Array<AnimateOptions | KeyframeName>;
    $reveal: RevealOptions | HTMLElement;
}
