# Week 09 Fix Log

## Before → Change → After

### 1. Mobile navigation
**Before:** Navigation links can become difficult to use on narrow screens.

**Change:** Added a responsive menu button, `aria-expanded`, `aria-controls`, Escape handling, outside-click closing, and visible focus styles.

**After:** Navigation has a dedicated mobile interaction and remains keyboard reachable.

### 2. Keyboard access
**Before:** A polished visual interface can still be difficult to use without a mouse.

**Change:** Added a skip link and explicit `:focus-visible` styles.

**After:** Keyboard users can reach the main content quickly and can see where focus is.

### 3. Metadata
**Before:** A portfolio without descriptive metadata gives search engines and social platforms less context.

**Change:** Added title, description, canonical URL, Open Graph metadata, Twitter card metadata, author, and robots metadata.

**After:** The page has a clearer search/share identity.

### 4. External links
**Before:** New-tab external links should not leave an unnecessary opener reference.

**Change:** Added `rel="noopener noreferrer"` to external links using `target="_blank"`.

**After:** External navigation follows a safer default.

### 5. Responsive layout
**Before:** Multi-column content can become cramped on phones.

**Change:** Project/about grids collapse to one column and navigation changes to a mobile menu below 760px.

**After:** The content has a deliberate mobile layout.

### 6. Reduced motion
**Before:** Smooth scrolling and transitions can be uncomfortable for users who request reduced motion.

**Change:** Added a `prefers-reduced-motion` media query.

**After:** Motion is reduced when the user preference is enabled.

---

## Evidence Still Required

The following must be measured on the final deployed site:

- Lighthouse Mobile Performance
- Lighthouse Mobile Accessibility
- WAVE results
- Real-device mobile behavior
- Final link verification

These results are intentionally not fabricated in this document.
