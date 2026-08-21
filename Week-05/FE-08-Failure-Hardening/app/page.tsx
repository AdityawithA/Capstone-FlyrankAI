import Chat from "@/components/Chat";

export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <span className="eyebrow">WEEK 05 · CHECKPOINT 1</span>
        <h1>Aditya AI</h1>
        <p>
          A resilient streaming chat designed for errors, empty states,
          slow responses, interrupted connections, and mobile screens.
        </p>
      </header>
      <Chat />
    </main>
  );
}