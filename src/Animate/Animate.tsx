import { css } from 'styled-components';
import { AnimateProps } from './Animate.type';
import { convertAnimation } from '../func';
import { Keyframes } from '../keyframes';

export const Animate = css<AnimateProps>`
    ${props => {
        const $animate = props.$animate && convertAnimation( props.$animate );

        return $animate && css`
            animation-name: ${Keyframes[$animate.name]};
            animation-delay: ${$animate.delay}ms;
            animation-duration: ${$animate.duration}ms;
            animation-iteration-count: ${$animate.iterations};
            animation-fill-mode: both;
        `;
    }}
`;

// export const Animate = css<AnimateProps & RevealProps>`
//     ${props => {
//         const $animate = convertAnimate( props.$animate ).reverse();
//         const $reveal = props.$reveal && convertReveal( props.$reveal );
//
//         return css`
//             animation-name: ${$animate.map( o => Keyframes[o.name].getName() ).join( ',' )};
//             animation-delay: ${$animate.map( o => `${o.delay}ms` ).join( ',' )};
//             animation-duration: ${$animate.map( o => `${o.duration}ms` ).join( ',' )};
//             animation-iteration-count: ${$animate.map( o => o.iterations ).join( ',' )};
//             animation-fill-mode: ${$animate.map( getFillMode ).join( ',' )};
//             animation-play-state: running;
//
//             ${$reveal?.element && !evaluateReveal( $reveal ) && css`
//                 animation-play-state: paused;
//             `}
//         `;
//     }}
// `;
