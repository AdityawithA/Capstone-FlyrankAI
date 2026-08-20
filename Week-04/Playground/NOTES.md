# Accessibility Comparison Notes

## Hand-built Components vs shadcn/ui

This assignment required building accessible components manually before using shadcn/ui. The comparison helped identify several accessibility details that are easy to miss when implementing components from scratch.

## 1. Modal Focus Management

### My implementation

My modal manually:

- Stores the element that opened the modal.
- Moves focus into the dialog when it opens.
- Handles Escape to close the dialog.
- Traps Tab and Shift+Tab inside the modal.
- Restores focus to the original trigger after closing.

### What shadcn/ui handles

The shadcn/ui dialog implementation provides a more complete dialog primitive with established focus behavior and interaction handling rather than requiring every detail to be implemented manually.

### Gap

The main gap was the amount of focus-management logic required in the handwritten implementation. A simple `role="dialog"` and `aria-modal="true"` are not enough to create a fully usable modal.

---

## 2. Tabs Keyboard Interaction

### My implementation

My tabs implement:

- `role="tablist"`
- `role="tab"`
- `role="tabpanel"`
- `aria-selected`
- `aria-controls`
- `aria-labelledby`
- ArrowLeft and ArrowRight navigation
- Home and End navigation
- Roving tab index

### What shadcn/ui provides

The shadcn/ui Tabs component packages the tab interaction model into reusable primitives and handles the expected keyboard and accessibility behavior through its underlying component implementation.

### Gap

The main gap was realizing that tabs are not simply buttons that switch content. They require a coordinated relationship between the tablist, individual tabs, and tab panels, plus keyboard navigation.

---

## 3. Disclosure

The handwritten disclosure was intentionally kept simple.

It uses:

- A native button
- `aria-expanded`
- `aria-controls`
- Native `hidden` behavior

This component required less custom accessibility logic than the modal and tabs because the native button already provides strong keyboard behavior.

---

## What I Learned

The biggest lesson was that accessibility is part of component behavior, not just a collection of ARIA attributes.

The difficult parts were:

1. Managing focus correctly in a modal.
2. Implementing keyboard navigation for tabs.
3. Maintaining the correct relationship between interactive elements and their content.

Building the components manually first made it easier to understand what an accessible component library is solving for the developer.