# AI-Assisted Development

## Project

CineVault — React movie and TV discovery application.

## How AI Was Used

AI was used as a development assistant during:

- Initial architecture planning
- Component design
- React implementation
- API integration
- Favourites implementation
- Responsive UI refinement
- Error-state design
- Code review and refactoring

The application was not accepted blindly from AI output. Generated code was reviewed, run locally, and manually corrected where necessary.

## Manual Improvements

### 1. Accessible favourite controls

The initial concept for a favourite control could easily result in an icon-only button with no useful accessible name.

The implementation uses explicit `aria-label` values such as:

```jsx
aria-label={isFavourite
  ? `Remove ${item.name} from favourites`
  : `Add ${item.name} to favourites`}
```

This makes the action understandable to assistive-technology users.

### 2. Duplicate favourites

Favourite state was designed so an item is identified by its unique ID before insertion.

If an item is already saved, clicking the control removes it instead of adding a duplicate.

### 3. Persistent favourites

Favourites are stored in browser `localStorage`, allowing saved items to remain after a page refresh.

### 4. Failure and empty states

The application explicitly handles:

- Loading
- Search errors
- No search results
- Empty favourites

This prevents the interface from appearing broken when data is unavailable.

### 5. Responsive layout

The card grid changes from five columns on large screens to four, three, and two columns as the viewport becomes smaller.

## What I Learned

AI can accelerate implementation substantially, especially when breaking a feature into components. However, generated code still needs human review. Testing the actual interface exposed concerns around accessibility, persistence, edge cases, and responsive behaviour that should not be assumed to be correct simply because the code compiles.

## AI's Role

AI was used as an assistant for implementation and review. Final decisions about the UI, behaviour, code structure, and corrections were made after reviewing the generated implementation.


## Manual Correction — React Runtime Error

During testing, the application initially displayed a blank page.

Chrome DevTools reported:

`Uncaught ReferenceError: React is not defined`

The issue was caused by App.jsx using React while only importing individual React hooks.

I manually changed:

```jsx
import { useEffect, useMemo, useState } from "react";

import React, { useEffect, useMemo, useState } from "react";