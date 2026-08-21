# FL-08 — Motion Button Lifecycle

A polished, standalone implementation of the motion-system assignment.

## Assignment goal

Build a button that communicates its full lifecycle through intentional transitions:

**idle → hover/focus → loading → success/error → idle**

This implementation uses a **Send Message** button for an AI-chat-style interface.

## Included states

- Idle
- Hover
- Keyboard focus
- Loading
- Success
- Error
- Reduced-motion behavior

## Interaction behavior

### Normal run

Click **Send message**. The demo performs a fake asynchronous request. It succeeds approximately 80% of the time and fails approximately 20% of the time.

### Force success / Force error

The two secondary controls make it easy to demonstrate both required outcomes during review.

## Motion decisions

The main animations use compositor-friendly `transform` and `opacity`. The button does not animate its dimensions or surrounding layout.

- **Loading:** label/icon transition out while a spinner transitions in.
- **Success:** the send icon transitions into a check state and the button changes to a success state.
- **Error:** one short shake communicates failure; under reduced motion the shake is minimized while the error state remains visible.
- **Return to idle:** the result remains visible briefly before returning to idle so the transition is perceivable.

## Interruptibility

The lifecycle clears any previous timer and uses a lifecycle token before starting a new run. Rapid interaction therefore cannot leave an old asynchronous callback changing the UI after a newer run has started.

## Accessibility

The demo includes native buttons, keyboard activation, visible `:focus-visible` styling, `aria-live` feedback, and a `prefers-reduced-motion` media query. Reduced motion minimizes movement rather than removing state feedback.

## Files

```text
FL-08-Motion-Button/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Run locally

No framework or package installation is required. Open `index.html` directly, or run:

```bash
python -m http.server 5500
```

Then visit `http://localhost:5500`.

## Design principle

The goal is not to decorate a button with animation. Motion is tied to meaning: movement indicates interaction, the spinner indicates work, the check indicates success, the error state indicates failure, and the return transition communicates completion.
