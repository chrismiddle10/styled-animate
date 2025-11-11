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
