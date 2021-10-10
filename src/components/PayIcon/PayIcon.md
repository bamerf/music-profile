All SVG icon images should be [optimized](https://jakearchibald.github.io/svgomg/) and `viewBox` used against width/height so delete any width and height attributes and add `viewBox="0 0 18 16"` (where 18 is width and 16 height) in `svg` tag

```svg
<svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="..."
    fill="currentColor"
  />
</svg>
```

The fill colors should be changed to in such case colors will be inherited from font color `color: red;`

```svg
fill="currentColor"
```