import { keyframes } from 'styled-components';

export type KeyframeName = keyof typeof Keyframes;

/**
 * {Keyframes} defines the animations provided by this library.
 * Each animation herein is taken directly from [Animate.css](https://github.com/animate-css/animate.css).
 */
export const Keyframes = {
    invalid: keyframes`
        0% {}
        100% {}
    `,
    bounce: keyframes`
        0%, 20%, 53%, 100% {
            animation-timing-function: cubic-bezier(.215,.61,.355,1);
            transform: translateZ(0);
        }
        40%, 43% {
            animation-timing-function: cubic-bezier(.755,.05,.855,.06);
            transform: translate3d(0, -30px, 0) scaleY(1.1);
        }
        70% {
            animation-timing-function: cubic-bezier(.755,.05,.855,.06);
            transform: translate3d(0, -15px, 0) scaleY(1.05);
        }
        80% {
            transition-timing-function: cubic-bezier(.215,.61,.355,1);
            transform: translateZ(0) scaleY(.95);
        }
        90% {
            transform: translate3d(0, -4px, 0) scaleY(1.02);
        }
    `,
    flash: keyframes`
        0%, 50%, 100% {
            opacity: 1;
        }
        25%, 75% {
            opacity: 0;
        }
    `,
    pulse: keyframes`
        0% {
            transform: scaleX(1);
        }
        50% {
            transform: scale3d(1.05, 1.05, 1.05);
        }
        100% {
            transform: scaleX(1);
        }
    `,
    rubberBand: keyframes`
        0% {
            transform: scaleX(1);
        }
        30% {
            transform: scale3d(1.25, .75, 1);
        }
        40% {
            transform: scale3d(.75, 1.25, 1);
        }
        50% {
            transform: scale3d(1.15, .85, 1);
        }
        65% {
            transform: scale3d(.95, 1.05, 1);
        }
        75% {
            transform: scale3d(1.05, .95, 1);
        }
        100% {
            transform: scaleX(1);
        }
    `,
    shakeX: keyframes`
        0%, 100% {
            transform: translateZ(0);
        }

        10%, 30%, 50%, 70%, 90% {
            transform: translate3d(-10px, 0, 0);
        }
        20%, 40%, 60%, 80% {
            transform: translate3d(10px, 0, 0);
        }
    `,
    shakeY: keyframes`
        0%, 100% {
            transform: translateZ(0);
        }

        10%, 30%, 50%, 70%, 90% {
            transform: translate3d(0, -10px, 0);
        }
        20%, 40%, 60%, 80% {
            transform: translate3d(0, 10px, 0);
        }
    `,
    headShake: keyframes`
        0% {
            transform: translateX(0);
        }
        6.5% {
            transform: translateX(-6px) rotateY(-9deg);
        }
        18.5% {
            transform: translateX(5px) rotateY(7deg);
        }
        31.5% {
            transform: translateX(-3px) rotateY(-5deg);
        }
        43.5% {
            transform: translateX(2px) rotateY(3deg);
        }
        50% {
            transform: translateX(0);
        }
    `,
    swing: keyframes`
        20% {
            transform: rotate(15deg);
        }

        40% {
            transform: rotate(-10deg);
        }
        60% {
            transform: rotate(5deg);
        }
        80% {
            transform: rotate(-5deg);
        }
        100% {
            transform: rotate(0deg);
        }
    `,
    tada: keyframes`
        0% {
            transform: scaleX(1);
        }

        10%, 20% {
            transform: scale3d(.9, .9, .9) rotate(-3deg);
        }
        30%, 50%, 70%, 90% {
            transform: scale3d(1.1, 1.1, 1.1) rotate(3deg);
        }
        40%, 60%, 80% {
            transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg);
        }
        100% {
            transform: scaleX(1);
        }
    `,
    wobble: keyframes`
        0% {
            transform: translateZ(0);
        }
        15% {
            transform: translate3d(-25%, 0, 0) rotate(-5deg);
        }
        30% {
            transform: translate3d(20%, 0, 0) rotate(3deg);
        }
        45% {
            transform: translate3d(-15%, 0, 0) rotate(-3deg);
        }
        60% {
            transform: translate3d(10%, 0, 0) rotate(2deg);
        }
        75% {
            transform: translate3d(-5%, 0, 0) rotate(-1deg);
        }
        100% {
            transform: translateZ(0);
        }
    `,
    jello: keyframes`
        0%, 11.1%, 100% {
            transform: translateZ(0);
        }

        22.2% {
            transform: skewX(-12.5deg) skewY(-12.5deg);
        }
        33.3% {
            transform: skewX(6.25deg) skewY(6.25deg);
        }
        44.4% {
            transform: skewX(-3.125deg) skewY(-3.125deg);
        }
        55.5% {
            transform: skewX(1.5625deg) skewY(1.5625deg);
        }
        66.6% {
            transform: skewX(-.78125deg) skewY(-.78125deg);
        }
        77.7% {
            transform: skewX(.390625deg) skewY(.390625deg);
        }
        88.8% {
            transform: skewX(-.1953125deg) skewY(-.1953125deg);
        }
    `,
    heartBeat: keyframes`
        0% {
            transform: scale(1);
        }

        14% {
            transform: scale(1.3);
        }

        28% {
            transform: scale(1);
        }

        42% {
            transform: scale(1.3);
        }

        70% {
            transform: scale(1);
        }
    `,
    backInDown: keyframes`
         0% {
            transform: translateY(-1200px) scale(0.7);
            opacity: 0.7;
        }

        80% {
            transform: translateY(0px) scale(0.7);
            opacity: 0.7;
        }

        100% {
            transform: scale(1);
            opacity: 1;
        }
    `,
    backInLeft: keyframes`
        0% {
            transform: translateX(-2000px) scale(0.7);
            opacity: 0.7;
        }

        80% {
            transform: translateX(0px) scale(0.7);
            opacity: 0.7;
        }

        100% {
            transform: scale(1);
            opacity: 1;
        }
    `,
    backInRight: keyframes`
        0% {
            transform: translateX(2000px) scale(0.7);
            opacity: 0.7;
        }

        80% {
            transform: translateX(0px) scale(0.7);
            opacity: 0.7;
        }

        100% {
            transform: scale(1);
            opacity: 1;
        }
    `,
    backInUp: keyframes`
        0% {
            transform: translateY(1200px) scale(0.7);
            opacity: 0.7;
        }

        80% {
            transform: translateY(0px) scale(0.7);
            opacity: 0.7;
        }

        100% {
            transform: scale(1);
            opacity: 1;
        }
    `,
    backOutDown: keyframes`
        0% {
            transform: scale(1);
            opacity: 1;
        }

        20% {
            transform: translateY(0px) scale(0.7);
            opacity: 0.7;
        }

        100% {
            transform: translateY(700px) scale(0.7);
            opacity: 0.7;
        }
    `,
    backOutLeft: keyframes`
        0% {
            transform: scale(1);
            opacity: 1;
        }

        20% {
            transform: translateX(0px) scale(0.7);
            opacity: 0.7;
        }

        100% {
            transform: translateX(-2000px) scale(0.7);
            opacity: 0.7;
        }
    `,
    backOutRight: keyframes`
        0% {
            transform: scale(1);
            opacity: 1;
        }

        20% {
            transform: translateX(0px) scale(0.7);
            opacity: 0.7;
        }

        100% {
            transform: translateX(2000px) scale(0.7);
            opacity: 0.7;
        }
    `,
    backOutUp: keyframes`
        0% {
            transform: scale(1);
            opacity: 1;
        }

        20% {
            transform: translateY(0px) scale(0.7);
            opacity: 0.7;
        }

        100% {
            transform: translateY(-700px) scale(0.7);
            opacity: 0.7;
        }
    `,
    bounceIn: keyframes`
        0%, 20%, 40%, 60%, 80%, 100% {
            animation-timing-function: cubic-bezier(.215,.61,.355,1);
        }
        0% {
            opacity: 0;
            transform: scale3d(.3, .3, .3);
        }
        20% {
            transform: scale3d(1.1, 1.1, 1.1);
        }
        40% {
            transform: scale3d(.9, .9, .9);
        }
        60% {
            opacity: 1;
            transform: scale3d(1.03, 1.03, 1.03);
        }
        80% {
            transform: scale3d(.97, .97, .97);
        }
        100% {
            opacity: 1;
            transform: scaleX(1);
        }
    `,
    bounceInDown: keyframes`
        0%, 60%, 75%, 90%, 100% {
            animation-timing-function: cubic-bezier(.215,.61,.355,1);
        }
        0% {
            opacity: 0;
            transform: translate3d(0, -3000px, 0) scaleY(3);
        }
        60% {
            opacity: 1;
            transform: translate3d(0, 25px, 0) scaleY(.9);
        }
        75% {
            transform: translate3d(0, -10px, 0) scaleY(.95);
        }
        90% {
            transform: translate3d(0, 5px, 0) scaleY(.985);
        }
        100% {
            transform: translateZ(0);
        }
    `,
    bounceInLeft: keyframes`
        0%, 60%, 75%, 90%, 100% {
            animation-timing-function: cubic-bezier(.215,.61,.355,1);
        }
        0% {
            opacity: 0;
            transform: translate3d(-3000px, 0, 0) scaleX(3);
        }
        60% {
            opacity: 1;
            transform: translate3d(25px, 0, 0) scaleX(1);
        }
        75% {
            transform: translate3d(-10px, 0, 0) scaleX(.98);
        }
        90% {
            transform: translate3d(5px, 0, 0) scaleX(.995);
        }
        100% {
            transform: translateZ(0);
        }
    `,
    bounceInRight: keyframes`
        0%, 60%, 75%, 90%, 100% {
            animation-timing-function: cubic-bezier(.215,.61,.355,1);
        }

        0% {
            opacity: 0;
            transform: translate3d(3000px, 0, 0) scaleX(3);
        }
        60% {
            opacity: 1;
            transform: translate3d(-25px, 0, 0) scaleX(1);
        }
        75% {
            transform: translate3d(10px, 0, 0) scaleX(.98);
        }
        90% {
            transform: translate3d(-5px, 0, 0) scaleX(.995);
        }
        100% {
            transform: translateZ(0);
        }
    `,
    bounceInUp: keyframes`
        0%, 60%, 75%, 90%, 100% {
            animation-timing-function: cubic-bezier(.215,.61,.355,1);
        }
        0% {
            opacity: 0;
            transform: translate3d(0, 3000px, 0) scaleY(5);
        }
        60% {
            opacity: 1;
            transform: translate3d(0, -20px, 0) scaleY(.9);
        }
        75% {
            transform: translate3d(0, 10px, 0) scaleY(.95);
        }
        90% {
            transform: translate3d(0, -5px, 0) scaleY(.985);
        }
        100% {
            transform: translateZ(0);
        }
    `,
    bounceOut: keyframes`
        20% {
            transform: scale3d(0.9, 0.9, 0.9);
        }

        50%,
        55% {
            opacity: 1;
            transform: scale3d(1.1, 1.1, 1.1);
        }

        100% {
            opacity: 0;
            transform: scale3d(0.3, 0.3, 0.3);
        }
    `,
    bounceOutDown: keyframes`
        20% {
            transform: translate3d(0, 10px, 0) scaleY(0.985);
        }

        40%,
        45% {
            opacity: 1;
            transform: translate3d(0, -20px, 0) scaleY(0.9);
        }

        100% {
            opacity: 0;
            transform: translate3d(0, 2000px, 0) scaleY(3);
        }
    `,
    bounceOutLeft: keyframes`
        20% {
            opacity: 1;
            transform: translate3d(20px, 0, 0) scaleX(0.9);
        }

        100% {
            opacity: 0;
            transform: translate3d(-2000px, 0, 0) scaleX(2);
        }
    `,
    bounceOutRight: keyframes`
        20% {
            opacity: 1;
            transform: translate3d(-20px, 0, 0) scaleX(0.9);
        }

        100% {
            opacity: 0;
            transform: translate3d(2000px, 0, 0) scaleX(2);
        }
    `,
    bounceOutUp: keyframes`
        20% {
            transform: translate3d(0, -10px, 0) scaleY(0.985);
        }

        40%, 45% {
            opacity: 1;
            transform: translate3d(0, 20px, 0) scaleY(0.9);
        }

        100% {
            opacity: 0;
            transform: translate3d(0, -2000px, 0) scaleY(3);
        }
    `,
    fadeIn: keyframes`
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    `,
    fadeInDown: keyframes`
        0% {
            opacity: 0;
            transform: translate3d(0, -100%, 0);
        }

        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    `,
    fadeInDownBig: keyframes`
        0% {
            opacity: 0;
            transform: translate3d(0, -2000px, 0);
        }

        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    `,
    fadeInLeft: keyframes`
        0% {
            opacity: 0;
            transform: translate3d(-100%, 0, 0);
        }

        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    `,
    fadeInLeftBig: keyframes`
        0% {
            opacity: 0;
            transform: translate3d(-2000px, 0, 0);
        }

        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    `,
    fadeInRight: keyframes`
        0% {
            opacity: 0;
            transform: translate3d(100%, 0, 0);
        }

        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    `,
    fadeInRightBig: keyframes`
        0% {
            opacity: 0;
            transform: translate3d(2000px, 0, 0);
        }

        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    `,
    fadeInUp: keyframes`
        0% {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }

        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    `,
    fadeInUpBig: keyframes`
        0% {
            opacity: 0;
            transform: translate3d(0, 2000px, 0);
        }

        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    `,
    fadeInTopLeft: keyframes`
        0% {
            opacity: 0;
            transform: translate3d(-100%, -100%, 0);
        }
        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    `,
    fadeInTopRight: keyframes`
        0% {
            opacity: 0;
            transform: translate3d(100%, -100%, 0);
        }
        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    `,
    fadeInBottomLeft: keyframes`
        0% {
            opacity: 0;
            transform: translate3d(-100%, 100%, 0);
        }
        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    `,
    fadeInBottomRight: keyframes`
        0% {
            opacity: 0;
            transform: translate3d(100%, 100%, 0);
        }
        100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    `,
    fadeOut: keyframes`
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    `,
    fadeOutDown: keyframes`
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
    `,
    fadeOutDownBig: keyframes`
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
            transform: translate3d(0, 2000px, 0);
        }
    `,
    fadeOutLeft: keyframes`
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translate3d(-100%, 0, 0);
        }
    `,
    fadeOutLeftBig: keyframes`
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
            transform: translate3d(-2000px, 0, 0);
        }
    `,
    fadeOutRight: keyframes`
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
            transform: translate3d(100%, 0, 0);
        }
    `,
    fadeOutRightBig: keyframes`
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
            transform: translate3d(2000px, 0, 0);
        }
    `,
    fadeOutUp: keyframes`
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
            transform: translate3d(0, -100%, 0);
        }
    `,
    fadeOutUpBig: keyframes`
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
            transform: translate3d(0, -2000px, 0);
        }
    `,
    fadeOutTopLeft: keyframes`
        0% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
        100% {
            opacity: 0;
            transform: translate3d(-100%, -100%, 0);
        }
    `,
    fadeOutTopRight: keyframes`
        0% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
        100% {
            opacity: 0;
            transform: translate3d(100%, -100%, 0);
        }
    `,
    fadeOutBottomRight: keyframes`
        0% {
            opacity: 1;
            transform: translateZ(0);
        }

        100% {
            opacity: 0;
            transform: translate3d(100%, 100%, 0);
        }
    `,
    fadeOutBottomLeft: keyframes`
        0% {
            opacity: 1;
            transform: translateZ(0);
        }

        100% {
            opacity: 0;
            transform: translate3d(-100%, 100%, 0);
        }
    `,
    flip: keyframes`
        0% {
            transform: perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);
            animation-timing-function: ease-out;
        }

        40% {
            transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);
            animation-timing-function: ease-out;
        }
        50% {
            transform: perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);
            animation-timing-function: ease-in;
        }
        80% {
            transform: perspective(400px) scale3d(.95, .95, .95) translateZ(0) rotateY(0deg);
            animation-timing-function: ease-in;
        }
        100% {
            transform: perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);
            animation-timing-function: ease-in;
        }
    `,
    flipInX: keyframes`
        0% {
            transform: perspective(400px) rotateX(90deg);
            animation-timing-function: ease-in;
            opacity: 0;
        }
        40% {
            transform: perspective(400px) rotateX(-20deg);
            animation-timing-function: ease-in;
        }
        60% {
            transform: perspective(400px) rotateX(10deg);
            opacity: 1;
        }
        80% {
            transform: perspective(400px) rotateX(-5deg);
        }
        100% {
            transform: perspective(400px);
        }
    `,
    flipInY: keyframes`
        0% {
            transform: perspective(400px) rotateY(90deg);
            animation-timing-function: ease-in;
            opacity: 0;
        }
        40% {
            transform: perspective(400px) rotateY(-20deg);
            animation-timing-function: ease-in;
        }
        60% {
            transform: perspective(400px) rotateY(10deg);
            opacity: 1;
        }
        80% {
            transform: perspective(400px) rotateY(-5deg);
        }
        100% {
            transform: perspective(400px);
        }
    `,
    flipOutX: keyframes`
        0% {
            transform: perspective(400px);
        }

        30% {
            transform: perspective(400px) rotateX(-20deg);
            opacity: 1;
        }
        100% {
            transform: perspective(400px) rotateX(90deg);
            opacity: 0;
        }
    `,
    flipOutY: keyframes`
        0% {
            transform: perspective(400px);
        }

        30% {
            transform: perspective(400px) rotateY(-15deg);
            opacity: 1;
        }
        100% {
            transform: perspective(400px) rotateY(90deg);
            opacity: 0;
        }
    `,
    lightSpeedInRight: keyframes`
        0% {
            transform: translate3d(100%, 0, 0) skewX(-30deg);
            opacity: 0;
        }

        60% {
            transform: skewX(20deg);
            opacity: 1;
        }
        80% {
            transform: skewX(-5deg);
        }
        100% {
            transform: translateZ(0);
        }
    `,
    lightSpeedInLeft: keyframes`
        0% {
            transform: translate3d(-100%, 0, 0) skewX(30deg);
            opacity: 0;
        }

        60% {
            transform: skewX(-20deg);
            opacity: 1;
        }
        80% {
            transform: skewX(5deg);
        }
        100% {
            transform: translateZ(0);
        }
    `,
    lightSpeedOutRight: keyframes`
        0% {
            opacity: 1;
        }

        100% {
            transform: translate3d(100%, 0, 0) skewX(30deg);
            opacity: 0;
        }
    `,
    lightSpeedOutLeft: keyframes`
        0% {
            opacity: 1;
        }

        100% {
            transform: translate3d(-100%, 0, 0) skewX(-30deg);
            opacity: 0;
        }
    `,
    rotateIn: keyframes`
        0% {
            transform: rotate(-200deg);
            opacity: 0;
        }

        100% {
            transform: translateZ(0);
            opacity: 1;
        }
    `,
    rotateInDownLeft: keyframes`
        0% {
            transform: rotate(-45deg);
            opacity: 0;
        }

        100% {
            transform: translateZ(0);
            opacity: 1;
        }
    `,
    rotateInDownRight: keyframes`
        0% {
            transform: rotate(45deg);
            opacity: 0;
        }

        100% {
            transform: translateZ(0);
            opacity: 1;
        }
    `,
    rotateInUpLeft: keyframes`
        0% {
            -webkit-transform: rotate3d(0, 0, 1, 45deg);
            transform: rotate3d(0, 0, 1, 45deg);
            opacity: 0;
        }

        100% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
            opacity: 1;
        }
    `,
    rotateInUpRight: keyframes`
        0% {
            transform: rotate(-90deg);
            opacity: 0;
        }

        100% {
            transform: translateZ(0);
            opacity: 1;
        }
    `,
    rotateOut: keyframes`
        0% {
            opacity: 1;
        }
        100% {
            transform: rotate(200deg);
            opacity: 0;
        }
    `,
    rotateOutDownLeft: keyframes`
        0% {
            opacity: 1;
        }

        100% {
            transform: rotate(45deg);
            opacity: 0;
        }
    `,
    rotateOutDownRight: keyframes`
        0% {
            opacity: 1;
        }

        100% {
            transform: rotate(-45deg);
            opacity: 0;
        }
    `,
    rotateOutUpLeft: keyframes`
        from {
            opacity: 1;
        }

        to {
            transform: rotate3d(0, 0, 1, -45deg);
            opacity: 0;
        }
    `,
    rotateOutUpRight: keyframes`
        0% {
            opacity: 1;
        }

        100% {
            transform: rotate(90deg);
            opacity: 0;
        }
    `,
    hinge: keyframes`
        0% {
            animation-timing-function: ease-in-out;
        }
        20%, 60% {
            transform: rotate(80deg);
            animation-timing-function: ease-in-out;
        }
        40%, 80% {
            transform: rotate(60deg);
            animation-timing-function: ease-in-out;
            opacity: 1;
        }
        100% {
            transform: translate3d(0, 700px, 0);
            opacity: 0;
        }
    `,
    jackInTheBox: keyframes`
        0% {
            opacity: 0;
            transform: scale(.1) rotate(30deg);
            transform-origin: center bottom;
        }
        50% {
            transform: rotate(-10deg);
        }
        70% {
            transform: rotate(3deg);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    `,
    rollIn: keyframes`
        0% {
            opacity: 0;
            transform: translate3d(-100%, 0, 0) rotate(-120deg);
        }

        100% {
            opacity: 1;
            transform: translateZ(0);
        }
    `,
    rollOut: keyframes`
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
            transform: translate3d(100%, 0, 0) rotate(120deg);
        }
    `,
    zoomIn: keyframes`
        0% {
            opacity: 0;
            transform: scale3d(.3, .3, .3);
        }

        50% {
            opacity: 1;
        }
    `,
    zoomInDown: keyframes`
        0% {
            opacity: 0;
            transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
            animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        }
        60% {
            opacity: 1;
            transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
            animation-timing-function: cubic-bezier(.175,.885,.32,1);
        }
    `,
    zoomInLeft: keyframes`
        0% {
            opacity: 0;
            transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
            animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        }

        60% {
            opacity: 1;
            transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
            animation-timing-function: cubic-bezier(.175,.885,.32,1);
        }
    `,
    zoomInRight: keyframes`
        0% {
            opacity: 0;
            transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
            animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        }
        60% {
            opacity: 1;
            transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
            animation-timing-function: cubic-bezier(.175,.885,.32,1);
        }
    `,
    zoomInUp: keyframes`
        0% {
            opacity: 0;
            transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
            animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        }
        60% {
            opacity: 1;
            transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
            animation-timing-function: cubic-bezier(.175,.885,.32,1);
        }
    `,
    zoomOut: keyframes`
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
            transform: scale3d(.3, .3, .3);
        }
        100% {
            opacity: 0;
        }
    `,
    zoomOutDown: keyframes`
        40% {
            opacity: 1;
            transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
            animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        }
        100% {
            opacity: 0;
            transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
            animation-timing-function: cubic-bezier(.175,.885,.32,1);
        }
    `,
    zoomOutLeft: keyframes`
        40% {
            opacity: 1;
            transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
        }
        100% {
            opacity: 0;
            transform: scale(.1) translate3d(-2000px, 0, 0);
        }
    `,
    zoomOutRight: keyframes`
        40% {
            opacity: 1;
            transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
        }
        100% {
            opacity: 0;
            transform: scale(.1) translate3d(2000px, 0, 0);
        }
    `,
    zoomOutUp: keyframes`
        40% {
            opacity: 1;
            transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
            animation-timing-function: cubic-bezier(.55,.055,.675,.19);
        }
        100% {
            opacity: 0;
            transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
            animation-timing-function: cubic-bezier(.175,.885,.32,1);
        }
    `,
    slideInDown: keyframes`
        0% {
            transform: translate3d(0, -100%, 0);
            visibility: visible;
        }

        100% {
            transform: translateZ(0);
        }
    `,
    slideInLeft: keyframes`
        0% {
            transform: translate3d(-100%, 0, 0);
            visibility: visible;
        }

        100% {
            transform: translateZ(0);
        }
    `,
    slideInRight: keyframes`
        0% {
            transform: translate3d(100%, 0, 0);
            visibility: visible;
        }

        100% {
            transform: translateZ(0);
        }
    `,
    slideInUp: keyframes`
        0% {
            transform: translate3d(0, 100%, 0);
            visibility: visible;
        }
        100% {
            transform: translateZ(0);
        }
    `,
    slideOutDown: keyframes`
        0% {
            transform: translateZ(0);
        }
        100% {
            visibility: hidden;
            transform: translate3d(0, 100%, 0);
        }
    `,
    slideOutLeft: keyframes`
        0% {
            transform: translateZ(0);
        }
        100% {
            visibility: hidden;
            transform: translate3d(-100%, 0, 0);
        }
    `,
    slideOutRight: keyframes`
        0% {
            transform: translateZ(0);
        }
        100% {
            visibility: hidden;
            transform: translate3d(100%, 0, 0);
        }
    `,
    slideOutUp: keyframes`
        0% {
            transform: translateZ(0);
        }
        100% {
            visibility: hidden;
            transform: translate3d(0, -100%, 0);
        }
    `,
};
