import { KeyframeName } from '../keyframes';

export interface AnimateOptions {
    /**
     * {delay} defines the animation delay in milliseconds.
     */
    delay?: number;

    /**
     * {duration} defines the animation duration in milliseconds.
     */
    duration?: number;

    /**
     * {iterations} defines the animation interation count.
     */
    iterations?: number | 'infinite';

    /**
     * {name} defines the animation name as declared in {Keyframes}.
     */
    name: KeyframeName;

    /**
     * {repeat} defines whether the animation array should restart once it completes.
     *
     * Note: this applies when animations are being used with {withControl} or {withReveal} only
     * and *must* be used on the last animation in the array.
     */
    repeat?: boolean;
}

export interface AnimateProps {
    $animate: AnimateOptions | KeyframeName;
}
