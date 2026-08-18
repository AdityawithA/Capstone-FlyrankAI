# 🎬 CineVault

> A modern movie and TV-show discovery application built with React and developed using AI as a software development assistant.

CineVault is a responsive entertainment discovery platform where users can explore TV shows, search for titles, view detailed information, and maintain a personal favourites collection.

The project was independently developed as part of the **FlyRank AI Internship – Week 3 React AI Application Assignment**.

---

## ✨ Features

### 🎬 Discovery

- Curated selection of popular TV shows
- Attractive poster-based movie/show cards
- Title, release year, type, genres, and rating
- Responsive grid layout

### 🔎 Search

- Search for movies and TV shows by title
- Real-time API-based search using TVMaze
- Search loading state
- Error handling
- Empty search-result state
- Clear search functionality

### ❤️ Favourites

- Add shows to favourites
- Remove shows from favourites
- Prevent duplicate favourites
- Favourites counter in navigation
- Dedicated Favourites page
- Favourites persist after browser refresh using `localStorage`

### 🪟 Details View

- Click any title to view additional information
- Poster
- Title
- Release year
- Media type
- Rating
- Genres
- Description
- Add/remove favourite action

### 🎨 User Interface

- Premium luxury visual design
- Dark plum/black background
- Champagne-gold accent colors
- Liquid-glass interface
- Glass navigation bar
- Glass movie cards
- Bubble-style navigation buttons
- Circular favourite buttons
- Glass search controls
- Smooth hover interactions
- Responsive design

### 📱 Responsive Design

CineVault is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

The movie grid automatically adapts to different screen sizes.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React | Frontend application |
| Vite | Development and build tooling |
| JavaScript | Application logic |
| CSS | Styling and responsive design |
| Lucide React | Interface icons |
| TVMaze API | TV-show search data |
| localStorage | Favourite persistence |
| Git | Version control |
| GitHub | Source-code hosting |

---

## 📁 Project Structure

```text
cinevault/
│
├── public/
│
├── src/
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   │
│   ├── components/
│   │
│   ├── pages/
│   │
│   ├── services/
│   │
│   └── hooks/
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
│
├── ai-prompts.md
├── AI-ASSISTANCE.md
└── README.md