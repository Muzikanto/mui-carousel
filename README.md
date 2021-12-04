<h1 align="center">Mui Carousel</h1>

<div align="center">

[![npm version](https://badge.fury.io/js/mui-carousel.svg)](https://badge.fury.io/js/mui-carousel)
[![downloads](https://img.shields.io/npm/dm/mui-carousel.svg)](https://www.npmjs.com/package/mui-carousel)
[![size](https://img.shields.io/bundlephobia/minzip/mui-carousel)](https://bundlephobia.com/result?p=mui-carousel)
[![Coverage Status](https://img.shields.io/codecov/c/github/muzikanto/mui-carousel/master.svg)](https://codecov.io/gh/muzikanto/mui-carousel/branch/master)
[![dependencies Status](https://david-dm.org/mui-carousel/status.svg)](https://david-dm.org/mui-carousel)
[![type](https://badgen.net/npm/types/mui-carousel)](https://badgen.net/npm/types/mui-carousel)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/muzikanto/mui-carousel/blob/master/LICENSE)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

</div>

### Demo
[https://muzikanto.github.io/mui-carousel/](https://muzikanto.github.io/mui-carousel/)

### Example

```tsx
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import Carousel from "mui-carousel";

function Page() {
  return (
    <Carousel
      renderPrev={({ disabled }) => <Button disabled={disabled}>Prev</Button>}
      renderNext={({ disabled }) => <Button disabled={disabled}>Next</Button>}
      renderDot={({ current }) => (
        <Button variant={current ? "contained" : "outlined"} />
      )}
      dots={true}
      showSlides={3}
      speed={1000 * 1}
      spacing={5}
      autoPlay={false}
      // infinity={true} next feature
      // value={slide}
      // onChange={(rawSlide, slide) => console.log("slide", slide)}
      pauseOnHover
      centerMode
      transitionDuration={1000}
      disableTransition={false}
      sx={{
        "& .Carousel-item > *": {
          transition: "all 0.5s",
        },
        "& .Carousel-item.Carousel-center > *": {
          transform: "scale(1.2)",
        },
      }}
    >
      {new Array(5).fill(0).map((_, i) => (
        <Paper key={`item-${i}`} sx={{ height: 200, m: 3 }}>
          Item: {i}
        </Paper>
      ))}
    </Carousel>
  );
}
```
