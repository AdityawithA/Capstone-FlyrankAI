import React, { useEffect, useMemo, useState } from "react";
import {
  Clapperboard,
  Heart,
  Home,
  Search,
  Star,
  Trash2,
  X,
} from "lucide-react";
import "./App.css";

const FALLBACK_SHOWS = [
  {
    id: 1,
    name: "The Last of Us",
    year: "2023",
    type: "Series",
    rating: "8.8",
    genres: ["Drama", "Action"],
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/445/1119.jpg",
    summary: "After a global outbreak, Joel and Ellie travel through a dangerous world shaped by loss, survival, and hope."
  },
  {
    id: 2,
    name: "Wednesday",
    year: "2022",
    type: "Series",
    rating: "8.0",
    genres: ["Mystery", "Comedy"],
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/438/1099234.jpg",
    summary: "Wednesday Addams investigates strange events at Nevermore Academy while trying to master her emerging psychic abilities."
  },
  {
    id: 3,
    name: "Sherlock",
    year: "2010",
    type: "Series",
    rating: "9.1",
    genres: ["Crime", "Drama"],
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/228.jpg",
    summary: "A brilliant detective and a former army doctor solve dangerous cases across modern-day London."
  },
  {
    id: 4,
    name: "Stranger Things",
    year: "2016",
    type: "Series",
    rating: "8.6",
    genres: ["Drama", "Sci-Fi"],
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/200/501470.jpg",
    summary: "A group of friends uncover supernatural secrets in their small town after a boy mysteriously disappears."
  },
  {
    id: 5,
    name: "The Boys",
    year: "2019",
    type: "Series",
    rating: "8.6",
    genres: ["Action", "Drama"],
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/470/1171858.jpg",
    summary: "A team of vigilantes takes on corrupt superheroes who abuse their extraordinary powers."
  },
  {
    id: 6,
    name: "Peaky Blinders",
    year: "2013",
    type: "Series",
    rating: "8.7",
    genres: ["Crime", "Drama"],
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/402/1009993.jpg",
    summary: "The Shelby family builds its criminal empire in post-war Birmingham while facing rival gangs and political pressure."
  },
  {
    id: 7,
    name: "Dark",
    year: "2017",
    type: "Series",
    rating: "8.7",
    genres: ["Mystery", "Sci-Fi"],
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/339/847094.jpg",
    summary: "A missing child exposes a time-bending mystery connecting four families across generations."
  },
  {
    id: 8,
    name: "The Bear",
    year: "2022",
    type: "Series",
    rating: "8.5",
    genres: ["Drama", "Comedy"],
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/453/1134506.jpg",
    summary: "A talented chef returns home to run his family's sandwich shop and rebuild a struggling kitchen."
  }
];

function stripHtml(value = "") {
  const div = document.createElement("div");
  div.innerHTML = value;
  return div.textContent || div.innerText || "";
}

function normalizeShow(show) {
  return {
    id: show.id,
    name: show.name,
    year: show.premiered?.slice(0, 4) || "—",
    type: "Series",
    rating: show.rating?.average ? show.rating.average.toFixed(1) : "N/A",
    genres: show.genres?.slice(0, 2) || [],
    image: show.image?.medium || show.image?.original || "",
    summary: stripHtml(show.summary || "No summary available.")
  };
}

