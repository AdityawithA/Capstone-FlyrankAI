(() => {
  const id = window.GA_MEASUREMENT_ID;

  // Analytics is intentionally disabled until a real Measurement ID is supplied.
  // This prevents a broken analytics request from being shipped.
  if (!id || id === "G-XXXXXXXXXX") return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", id, { anonymize_ip: true });
})();
