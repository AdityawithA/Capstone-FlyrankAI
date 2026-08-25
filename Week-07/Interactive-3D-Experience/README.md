AI Neural Core — Interactive 3D Web Experience






Overview

AI Neural Core is an interactive 3D browser experience built for Week 07 of the FlyRank AI internship track.

The project turns the idea of an AI system's internal "core" into a lightweight 3D scene that users can explore directly in the browser. Instead of using a static image or a large pre-built 3D model, the experience creates the scene procedurally with Three.js.

The scene contains:

A central 3D neural core

A transparent wireframe shell

Multiple animated signal rings

Orbiting data nodes

A supporting grid

Interactive camera controls

Material/color switching

Wireframe mode

Adjustable automatic rotation

A reset-view control

A reduced-motion/static fallback

Responsive behavior for desktop and mobile screens

The main goal was not simply to "put something 3D on a webpage", but to build a real interactive 3D experience while keeping the implementation understandable, lightweight, responsive, and accessible.

Live Project

Portfolio

Aditya Kumar Portfolio:
https://aditya-kumar-flyrankai.netlify.app/

GitHub

GitHub:
https://github.com/AdityawithA

LinkedIn

LinkedIn:
https://www.linkedin.com/in/aditya-kumar-892099293/

The live URL for this Week 07 3D experience can be added here after the final deployment:

https://your-project-name.netlify.app/

What I Built

The project is an AI Neural Core visualization.

The visual concept represents an AI system as a central processing core surrounded by signals and connected data points.

The main object is constructed from procedural Three.js geometry rather than an imported .glb or .gltf model.

Scene structure

The scene contains four major visual layers:

Central Core

An IcosahedronGeometry forms the main object.

A metallic standard material gives it a glowing technological appearance.

It continuously rotates when animation is enabled.

Transparent Shell

A second icosahedron surrounds the core.

It uses a transparent physical material with wireframe enabled.

This creates the outer "neural network" structure.

Signal Rings

Three torus geometries surround the core.

Each ring has a different color and orientation.

Their rotation creates the impression of energy or information moving around the system.

Orbiting Nodes

24 small spheres are positioned around the core.

Their positions are recalculated during animation.

They move around the core using simple trigonometric motion.

A grid is placed underneath the scene to provide depth and a visual reference point.

Main Features

1. Interactive 3D Camera

The experience uses Three.js OrbitControls.

Users can:

Drag to rotate around the object

Zoom in and out

Use touch gestures on compatible mobile devices

Inspect the geometry from different angles

Panning is intentionally disabled so the scene remains focused on the central object.

Camera distance is also constrained so users cannot zoom infinitely far away or directly inside the scene.

2. Material Switching

The control panel allows the user to change the material appearance of the central core.

Available presets are:

Neural Cyan

Signal Violet

Energy Amber

Titanium

Changing the material updates both the main color and the emissive color.

This makes the interaction meaningful rather than decorative.

3. Adjustable Auto-Rotation

The Auto rotate range control changes the animation speed.

The user can:

Slow the animation down

Increase the rotation speed

Set the speed to zero

This control affects the core, shell, rings, and orbiting nodes.

4. Wireframe Mode

The Wireframe checkbox changes the rendering mode of the central core.

This gives users another way to inspect the underlying geometry.

It also demonstrates that the experience is using real 3D geometry rather than a pre-rendered image.

5. Reset View

The Reset view button returns the experience to its initial state.

It resets:

Camera position

Orbit target

Animation speed

Material selection

Wireframe state

This provides a predictable way to recover from an extreme camera position or configuration.

6. Reduced-Motion Support

The project checks:

prefers-reduced-motion: reduce

When reduced motion is enabled:

Automatic animation is disabled

The experience avoids unnecessary motion

A lightweight readable fallback is available

The purpose is to respect users who have requested reduced motion rather than forcing a continuously animated 3D experience.

7. WebGL Fallback

The application checks whether WebGL is available before initializing the scene.

If initialization fails, the page displays a static fallback instead of leaving the user with an empty or broken section.

This makes the experience more resilient on:

Older browsers

Unsupported environments

Restricted graphics contexts

Devices where WebGL cannot initialize

8. Viewport-Aware Rendering

The project uses IntersectionObserver to determine whether the 3D scene is visible.

When the scene is outside the viewport, rendering is paused.

This prevents the browser from continuously rendering an invisible WebGL canvas while the user is reading another part of the page.

Technology Stack

