import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import Carousel from "../src";

export default {
  title: "Examples",
};

export function Center() {
  const [slide, setSlide] = React.useState(0);

  return (
    <Box sx={{ p: 5, width: "100%", boxSizing: "border-box" }}>
      <Carousel
        renderPrev={(btnProps) => (
          <Button variant="contained" {...btnProps}>
            Prev
          </Button>
        )}
        renderNext={(btnProps) => (
          <Button variant="contained" {...btnProps}>
            Next
          </Button>
        )}
        renderDot={({ current, index }) => (
          <Button variant={current ? "contained" : "outlined"}>
            {index + 1}
          </Button>
        )}
        dots={true}
        showSlides={3}
        speed={1000 * 0.5}
        spacing={5}
        autoPlay={false}
        // infinity={false}
        value={slide}
        onChange={(v) => setSlide(v)}
        pauseOnHover
        transitionDuration={1000}
        disableTransition={false}
        sx={{
          mt: 3,
          "& .Carousel-item > *": {
            transition: "all 0.5s",
          },
          "& .Carousel-center > *": {
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

export function Single() {
  const [slide, setSlide] = React.useState(0);

  return (
    <Box sx={{ p: 5, width: "100%", boxSizing: "border-box" }}>
      <Carousel
        renderPrev={(btnProps) => (
          <Button variant="contained" {...btnProps}>
            Prev
          </Button>
        )}
        renderNext={(btnProps) => (
          <Button variant="contained" {...btnProps}>
            Next
          </Button>
        )}
        renderDot={({ current, index }) => (
          <Button variant={current ? "contained" : "outlined"}>
            {index + 1}
          </Button>
        )}
        dots={true}
        showSlides={1}
        speed={1000 * 0.5}
        spacing={2}
        autoPlay={false}
        // infinity={true}
        value={slide}
        onChange={(slide, slideNormal) => setSlide(slideNormal)}
        pauseOnHover
        transitionDuration={1000}
        disableTransition={false}
      >
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
