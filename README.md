# styled-animate

> This library provides an implementation of [Animate.css](https://animate.style/) and [Wow.js](https://wowjs.uk/) for ReactJS & styled-components.
> It is not at 100% parity with the aforementioned projects. It is, however, very close and does provide some additional features as well.

## Examples

### Animate

This is a mixin that, when used alone, triggers its configured animation immediately.

```jsx
import styled from 'styled-components';
import { Animate } from 'styled-animate';

const Animated = styled.div`
    ${Animate}
`;

export function Component( props: unknown ) {
    const controlled = React.useRef();

    return (
        <Animated
            $animate={{
                name: 'jello',
                delay: 0,
                duration: 1000,
                iterations: 'infinite',
            }}
        />
    );
}
```

### withControl

This is a higher-order component that allows for starting & stopping its configured animations on-demand.

```jsx
import styled from 'styled-components';
import { Animate, withControl } from 'styled-animate';

const Controlled = withControl(
    styled.div`
        ${Animate}
    `
);

export function Component( props: unknown ) {
    const controlled = React.useRef();

    return (
        <Controlled
            ref={controlled}
            $animate={{
                name: 'rubberBand',
                iterations: 'infinite',
            }}
            onMouseOver={() => {
                controlled.current.start();
            }}
            onMouseOut={() => {
                controlled.current.stop();
            }}
        />
    );
}
```

### withReveal

This is a higher-order component that waits for starting its configured animations until the element is made visible within the viewport.

````jsx
import styled from 'styled-components';
import { Animate, withReveal } from 'styled-animate';

const Revealed = withReveal(
    styled.div`
        ${Animate}
    `
);

export function Component( props: unknown ) {
    const [element, setElement] = React.useState<HTMLElement>();

    return (
        <Revealed
            ref={setElement}
            $animate={[
                'fadeIn',
                'flip',
                'wobble',
                'lightSpeedOutLeft',
            ]}
            $reveal={{
                element,
                offset: 0.5,
            }}
        />
    );
}
````

## Authors

* **Chris Middleton**

## License

[MIT License](./LICENSE) © Chris Middleton

[Animate CSS](https://github.com/animate-css/animate.css/blob/main/LICENSE)