Frontend

HTML5

CSS3

Modern JavaScript

ES Modules

3D

Three.js 0.179.1

WebGL

Three.js OrbitControls

Three.js is loaded from the jsDelivr CDN using an import map.

Hosting

The project is designed for static hosting and can be deployed on platforms such as:

Netlify

GitHub Pages

Cloudflare Pages

Vercel

No backend server is required.

Project Structure

Week-07-Interactive-3D-Experience/
│
├── index.html
├── app.js
├── style.css
├── package.json
├── README.md
└── .gitignore

index.html

The main HTML document.

It contains:

Page structure

Hero section

3D experience section

Interactive controls

Fallback interface

Performance notes

Footer links

Three.js import map

The page loads app.js as an ES module.

app.js

This is the main 3D application logic.

It is responsible for:

Creating the Three.js scene

Creating the camera

Creating the WebGL renderer

Adding lighting

Creating the 3D geometry

Creating orbiting nodes

Creating signal rings

Connecting OrbitControls

Handling material changes

Handling wireframe mode

Handling reset behavior

Handling responsive resizing

Running the animation loop

Detecting reduced motion

Detecting WebGL failure

Pausing rendering when the scene is not visible

style.css

Contains the visual design of the website.

It controls:

Typography

Colors

Layout

Hero section

Buttons

Scene container

Control panel

Responsive behavior

Mobile layout

Fallback presentation

Footer

Accessibility-related visual states

The CSS keeps the 3D canvas inside a responsive container rather than forcing a fixed desktop-only size.

package.json

Contains the project's basic metadata.

The current experience is intentionally lightweight and does not require a large local dependency tree because Three.js is loaded from the CDN.

.gitignore

Prevents unnecessary local/generated files from being committed to the repository.

Typical ignored files include:

node_modules/
dist/
.env

3D Implementation

The scene is generated completely in the browser.

No large 3D model is downloaded.

Central geometry

The main core uses:

IcosahedronGeometry

with a higher subdivision level to make the shape detailed enough for close inspection.

Outer shell

A second:

IcosahedronGeometry

is used as a transparent wireframe shell.

Rings

The signal rings use:

TorusGeometry

with different radii and rotations.

Data nodes

The orbiting particles are small:

SphereGeometry

objects.

Their positions are updated using sine and cosine calculations.

This keeps the scene procedural and avoids the need for a model file.

Interaction Model

The experience has multiple interaction layers.

Camera interaction

Drag → Orbit
Zoom / Pinch → Zoom

Configuration interaction

Material → Change core appearance
Auto rotate → Change animation speed
Wireframe → Inspect geometry
Reset → Restore default state

Accessibility interaction

prefers-reduced-motion → Disable automatic motion
WebGL unavailable → Static fallback

Performance Strategy

Performance was an important part of this assignment.

The goal was to demonstrate a 3D experience without turning the page into a heavy application.

1. No external 3D model

The project does not download a large .glb or .gltf asset.

Instead, all geometry is generated procedurally.

This avoids:

Large model downloads

Model parsing time

Texture downloads

Draco/mesh compression overhead

Additional asset management

2. Pixel-ratio cap

The renderer limits device pixel ratio:

Math.min(window.devicePixelRatio, 1.5)

This is important on high-density displays because rendering a WebGL canvas at the full native pixel density can become unnecessarily expensive.

3. Simple geometry

The scene uses relatively simple procedural shapes:

Icosahedrons

Toruses

Spheres

Grid helper

This keeps geometry and GPU workload manageable.

4. Viewport-aware animation

IntersectionObserver tracks whether the scene is visible.

When the scene is not visible, the animation/render loop does not perform the normal scene update and render work.

This helps reduce unnecessary GPU/CPU activity while the user is browsing other sections.

5. Reduced-motion fallback

Users who request reduced motion are not forced to run the full animation.

The project checks:

prefers-reduced-motion

and disables automatic motion accordingly.

FE-10 Performance Lens

The main performance cost of this project is the WebGL canvas, not HTML or CSS.

The build deliberately avoids a large model and instead uses procedural geometry.

Main performance decisions

Area

Decision

3D model

No external model

Geometry

Procedural, relatively small

Pixel ratio

Capped at 1.5

Rendering

Paused when scene is outside viewport

Motion

Reduced-motion aware

Failure handling

Static fallback

Assets

No large texture/model downloads

Mobile

Responsive canvas sizing

What I would measure further

For a production version, I would measure:

