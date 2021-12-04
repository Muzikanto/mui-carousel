import React from 'react';
export declare type CarouselSettings = {
    spacing?: number;
    showSlides?: number;
    speed?: number;
    autoPlay?: boolean;
    pauseOnHover?: boolean;
    duplicates?: number;
    transitionDuration?: number;
    disableTransition?: boolean;
    value?: number;
    onChange?: (slide: number, slideNormal: number) => void;
};
declare function useCarousel(rows: React.ReactNode[], props: CarouselSettings): {
    rawSlide: number;
    nextSlide: () => void;
    prevSlide: () => void;
    toSlide: (slide: number) => void;
    containerProps: {
        ref: (element: (SVGElement | HTMLElement) | null) => void;
        onMouseLeave: () => void;
        onMouseEnter: () => void;
        'data-current': number;
        'data-center': number;
        'data-from': number;
        'data-to': number;
        'data-loop': number;
        className: string;
    };
    itemProps: (i: number) => {
        className: string;
        style: {
            width: number;
            marginRight: number;
            transform: string;
            transition: string | undefined;
        };
        'data-item': number;
        'data-hidden': number;
        children: React.ReactNode;
    };
    renderItem: (i: number) => JSX.Element;
    hiddenPrevArrow: boolean;
    hiddenNextArrow: boolean;
};
export default useCarousel;
