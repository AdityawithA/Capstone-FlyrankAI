type Props = {
  onSelect: (prompt: string) => void;
};

export default function EmptyState({ onSelect }: Props) {
  const examples = [
    "Tell me about Aditya's strongest projects.",
    "What technologies does Aditya use?",
    "Why should I consider Aditya for a software role?"
  ];

  return (
    <div className="empty-state">
      <div className="avatar">AK</div>
      <h2>Hi! I&apos;m Aditya&apos;s AI assistant.</h2>
      <p>
        No conversation yet. Pick a question below to get started.
      </p>

      <div className="suggestions">
        {examples.map((example) => (
          <button key={example} onClick={() => onSelect(example)}>
            {example}
          </button>
        ))}
      </div>
    </div>
  );
}