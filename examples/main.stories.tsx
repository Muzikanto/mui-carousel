import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import Carousel, { carouselClasses } from "../src";

export default {
  title: "Examples",
};

function getCommonProps() {
  return {
    renderPrev: (btnProps: any) => (
      <Button variant="contained" {...btnProps}>
        Prev
      </Button>
    ),
    renderNext: (btnProps: any) => (
      <Button variant="contained" {...btnProps}>
        Next
      </Button>
    ),
    renderDot: ({ selected, index }: any) => (
      <Button variant={selected ? "contained" : "outlined"}>{index}</Button>
    ),
    dots: true,
    showSlides: 3,
    speed: 1000 * 1,
    spacing: 2,
    autoPlay: false,
    infinity: false,
    pauseOnHover: true,
    disableTransition: false,
    sx: {},
  };
}

export function CenterAutoplay() {
  return (
    <Box sx={{ p: 5, width: "100%", boxSizing: "border-box" }}>
      <Carousel
        {...getCommonProps()}
        sx={{
          mt: 3,
          [`& .${carouselClasses.dots}`]: {
            mt: 5,
          },
          [`& .${carouselClasses.item} > *`]: {
            transition: "all 0.5s",
          },
          [`& .${carouselClasses.center} > *`]: {
            transform: "scale(1.2)",
          },
        }}
        spacing={4}
        autoPlay
        centerMode
      >
        {new Array(5).fill(0).map((_, i) => (
          <Paper key={`item-${i}`} sx={{ height: 200, background: "#fafafa" }}>
            Item: {i}
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}

export function Center() {
  return (
    <Box sx={{ p: 5, width: "100%", boxSizing: "border-box" }}>
      <Carousel
        {...getCommonProps()}
        sx={{
          mt: 3,
          [`& .${carouselClasses.dots}`]: {
            mt: 5,
          },
          [`& .${carouselClasses.item} > *`]: {
            transition: "all 0.5s",
          },
          [`& .${carouselClasses.center} > *`]: {
            transform: "scale(1.2)",
          },
        }}
        spacing={4}
        autoPlay={false}
        centerMode
      >
        {new Array(5).fill(0).map((_, i) => (
          <Paper key={`item-${i}`} sx={{ height: 200, background: "#fafafa" }}>
            Item: {i}
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}

export function Single() {
  return (
    <Box sx={{ p: 5, width: "100%", boxSizing: "border-box" }}>
      <Carousel {...getCommonProps()} showSlides={1}>
        {new Array(5).fill(0).map((_, i) => (
          <Paper key={`item-${i}`} sx={{ height: 200, background: "#fafafa" }}>
            Item: {i}
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}

export function NoCenter() {
  return (
    <Box sx={{ p: 5, width: "100%", boxSizing: "border-box" }}>
      <Carousel
        {...getCommonProps()}
        autoPlay={false}
        dots={true}
        spacing={5}
        speed={1000}
        // value={4}
        arrows={false}
        sx={{
          [`& .${carouselClasses.dots}`]: {
            mt: 5,
          },
          [`& .${carouselClasses.list}`]: {
            mx: 3,
          },
          [`& .${carouselClasses.item} > *`]: {
            transition: "transform 1s",
          },
          [`& .${carouselClasses.current} > *`]: {
            transform: "scale(1.2)",
          },
        }}
      >
        {new Array(5).fill(0).map((_, i) => (
          <Paper key={`item-${i}`} sx={{ height: 200, background: "#fafafa" }}>
            Item: {i}
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}

export function NoCenterAutoplay() {
  return (
    <Box sx={{ p: 5, width: "100%", boxSizing: "border-box" }}>
      <Carousel
        {...getCommonProps()}
        autoPlay
        dots={true}
        spacing={5}
        speed={1000}
        // value={4}
        arrows={false}
        sx={{
          [`& .${carouselClasses.dots}`]: {
            mt: 5,
          },
          [`& .${carouselClasses.list}`]: {
            mx: 3,
          },
          [`& .${carouselClasses.item} > *`]: {
            transition: "transform 1s",
          },
          [`& .${carouselClasses.current} > *`]: {
            transform: "scale(1.2)",
          },
        }}
      >
        {new Array(5).fill(0).map((_, i) => (
          <Paper key={`item-${i}`} sx={{ height: 200, background: "#fafafa" }}>
            Item: {i}
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}

export function NoCenterInfinity() {
  return (
    <Box sx={{ p: 5, width: "100%", boxSizing: "border-box" }}>
      <Carousel
        {...getCommonProps()}
        sx={{
          mt: 3,
          [`& .${carouselClasses.dots}`]: {
            mt: 5,
          },
          [`& .${carouselClasses.item} > *`]: {
            transition: "all 0.5s",
          },
          [`& .${carouselClasses.center} > *`]: {
            transform: "scale(1.2)",
          },
        }}
        dots={true}
        spacing={4}
        autoPlay
        infinity
      >
        {new Array(3).fill(0).map((_, i) => (
          <Paper
            key={`item-${i}`}
            sx={{ height: 200, background: "#fafafa", m: 3 }}
          >
            Item: {i}
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}

export function Infinity() {
  return (
    <Box sx={{ p: 5, width: "100%", boxSizing: "border-box" }}>
      <Carousel
        {...getCommonProps()}
        sx={{
          mt: 3,
          [`& .${carouselClasses.dots}`]: {
            mt: 5,
          },
          [`& .${carouselClasses.item} > *`]: {
            transition: "all 0.5s",
          },
          [`& .${carouselClasses.center} > *`]: {
            transform: "scale(1.2)",
          },
        }}
        dots={false}
        spacing={4}
        autoPlay
        infinity
        centerMode
      >
        {new Array(3).fill(0).map((_, i) => (
          <Paper
            key={`item-${i}`}
            sx={{ height: 200, background: "#fafafa", m: 3 }}
          >
            Item: {i}
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}

// export function Fade() {
//   return (
//     <Box sx={{ p: 5, width: "100%", boxSizing: "border-box" }}>
//       <Carousel
//         {...getCommonProps()}
//         showSlides={1}
//         sx={{
//           [`& .${carouselClasses.notVisible}`]: { opacity: 0 },
//           [`& .${carouselClasses.item}`]: { opacity: 1 },
//         }}
//       >
//         {new Array(5).fill(0).map((_, i) => (
//           <Paper
//             key={`item-${i}`}
//             sx={{ height: 200, background: "#fafafa", m: 1 }}
//           >
//             Item: {i}
//           </Paper>
//         ))}
//       </Carousel>
//     </Box>
//   );
// }
