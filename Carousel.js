"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carouselClasses = void 0;
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const hook_1 = __importDefault(require("./hook"));
const PREFIX = "Carousel";
exports.carouselClasses = {
    root: `${PREFIX}-root`,
    rootWithDots: `${PREFIX}-rootWithDots`,
    content: `${PREFIX}-content`,
    list: `${PREFIX}-list`,
    item: `${PREFIX}-item`,
    current: `${PREFIX}-current`,
    center: `${PREFIX}-center`,
    hidden: `${PREFIX}-hidden`,
    arrow: `${PREFIX}-arrow`,
    arrowHidden: `${PREFIX}-arrowHidden`,
    dots: `${PREFIX}-dots`,
    dot: `${PREFIX}-dot`,
};
const sxStyles = {
    [`&.${exports.carouselClasses.root}`]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: 'border-box',
        [`& .${exports.carouselClasses.content}`]: {
            width: "100%",
            display: "flex",
            alignItems: "center",
        },
        [`& .${exports.carouselClasses.list}`]: {
            width: "100%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            [`& .${exports.carouselClasses.item}`]: {
                display: "inline-block",
                "&:last-child": {
                    marginRight: 0,
                },
                [`&.${exports.carouselClasses.hidden}`]: {
                    opacity: 0,
                    visibility: "hidden",
                },
                [`&.${exports.carouselClasses.center}`]: {},
            },
        },
        [`& .${exports.carouselClasses.dots}`]: {
            marginTop: 3,
        },
    },
};
function Carousel(_a) {
    var { children, className, sx = {}, renderNext, renderPrev, arrows = true, renderDot, dots = true, showSlides = 3, onChange } = _a, props = __rest(_a, ["children", "className", "sx", "renderNext", "renderPrev", "arrows", "renderDot", "dots", "showSlides", "onChange"]);
    //props.infinity
    const duplicates = props.duplicates || (false ? 2 : 1);
    const rows = react_1.default.Children.toArray(children);
    const size = rows.length * duplicates;
    const carousel = (0, hook_1.default)(rows, Object.assign(Object.assign({}, props), { showSlides,
        onChange }));
    let next = null;
    let prev = null;
    if (renderNext && arrows) {
        next = renderNext({
            disabled: carousel.hiddenNextArrow,
        });
        next = react_1.default.cloneElement(next, Object.assign(Object.assign({}, next.props), { onClick: carousel.nextSlide, className: (0, clsx_1.default)(exports.carouselClasses.arrow, exports.carouselClasses.arrowHidden, next.props.className) }));
    }
    if (renderPrev && arrows) {
        prev = renderPrev({
            disabled: carousel.hiddenPrevArrow,
        });
        prev = react_1.default.cloneElement(prev, Object.assign(Object.assign({}, prev.props), { onClick: carousel.prevSlide, className: (0, clsx_1.default)(exports.carouselClasses.arrow, exports.carouselClasses.arrowHidden, prev.props.className) }));
    }
    const getDot = (i) => {
        let el = null;
        if (renderDot && dots) {
            el = renderDot({
                current: i === carousel.rawSlide,
                index: i,
            });
            el = react_1.default.cloneElement(el, Object.assign(Object.assign({}, el.props), { onClick: () => carousel.toSlide(i), className: (0, clsx_1.default)(exports.carouselClasses.dot, el.props.className), "data-slide": i }));
        }
        return el;
    };
    return (react_1.default.createElement(Box_1.default, Object.assign({}, props, { className: (0, clsx_1.default)(exports.carouselClasses.root, className), sx: Object.assign(Object.assign({}, sxStyles), sx) }),
        react_1.default.createElement(Box_1.default, { className: exports.carouselClasses.content },
            prev,
            react_1.default.createElement(Box_1.default, Object.assign({}, carousel.containerProps), new Array(size).fill(0).map((_, i) => {
                return carousel.renderItem(i);
            })),
            next),
        dots && renderDot && (react_1.default.createElement(Box_1.default, { className: exports.carouselClasses.dots }, new Array(rows.length - (showSlides - 1)).fill(0).map((_, i) => (react_1.default.createElement(react_1.default.Fragment, { key: `carousel-dot-${i}` }, getDot(i))))))));
}
exports.default = Carousel;
