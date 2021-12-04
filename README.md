# Mui Carousel

```tsx
<Carousel
  renderPrev={({ disabled }) => <Button disabled={disabled}>Prev</Button>}
  renderNext={({ disabled }) => <Button disabled={disabled}>Next</Button>}
  renderDot={({ current }) => (
    <Button variant={current ? "contained" : "outlined"} />
  )}
  dots={false}
  showSlides={1}
  speed={(1000 * 1) / 2}
  spacing={2}
  autoPlay={false}
  // infinity={true} next feature
  value={slide}
  onChange={(v) => console.log("slide", v)}
  pauseOnHover
  transitionDuration={1000}
  disableTransition={false}
  sx={{
    "& .Carousel-item > *": {
      transition: "all 0.5s",
    },
    "& .Carousel-center > *": {
      transform: "scale(0.8)",
    },
  }}
>
  {new Array(5).fill(0).map((_, i) => (
    <Paper key={`item-${i}`} sx={{ height: 200 }}>
      Item: {i}
    </Paper>
  ))}
</Carousel>
```
