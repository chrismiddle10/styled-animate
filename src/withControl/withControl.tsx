import React from 'react';
import { convertAnimations } from '../func';
import { ControlProps, ControlRef } from './withControl.type';

export function withControl<CmpProps>( Cmp: React.ComponentType<CmpProps & ControlProps> ) {
    return React.forwardRef<ControlRef, CmpProps & ControlProps & React.HTMLProps<HTMLElement>>( ( props, forwarded ) => {
        const {
            $animate,
            onAnimationEnd,
        } = props;

        const [index, setIndex] = React.useState( -1 );
        const element = React.useRef<HTMLElement>();
        const animate = convertAnimations( $animate );

        React.useImperativeHandle( forwarded, () => {
            return {
                element: element.current,
                start: () => setIndex( 0 ),
                stop: () => setIndex( -1 ),
            };
        }, [element] );

        return (
            <Cmp
                ref={element}
                {...props}
                $animate={animate[index]}
                onAnimationEnd={( event: React.AnimationEvent<HTMLElement> ) => {
                    onAnimationEnd?.( event );

                    if( animate[index + 1] ) {
                        setIndex( index + 1 );
                    } else if( animate[index].repeat === true ) {
                        setIndex( 0 );
                    }
                }}
            />
        );
    } );
}
