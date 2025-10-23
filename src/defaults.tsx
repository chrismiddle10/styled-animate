let _defaultDuration = 1000;
let _defaultDelay = 0;
let _defaultIterations: number | 'infinite' = 1;
let _defaultOffset: string | number | number[] = undefined;

export interface AnimateDefaults {
    /**
     * {delay} defines the animation delay in milliseconds that is applied if a value is not provided to {AnimateOptions#delay}.
     */
    delay: number;

    /**
     * {duration} defines the animation duration in milliseconds that is applied if a value is not provided to {AnimateOptions#duration}.
     */
    duration: number;

    /**
     * {iterations} defines the animation interation count that is applied if a value is not provided to {AnimateOptions#iterations}.
     */
    iterations: number | 'infinite';

    /**
     * {offset} defines how much of the element ({@link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold|as a number/numbers}) or its margin ({@link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootmargin|as a string}) should be in view before animation is triggered if a value is not provided to {RevealOptions#offset}.
     */
    offset: string | number | number[];
}

/**
 * {getDefaults} returns the currently configured default values.
 */
export function getDefaults(): Readonly<AnimateDefaults> {
    return {
        delay: _defaultDelay,
        duration: _defaultDuration,
        iterations: _defaultIterations,
        offset: _defaultOffset,
    };
}

/**
 * {setDefaults} updates default values if a value is provided.
 */
export function setDefaults( defaults: Partial<AnimateDefaults> ) {
    const {
        delay,
        duration,
        iterations,
        offset,
    } = defaults;

    _defaultDelay = delay === undefined ? _defaultDelay : delay;
    _defaultDuration = duration === undefined ? _defaultDuration : duration;
    _defaultIterations = iterations === undefined ? _defaultIterations : iterations;
    _defaultOffset = offset === undefined ? _defaultOffset : offset;
}
