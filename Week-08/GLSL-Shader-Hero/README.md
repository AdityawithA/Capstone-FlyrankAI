# Week 08 — GLSL Shader Hero

A personalized fullscreen WebGL fragment shader used as a portfolio hero.

## Requirements covered
- Custom GLSL fragment shader rendered fullscreen.
- Uses `u_time`, `u_resolution`, and `u_mouse`.
- Real HTML headline and introduction remain above the shader.
- Dark overlay preserves text contrast.
- `devicePixelRatio` is capped at `1.75`.
- Animation stops when the browser tab is hidden.
- `prefers-reduced-motion` freezes the shader into a static frame.
- WebGL/shader failure leaves the page usable with a fallback status.

## Shader mental model

1. The vertex shader creates one oversized triangle covering the viewport.
2. `gl_FragCoord` and `u_resolution` create centered, aspect-correct coordinates.
3. `u_time` moves the mathematical flow field.
4. `u_mouse` gently bends the field and adds a cursor glow.
5. Layered sine-based field values create the flowing structure.
6. The result is mapped to a blue/cyan/violet palette.
7. Vignette and subtle grain add depth.

## Run locally

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

This is a static site and can be deployed to Netlify, Vercel, or GitHub Pages.

## Submission checklist
- [ ] Live URL works.
- [ ] Shader works on desktop.
- [ ] Pointer interaction works.
- [ ] Real phone tested.
- [ ] Reduced motion tested.
- [ ] Tab visibility pause tested.
- [ ] Text remains readable.
- [ ] Shader source and comments reviewed.

Portfolio: https://aditya-kumar-flyrankai.netlify.app/
GitHub: https://github.com/AdityawithA
LinkedIn: https://www.linkedin.com/in/aditya-kumar-892099293/
