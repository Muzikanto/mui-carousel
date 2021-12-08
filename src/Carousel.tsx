import React from "react";
import clsx from "clsx";
import Box, { BoxProps } from "@mui/material/Box";
import { Theme } from "@mui/material";
import { SxProps } from "@mui/system";
import useCarousel, { CarouselSettings } from "./hook";

const objectsAssign = (
  one: { [key: string]: any },
  two: { [key: string]: any }
) => {
  const res: { [key: string]: any } = {};

  for (const k in one) {
    res[k] = one[k];
  }
  for (const k in two) {
    if (typeof two[k] === "object") {
      res[k] = objectsAssign(res[k] || {}, two[k]);
    } else {
      res[k] = two[k];
    }
  }

  return res;
};

const PREFIX = "Carousel";
export const carouselClasses = {
  root: `${PREFIX}-root`,
  rootWithDots: `${PREFIX}-rootWithDots`,
  content: `${PREFIX}-content`,
  list: `${PREFIX}-list`,
  item: `${PREFIX}-item`,
  hidden: `${PREFIX}-hidden`,
  notVisible: `${PREFIX}-notVisible`,
  current: `${PREFIX}-current`,
  center: `${PREFIX}-center`,
  arrow: `${PREFIX}-arrow`,
  arrowNext: `${PREFIX}-arrowNext`,
  arrowPrev: `${PREFIX}-arrowPrev`,
  arrowDisabled: `${PREFIX}-arrowDisabled`,
  dots: `${PREFIX}-dots`,
  dot: `${PREFIX}-dot`,
};

const sxStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxSizing: "border-box",

  [`& .${carouselClasses.content}`]: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },

  [`& .${carouselClasses.list}`]: {
    width: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",

    [`& .${carouselClasses.item}`]: {
      display: "inline-block",

      "&:last-child": {
        marginRight: 0,
      },
      [`&.${carouselClasses.hidden}`]: {
        opacity: 0,
        visibility: "hidden",
      },
      [`&.${carouselClasses.center}`]: {},
    },
  },
  [`& .${carouselClasses.dots}`]: {
    marginTop: 3,
  },
};

export type CarouselProps = Omit<BoxProps, keyof CarouselSettings> &
  CarouselSettings & {
    renderNext?: (props: { disabled: boolean }) => JSX.Element;
    renderPrev?: (props: { disabled: boolean }) => JSX.Element;
    arrows?: boolean;
    renderDot?: (props: { index: number; selected: boolean }) => JSX.Element;
    dots?: boolean;
  };

function Carousel({
  children,
  className,
  sx = {},
  renderNext,
  renderPrev,
  arrows: arrowsRaw = true,
  renderDot,
  dots: dotsRaw,
  showSlides = 3,
  onChange,
  ...props
}: CarouselProps) {
  //props.infinity
  const duplicates = props.duplicates || (false ? 2 : 1);

  const rows = React.Children.toArray(children);
  const size = rows.length * duplicates;
  const dots = typeof dotsRaw === "undefined" ? size > showSlides : dotsRaw;
  const arrows = size > showSlides;

  const carousel = useCarousel(rows, {
    ...props,
    showSlides,
    onChange,
  });

  let next: JSX.Element | null = null;
  let prev: JSX.Element | null = null;

  if (renderNext && arrows) {
    next = renderNext({
      disabled: carousel.hiddenNextArrow,
    });
    next = React.cloneElement(next, {
      ...next.props,
      onClick: carousel.nextSlide,
      className: clsx(
        carouselClasses.arrow,
        carouselClasses.arrowDisabled,
        carouselClasses.arrowNext,
        next.props.className
      ),
    });
  }
  if (renderPrev && arrows) {
    prev = renderPrev({
      disabled: carousel.hiddenPrevArrow,
    });
    prev = React.cloneElement(prev, {
      ...prev.props,
      onClick: carousel.prevSlide,
      className: clsx(
        carouselClasses.arrow,
        carouselClasses.arrowDisabled,
        carouselClasses.arrowPrev,
        prev.props.className
      ),
    });
  }
  const getDot = (i: number) => {
    let el: JSX.Element | null = null;

    if (renderDot && dots) {
      const offset = props.centerMode ? Math.floor(showSlides / 2) : 0;

      el = renderDot({
        selected: i === carousel.rawSlide,
        index: i + offset,
      });
      el = React.cloneElement(el, {
        ...el.props,
        onClick: () => carousel.toSlide(i),
        className: clsx(carouselClasses.dot, el.props.className),
        "data-slide": i + offset,
      });
    }

    return el;
  };

  const rootSx = React.useMemo(() => {
    if (!sx) {
      return sxStyles;
    }
    if (typeof sx === "object") {
      return objectsAssign(sxStyles as any, sx);
    }

    return (theme: any) => objectsAssign(sxStyles as any, (sx as any)(theme));
  }, [sx]);
  // console.log(rootSx)
  return (
    <Box
      {...props}
      className={clsx(carouselClasses.root, className)}
      sx={rootSx}
    >
      <Box className={carouselClasses.content}>
        {prev}
        <Box {...carousel.containerProps}>
          {new Array(size).fill(0).map((_, i) => {
            return carousel.renderItem(i);
          })}
        </Box>
        {next}
      </Box>
      {dots && renderDot && (
        <Box className={carouselClasses.dots}>
          {new Array(rows.length - (!props.centerMode ? 0 : showSlides - 1))
            .fill(0)
            .map((_, i) => (
              <React.Fragment key={`carousel-dot-${i}`}>
                {getDot(i)}
              </React.Fragment>
            ))}
        </Box>
      )}
    </Box>
  );
}

export default Carousel;
