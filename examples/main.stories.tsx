import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import Carousel from "../src";

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
    renderDot: ({ current, index }: any) => (
      <Button variant={current ? "contained" : "outlined"}>{index}</Button>
    ),
    dots: true,
    showSlides: 3,
    speed: 1000 * 1,
    spacing: 2,
    autoPlay: false,
    // infinity={false}
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
          "& .Carousel-item > *": {
            transition: "all 0.5s",
          },
          "& .Carousel-center > *": {
            transform: "scale(1.2)",
          },
        }}
        spacing={5}
        autoPlay
        centerMode
      >
        {new Array(5).fill(0).map((_, i) => (
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

export function Center() {
  return (
    <Box sx={{ p: 5, width: "100%", boxSizing: "border-box" }}>
      <Carousel
        {...getCommonProps()}
        sx={{
          mt: 3,
          "& .Carousel-item > *": {
            transition: "all 0.5s",
          },
          "& .Carousel-center > *": {
            transform: "scale(1.2)",
          },
        }}
        spacing={5}
        autoPlay={false}
        centerMode
      >
        {new Array(5).fill(0).map((_, i) => (
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

export function Single() {
  return (
    <Box sx={{ p: 5, width: "100%", boxSizing: "border-box" }}>
      <Carousel {...getCommonProps()} showSlides={1}>
        {new Array(5).fill(0).map((_, i) => (
          <Paper
            key={`item-${i}`}
            sx={{ height: 200, background: "#fafafa", m: 1 }}
          >
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
          "& .Carousel-item > *": {
            transition: "transform 1s",
          },
          "& .Carousel-current > *": {
            transform: "scale(1.2)",
          },
        }}
      >
        {new Array(5).fill(0).map((_, i) => (
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

export function NoCenterAutoplay() {
  return (
    <Box sx={{ p: 5, width: "100%", boxSizing: "border-box" }}>
      <Carousel
        {...getCommonProps()}
        autoPlay={true}
        dots={true}
        spacing={5}
        speed={1000}
        // value={4}
        arrows={false}
        sx={{
          "& .Carousel-item > *": {
            transition: "transform 1s",
          },
          "& .Carousel-current > *": {
            transform: "scale(1.2)",
          },
        }}
      >
        {new Array(5).fill(0).map((_, i) => (
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
