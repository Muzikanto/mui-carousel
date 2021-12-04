"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_use_measure_1 = __importDefault(require("react-use-measure"));
const clsx_1 = __importDefault(require("clsx"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Carousel_1 = require("./Carousel");
function useCarousel(rows, props) {
    const { showSlides = 1, speed = 3000, spacing = 0, autoPlay = false, value, onChange, pauseOnHover = false, duplicates: rawDuplicates, transitionDuration = 3000, disableTransition = false, } = props;
    const infinity = false;
    const duplicates = rawDuplicates || (infinity ? 2 : 1);
    const size = rows.length * duplicates;
    const [containerRef, containerBounds] = (0, react_use_measure_1.default)();
    const [state, setState] = react_1.default.useState(0);
    const [hovered, setHovered] = react_1.default.useState(false);
    const [isRight, setIsRight] = react_1.default.useState(true);
    const [trottleSwipe, setTrottleSwipe] = react_1.default.useState(false);
    const timeoutRef = react_1.default.useRef(null);
    const slide = state;
    const slideNormal = (1000 * size + slide) % size;
    const loop = Math.ceil((slide + 1) / size) - 1;
    const visibleFrom = (size * 1000 + slide) % size;
    const visibleTo = (size * 1000 + slide + showSlides - 1) % size;
    const centerIndex = (size * 1000 + Math.floor(showSlides / 2) + (slide % size)) % size;
    const checkIsHidden = (i) => {
        if (disableTransition) {
            if (showSlides === 1) {
                return i !== visibleFrom;
            }
            else {
                return visibleTo > visibleFrom;
            }
        }
        else {
            if (showSlides === 1) {
                if (slideNormal === size - 1 && i === 0) {
                    return false;
                }
                return (i !== visibleFrom &&
                    i !== visibleFrom + (1 % size) &&
                    i !== (visibleFrom - 1 + size * 999999) % size &&
                    i !== visibleFrom + (1 % size) &&
                    i !== (visibleFrom - 1 + size * 999999) % size);
            }
            if (visibleTo > visibleFrom) {
                if (i === size - 1 && visibleFrom === 0) {
                    return false;
                }
                if (i === 0 && visibleFrom === size - showSlides) {
                    return false;
                }
                return i < visibleFrom - 1 || i > visibleTo + 1;
            }
            if (visibleTo < visibleFrom) {
                return i < visibleFrom - 1 && i > visibleTo + 1;
            }
        }
        return false;
    };
    const spacingPx = spacing * 8;
    const itemWidth = Math.round(containerBounds.width / showSlides - ((showSlides - 1) * spacingPx) / showSlides);
    react_1.default.useEffect(() => {
        if (autoPlay && (pauseOnHover ? !hovered : true)) {
            const interval = setInterval(() => {
                let right = isRight;
                if (!infinity) {
                    if (isRight && slide + 1 === size) {
                        setIsRight(false);
                        right = false;
                    }
                    if (!isRight && slide - 1 < 0) {
                        setIsRight(true);
                        right = true;
                    }
                }
                const nextSlide = slide + (right ? 1 : -1);
                if (onChange) {
                    onChange(nextSlide, slideNormal);
                }
                else {
                    setState(nextSlide);
                }
            }, speed);
            return () => {
                clearInterval(interval);
            };
        }
        return () => { };
    }, [slide, size, autoPlay, hovered, pauseOnHover, infinity]);
    react_1.default.useEffect(() => {
        if (typeof value !== 'undefined') {
            setState(value);
        }
    }, [value, transitionDuration]);
    react_1.default.useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);
    const onMouseLeave = () => setHovered(false);
    const onMouseEnter = () => setHovered(true);
    const itemProps = (i) => {
        const index = i % (size / duplicates);
        const item = rows[index];
        let slideTr = -slide + size * loop;
        let isHidden = infinity && checkIsHidden(i);
        if (infinity) {
            const isLeft = i >= size + showSlides - Math.ceil(size / 2);
            // const isLeftOld = i >= size - Math.ceil(showSlides / 2);
            // console.log(i, isLeft);
            //
            // if (slideNormal < Math.ceil(showSlides / 2) && isLeftOld) {
            if (slideNormal <= Math.floor(size / 2) && isLeft) {
                slideTr -= size;
            }
            else if (i + 2 < slideNormal) {
                slideTr += size;
            }
            else if (slideNormal < 0 && i < 2) {
                slideTr += size;
            }
        }
        return {
            className: (0, clsx_1.default)(Carousel_1.carouselClasses.item, {
                [Carousel_1.carouselClasses.current]: i === slide,
                [Carousel_1.carouselClasses.center]: centerIndex === i,
                [Carousel_1.carouselClasses.hidden]: isHidden,
            }),
            style: {
                width: itemWidth,
                marginRight: spacingPx,
                transform: `translateX(calc(${100 * slideTr}% + (${spacingPx}px * ${slideTr})))`,
                transition: !disableTransition ? `transform ${transitionDuration / 1000}s` : undefined,
            },
            'data-item': i,
            'data-hidden': isHidden ? 1 : 0,
            children: item,
        };
    };
    const containerProps = {
        ref: containerRef,
        onMouseLeave,
        onMouseEnter,
        'data-current': slideNormal,
        'data-center': centerIndex,
        'data-from': visibleFrom,
        'data-to': visibleTo,
        'data-loop': loop,
        className: Carousel_1.carouselClasses.list,
    };
    const toSlide = (slide) => {
        if (!trottleSwipe) {
            const next = slide;
            if (!infinity) {
                if (next < 0 || next > rows.length - showSlides) {
                    return;
                }
            }
            setState(next);
            setTrottleSwipe(true);
            stop();
            timeoutRef.current = setTimeout(() => setTrottleSwipe(false), transitionDuration);
        }
    };
    const nextSlide = () => {
        toSlide(state + 1);
    };
    const prevSlide = () => {
        toSlide(state - 1);
    };
    return {
        rawSlide: state,
        // slide: state,
        nextSlide,
        prevSlide,
        toSlide,
        containerProps,
        itemProps,
        renderItem: (i) => {
            const itemPr = itemProps(i);
            return react_1.default.createElement(Box_1.default, Object.assign({ key: `item-${i}` }, itemPr));
        },
        hiddenPrevArrow: !infinity && state - 1 < 0,
        hiddenNextArrow: !infinity && state + 1 > rows.length - showSlides,
    };
}
exports.default = useCarousel;