First Contentful Paint

Largest Contentful Paint

JavaScript transfer size

Total page transfer size

WebGL frame rate

GPU usage

Mobile thermal/battery impact

Performance on low-end Android devices

The current design decisions are intended to provide a sensible baseline before adding more complex models, post-processing effects, or textures.

Mobile Considerations

The experience was designed to remain usable on smaller screens.

The scene automatically recalculates its renderer dimensions when the viewport changes.

The camera also uses responsive aspect-ratio calculations.

Touch interaction is handled through Three.js OrbitControls.

The project avoids forcing the entire desktop scene into a fixed-width container.

Accessibility Considerations

Accessibility was considered alongside the visual experience.

Reduced motion

The project respects:

prefers-reduced-motion

and disables automatic animation when requested.

Fallback

If WebGL cannot initialize, the user receives readable content instead of a blank section.

Controls

Interactive controls use standard HTML controls such as:

<select>

<input type="range">

<input type="checkbox">

<button>

This keeps the control layer accessible to keyboard and assistive-technology users.

What I Learned

This project helped me understand the complete browser-based 3D workflow:

Create a Three.js scene

Add a camera

Create a WebGL renderer

Add lighting

Build procedural geometry

Add animation

Add camera interaction

Connect UI controls to the 3D scene

Handle responsive resizing

Respect reduced-motion preferences

Provide a fallback when WebGL fails

Think about GPU and rendering performance

Deploy a static 3D experience to the web

The most important lesson was that a 3D experience should not be treated as decoration alone. It needs a meaningful interaction, a clear purpose, and a fallback for users or devices that cannot support the full experience.

Challenges

Some of the main challenges during development were:

Getting the 3D scene to initialize reliably

The scene needed to handle browsers where WebGL could not be initialized.

Keeping the animation lightweight

A continuously animated WebGL canvas can consume more resources than a normal webpage, so the project uses simple geometry, capped pixel density, and viewport-aware rendering.

Making the fallback behave correctly

The static fallback should only appear when reduced motion is requested or the 3D experience genuinely cannot initialize.

Keeping the experience mobile-friendly

The canvas needs to resize correctly and remain usable with touch-based camera interaction.

Future Improvements

With more development time, I would consider adding:

A real optimized .glb AI hardware/model

Draco-compressed geometry

Environment-map lighting

More sophisticated particle connections

Scroll-based scene transitions

Interactive node inspection

More detailed accessibility announcements

Performance telemetry

Loading progress indicators

Device-aware quality settings

A low-power rendering preset

Better touch-specific camera controls

More advanced post-processing effects

These would be added only after verifying their performance impact.

How to Run Locally

Because the project uses JavaScript modules and imports Three.js from a CDN, it is best served through a local HTTP server instead of opening the HTML file directly with file://.

For example, with Python:

python -m http.server 8000

Then open:

http://localhost:8000

Or use the Live Server extension in VS Code.

Deployment

The project is a static website, so it can be deployed without a backend.

Netlify

Push the project to GitHub.

Create a new Netlify site.

Connect the GitHub repository.

Select the project folder if it is inside a larger repository.

Deploy.

Open the generated HTTPS URL.

Test the 3D scene on desktop and mobile.

Submission Checklist

Before submitting Week 07, verify:

A real 3D scene renders in the browser

Three.js/WebGL is being used

There is a meaningful interaction beyond orbiting

Material/color can be changed

Wireframe mode works

Animation speed can be controlled

Reset control works

Mobile interaction is supported

Reduced-motion behavior is implemented

Static fallback exists

No large external 3D model is required

Pixel ratio is capped

Rendering pauses when the scene is outside the viewport

Performance considerations are documented

README explains the implementation

Assignment Context

Track: General AI Fluency
Week: 07
Project: Interactive 3D Web Experience
Theme: 3D on the Web

The assignment focused on shipping one interactive 3D browser experience and understanding the complete loop:

geometry → lighting → interaction → performance → accessibility → deployment

This project was designed to satisfy that goal while remaining small enough to understand and explain.

Author

Aditya Kumar

Computer Science & Design student and aspiring AI Engineer / Full-Stack Developer.

Connect

Portfolio: https://aditya-kumar-flyrankai.netlify.app/

GitHub: https://github.com/AdityawithA

LinkedIn: https://www.linkedin.com/in/aditya-kumar-892099293/

License

This project is created as part of the FlyRank AI internship learning track and for educational/portfolio purposes.