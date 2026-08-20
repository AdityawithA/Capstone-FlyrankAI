import { useId, useState } from "react";

export function Disclosure() {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="disclosure">
      <button
        type="button"
        className="disclosure-button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>Accessibility notes</span>
        <span aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        id={contentId}
        className={`disclosure-content ${
          isOpen ? "open" : ""
        }`}
        hidden={!isOpen}
      >
        <p>
          Accessible components should expose their state and relationship
          through semantic HTML and ARIA attributes where necessary.
        </p>

        <p>
          Keyboard users should be able to reach and operate the disclosure
          without requiring a mouse.
        </p>
      </div>
    </div>
  );
}