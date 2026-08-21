type ToolStateProps = {
  state: "input-streaming" | "input-available" | "output-available" | "output-error";
  input?: unknown;
  errorText?: string;
};

const labels = {
  "input-streaming": "Preparing tool input",
  "input-available": "Input received",
  "output-available": "Tool result ready",
  "output-error": "Tool execution failed",
};

export default function ToolState({
  state,
  input,
  errorText,
}: ToolStateProps) {
  const icon =
    state === "input-streaming"
      ? "◌"
      : state === "input-available"
        ? "→"
        : state === "output-available"
          ? "✓"
          : "!";

  return (
    <div className={`tool-state tool-${state}`}>
      <div className="tool-state-icon" aria-hidden="true">
        {icon}
      </div>

      <div className="tool-state-body">
        <strong>{labels[state]}</strong>

        {state === "input-streaming" && (
          <p>The model is streaming the arguments needed by the tool.</p>
        )}

        {state === "input-available" && (
          <p>
            Tool input is ready.
            {input ? ` ${JSON.stringify(input)}` : ""}
          </p>
        )}

        {state === "output-available" && (
          <p>The server returned structured data for the UI.</p>
        )}

        {state === "output-error" && (
          <p>{errorText || "The tool could not complete this request."}</p>
        )}
      </div>
    </div>
  );
}
