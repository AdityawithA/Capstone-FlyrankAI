export default function LoadingSkeleton() {
  return (
    <div className="loading" aria-live="polite" aria-label="AI is thinking">
      <div className="loading-title">
        <span className="pulse" />
        Aditya AI is thinking…
      </div>
      <div className="skeleton wide" />
      <div className="skeleton medium" />
      <div className="skeleton short" />
    </div>
  );
}