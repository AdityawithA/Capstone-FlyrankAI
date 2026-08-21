type Props = {
  message: string;
  onRetry: () => void;
  retrying?: boolean;
};

export default function ErrorMessage({
  message,
  onRetry,
  retrying = false
}: Props) {
  return (
    <div className="failure" role="alert">
      <div className="failure-heading">
        <span className="failure-icon">!</span>
        <strong>We couldn&apos;t complete that request</strong>
      </div>

      <p>{message}</p>

      <button
        className="retry"
        onClick={onRetry}
        disabled={retrying}
      >
        {retrying ? "Retrying…" : "Retry"}
      </button>
    </div>
  );
}