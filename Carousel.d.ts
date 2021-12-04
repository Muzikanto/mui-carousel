/// <reference types="react" />
import { BoxProps } from "@mui/material/Box";
import { CarouselSettings } from "./hook";
export declare const carouselClasses: {
    root: string;
    rootWithDots: string;
    content: string;
    list: string;
    item: string;
    current: string;
    center: string;
    hidden: string;
    arrow: string;
    arrowHidden: string;
    dots: string;
    dot: string;
};
export declare type CarouselProps = Omit<BoxProps, keyof CarouselSettings> & CarouselSettings & {
    renderNext?: (props: {
        disabled: boolean;
    }) => JSX.Element;
    renderPrev?: (props: {
        disabled: boolean;
    }) => JSX.Element;
    arrows?: boolean;
    renderDot?: (props: {
        index: number;
        current: boolean;
    }) => JSX.Element;
    dots?: boolean;
};
declare function Carousel({ children, className, sx, renderNext, renderPrev, arrows, renderDot, dots, showSlides, onChange, ...props }: CarouselProps): JSX.Element;
export default Carousel;
