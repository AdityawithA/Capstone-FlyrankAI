import React, { useState } from "react";

export default function ProfileForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);

  function submit(event) {
    event.preventDefault();
    if (!name.trim() || !email.includes("@")) return;
    setSaved(true);
  }

  return (
    <section className="panel" aria-labelledby="profile-title">
      <h2 id="profile-title">Validated profile form</h2>
      <form onSubmit={submit} noValidate>
        <label htmlFor="name">Name</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
        <label htmlFor="email">Email</label>
        <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" type="email" />
        <button type="submit">Save profile</button>
        {saved && <p role="status">Profile saved.</p>}
      </form>
    </section>
  );
}