function App() {
  const [activePage, setActivePage] = useState("home");
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [shows, setShows] = useState(FALLBACK_SHOWS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);
  const [favourites, setFavourites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cinevault-favourites")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cinevault-favourites", JSON.stringify(favourites));
  }, [favourites]);

  const visibleShows = useMemo(() => {
    if (!submittedQuery) return shows;
    return shows;
  }, [shows, submittedQuery]);

  const favouriteIds = useMemo(
    () => new Set(favourites.map((item) => item.id)),
    [favourites]
  );

  async function searchShows(term) {
    const cleanTerm = term.trim();
    if (!cleanTerm) {
      setSubmittedQuery("");
      setShows(FALLBACK_SHOWS);
      setError("");
      return;
    }

    setLoading(true);
    setError("");
    setSubmittedQuery(cleanTerm);

    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(cleanTerm)}`
      );
      if (!response.ok) throw new Error("Search request failed.");
      const data = await response.json();
      const results = data.map((item) => normalizeShow(item.show));

      if (!results.length) {
        setShows([]);
      } else {
        setShows(results);
      }
    } catch {
      setShows([]);
      setError("Search is unavailable right now. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleSearch(event) {
    event.preventDefault();
    searchShows(query);
  }

  function toggleFavourite(item) {
    setFavourites((current) => {
      const exists = current.some((fav) => fav.id === item.id);
      if (exists) return current.filter((fav) => fav.id !== item.id);
      return [...current, item];
    });
  }

  function clearSearch() {
    setQuery("");
    setSubmittedQuery("");
    setShows(FALLBACK_SHOWS);
    setError("");
  }

  return (
    <div className="app-shell">
      <header className="navbar">
        <button className="brand" onClick={() => { setActivePage("home"); clearSearch(); }}>
          <span className="brand-mark"><Clapperboard size={19} /></span>
          <span>Cine<span>Vault</span></span>
        </button>

        <nav className="nav-links" aria-label="Primary navigation">
          <button
            className={activePage === "home" ? "nav-link active" : "nav-link"}
            onClick={() => { setActivePage("home"); clearSearch(); }}
          >
            <Home size={16} /> Home
          </button>
          <button
            className={activePage === "favourites" ? "nav-link active" : "nav-link"}
            onClick={() => setActivePage("favourites")}
          >
            <Heart size={16} /> Favourites
            {favourites.length > 0 && <span className="count">{favourites.length}</span>}
          </button>
        </nav>

        <form className="nav-search" onSubmit={handleSearch}>
          <Search size={17} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search shows..."
            aria-label="Search shows"
          />
          {query && (
            <button type="button" className="icon-button" onClick={clearSearch} aria-label="Clear search">
              <X size={16} />
            </button>
          )}
          <button className="search-submit" type="submit">Search</button>
        </form>
      </header>

      <main>
        {activePage === "home" ? (
          <>
            <section className="hero">
              <div className="hero-content">
                <p className="eyebrow">YOUR NEXT OBSESSION</p>
                <h1>Find something<br /><span>worth watching.</span></h1>
                <p className="hero-copy">
                  Discover great shows, search by title, and keep your personal watchlist in one place.
                </p>
                <form className="hero-search" onSubmit={handleSearch}>
                  <Search size={20} />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Try “Dark”, “Sherlock”, or “The Bear”"
                    aria-label="Search for a show"
                  />
                  <button type="submit">Explore</button>
                </form>
              </div>
              <div className="hero-orbit" aria-hidden="true">
                <div className="poster poster-a"><img src={FALLBACK_SHOWS[0].image} alt="" /></div>
                <div className="poster poster-b"><img src={FALLBACK_SHOWS[4].image} alt="" /></div>
                <div className="poster poster-c"><img src={FALLBACK_SHOWS[6].image} alt="" /></div>
              </div>
            </section>

            <section className="content-section">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">{submittedQuery ? "SEARCH RESULTS" : "CURATED FOR YOU"}</p>
                  <h2>{submittedQuery ? `Results for “${submittedQuery}”` : "Trending tonight"}</h2>
                </div>
                {submittedQuery && (
                  <button className="clear-search" onClick={clearSearch}>Clear search</button>
                )}
              </div>

              {loading && <div className="state-card">Searching the vault<span className="dots">...</span></div>}
              {!loading && error && <div className="state-card error-state">{error}</div>}
              {!loading && !error && visibleShows.length === 0 && (
                <div className="state-card">
                  <h3>No titles found</h3>
                  <p>Try a different search term.</p>
                </div>
              )}
              {!loading && !error && visibleShows.length > 0 && (
                <div className="movie-grid">
                  {visibleShows.map((item) => (
                    <MovieCard
                      key={item.id}
                      item={item}
                      isFavourite={favouriteIds.has(item.id)}
                      onFavourite={toggleFavourite}
                      onOpen={setSelected}
                    />
                  ))}
                </div>
              )}
            </section>
          </>
        ) : (
          <section className="content-section favourites-page">
            <div className="section-heading">
              <div>
                <p className="eyebrow">YOUR COLLECTION</p>
                <h2>Favourites</h2>
              </div>
              <span className="collection-count">{favourites.length} saved</span>
            </div>

            {favourites.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon"><Heart size={28} /></div>
                <h3>Your vault is empty</h3>
                <p>Save a few shows from Home and they’ll appear here.</p>
                <button className="primary-button" onClick={() => setActivePage("home")}>Discover shows</button>
              </div>
            ) : (
              <div className="movie-grid">
                {favourites.map((item) => (
                  <MovieCard
                    key={item.id}
                    item={item}
                    isFavourite
                    onFavourite={toggleFavourite}
                    onOpen={setSelected}
                  />
                ))}
              </div>
            )}
          </section>
        )}
      </main>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <article className="detail-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close details">
              <X />
            </button>
            <div className="detail-poster">
              {selected.image ? <img src={selected.image} alt={`${selected.name} poster`} /> : <div className="poster-fallback"><Clapperboard /></div>}
            </div>
            <div className="detail-content">
              <p className="eyebrow">{selected.type} · {selected.year}</p>
              <h2>{selected.name}</h2>
              <div className="rating"><Star size={16} fill="currentColor" /> {selected.rating}</div>
              <div className="chips">{selected.genres.map((genre) => <span key={genre}>{genre}</span>)}</div>
              <p>{selected.summary}</p>
              <button className="primary-button" onClick={() => toggleFavourite(selected)}>
                <Heart size={17} fill={favouriteIds.has(selected.id) ? "currentColor" : "none"} />
                {favouriteIds.has(selected.id) ? "Remove favourite" : "Add to favourites"}
              </button>
            </div>
          </article>
        </div>
      )}

      <footer>
        <span>© 2026 CineVault</span>
        <span>Built with React · AI-assisted development</span>
      </footer>
    </div>
  );
}

function MovieCard({ item, isFavourite, onFavourite, onOpen }) {
  return (
    <article className="movie-card">
      <button className="poster-wrap" onClick={() => onOpen(item)} aria-label={`View details for ${item.name}`}>
        {item.image ? <img src={item.image} alt={`${item.name} poster`} loading="lazy" /> : <div className="poster-fallback"><Clapperboard /></div>}
        <span className="type-badge">{item.type}</span>
        <span className="rating-badge"><Star size={12} fill="currentColor" /> {item.rating}</span>
      </button>
      <div className="card-body">
        <div>
          <h3 title={item.name}>{item.name}</h3>
          <p>{item.year} <span>•</span> {item.genres?.[0] || item.type}</p>
        </div>
        <button
          className={isFavourite ? "fav-button saved" : "fav-button"}
          onClick={() => onFavourite(item)}
          aria-label={isFavourite ? `Remove ${item.name} from favourites` : `Add ${item.name} to favourites`}
          title={isFavourite ? "Remove favourite" : "Add to favourites"}
        >
          {isFavourite ? <Heart size={17} fill="currentColor" /> : <Heart size={17} />}
        </button>
      </div>
    </article>
  );
}

export default App;