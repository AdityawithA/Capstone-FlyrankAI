const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav-links");

function setMenu(open) {
  nav?.classList.toggle("open", open);
  toggle?.setAttribute("aria-expanded", String(open));
  toggle?.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
}

toggle?.addEventListener("click", () => {
  const open = !nav?.classList.contains("open");
  setMenu(open);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav?.classList.contains("open")) {
    setMenu(false);
    toggle?.focus();
  }
});

document.addEventListener("click", (event) => {
  if (!nav?.classList.contains("open")) return;
  const target = event.target;
  if (!(target instanceof Node)) return;
  if (!nav.contains(target) && !toggle?.contains(target)) setMenu(false);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
