import React from 'react';
import { convertAnimations, convertReveal } from '../func';
import { RevealProps } from './withReveal.type';

export function withReveal<CmpProps>( Cmp: React.ComponentType<CmpProps & RevealProps> ) {
    return React.forwardRef<HTMLElement, Omit<CmpProps, '$animate' | '$reveal'> & RevealProps & React.HTMLProps<HTMLElement>>( ( props, forwarded ) => {
        const {
            $animate,
            $reveal,
            onAnimationEnd,
        } = props;

        const [index, setIndex] = React.useState( -1 );
        const animate = convertAnimations( $animate );
        const reveal = convertReveal( $reveal );

        React.useEffect( () => {
            const observer = new IntersectionObserver( ( [entry], observer ) => {
                if( entry.isIntersecting ) {
                    observer.unobserve( element );
                    setIndex( 0 );
                }
            }, {
                root: reveal?.scroller,
                [typeof reveal?.offset === 'string' ? 'rootMargin' : 'threshold']: reveal?.offset,
            } );

            const element = reveal?.element as HTMLElement;
            if( element ) {
                observer.observe( element );
            }

            return () => {
                if( element ) {
                    observer.unobserve( element );
                    observer.disconnect();
                }
            };
        }, [reveal?.element] );

        return (
            <Cmp
                ref={forwarded}
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
