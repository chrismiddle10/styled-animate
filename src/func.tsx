import { KeyframeName, Keyframes } from './keyframes';
import { getDefaults } from './defaults';
import { AnimateOptions } from './Animate';
import { RevealOptions } from './withReveal';

export function convertAnimation( input: AnimateOptions | KeyframeName ): AnimateOptions {
    let output: AnimateOptions;

    try {
        // attempt to convert the given input to a partial {AnimationOptions} object
        output = typeof input === 'string'
            ? { name: input as KeyframeName }
            : { ...input };
    } catch( ex ) {
        console.warn( 'styled-animate: invalid $animate config' );
        output = { name: 'invalid' };
    }

    // ensure that we have *some* animation to run even though it does not do anything
    if( !Keyframes[output.name] ) {
        console.warn( `styled-animate: invalid animation name "${output.name}"` );
        output.name = 'invalid';
    }

    const defaults = getDefaults();

    // ensure all expected props are filled with something reasonable
    output.duration = output.duration >= 0 ? output.duration : defaults.duration;
    output.delay = output.delay >= 0 ? output.delay : defaults.delay;
    output.iterations = output.iterations === 'infinite' || output.iterations >= 0 ? output.iterations : defaults.iterations;

    return output;
}

export function convertAnimations( input: AnimateOptions | KeyframeName | Array<AnimateOptions | KeyframeName> ): AnimateOptions[] {
    return ( Array.isArray( input ) ? input : [input] ).map( convertAnimation );
}

export function convertReveal( input: RevealOptions | HTMLElement ): RevealOptions {
    const output: RevealOptions = input instanceof HTMLElement
        ? { element: input as HTMLElement }
        : { ...input };

    output.offset = output.offset === undefined ? getDefaults().offset : output.offset;

    return output;
}

// export function convertReveal( input: RevealOptions ): RevealOptions {
//     if( !( input?.element instanceof HTMLElement ) && typeof input?.element !== 'string' ) {
//         console.warn( `styled-animate: invalid reveal element` );
//     }
//
//     const output = { ...input };
//     output.element = output.element instanceof HTMLElement ? output.element : document.getElementById( input.element as string );
//     output.offset = output.offset >= 0 ? output.offset : 0;
//     output.scroller = output.scroller; // || globalThis.window;
//
//     return output as RevealOptions;
// }

// export function evaluateReveal( options: RevealOptions ): boolean {
//     // we may be server-side rendering, so make sure we have the DOM first
//     if( !globalThis.document || !globalThis.window ) {
//         console.debug( 'styled-animate: invalid document/window' );
//         return null;
//     }
//
//     const element = typeof options.element === 'string'
//         ? document.getElementById( options.element )
//         : options.element;
//
//     // ensure we have an element instance before proceeding
//     if( !element ) {
//         console.debug( 'styled-animate: invalid element' );
//         return null;
//     }
//
//     const viewHeight = Math.max(
//         globalThis.document.documentElement.clientHeight,
//         globalThis.window.innerHeight,
//         0,
//     );
//
//     const box = element.getBoundingClientRect();
//     const hidden = ( box.bottom < 0 || box.top + options.offset - viewHeight >= 0 );
//
//     return !hidden;
// }

// /**
//  * animation-fill-mode:
//  * f(1) => both
//  * f(2) => forwards, backwards
//  * f(N) => forwards, string.repeat( 'none, ', N-2 ) backwards
//  */
// export function getFillMode( _options: AnimateOptions, index: number, array: AnimateOptions[] ): AnimationFillMode {
//     if( array.length === 1 ) {
//         return 'both';
//     } else if( index === 0 ) {
//         return 'forwards';
//     } else if( index === array.length - 1 ) {
//         return 'backwards';
//     } else {
//         return 'none';
//     }
// }
