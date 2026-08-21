"use client";

export default function Error({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="route-error">
      <div className="error-panel">
        <div className="error-mark">!</div>
        <h1>Something went wrong</h1>
        <p>
          The page hit an unexpected error. Your conversation can be retried
          without leaving the application.
        </p>
        <button className="primary" onClick={() => reset()}>
          Try again
        </button>
      </div>
    </main>
  );
}