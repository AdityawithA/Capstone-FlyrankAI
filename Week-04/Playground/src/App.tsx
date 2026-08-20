import { useState } from "react";
import { Disclosure } from "./components/Disclosure";
import { Modal } from "./components/Modal";
import { Tabs } from "./components/Tabs";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="page">
      <header className="hero">
        <span className="eyebrow">FOUNDATIONS · ACCESSIBILITY</span>

        <h1>Accessible React Components</h1>

        <p>
          Three interactive components built from scratch with React and
          TypeScript before comparing them with shadcn/ui.
        </p>
      </header>

      <section className="component-grid">
        <article className="component-card">
          <div className="card-label">01 · DIALOG</div>

          <h2>Modal Dialog</h2>

          <p>
            A modal with Escape support, focus management, focus trapping,
            and focus restoration.
          </p>

          <button
            type="button"
            className="primary-button"
            onClick={() => setIsModalOpen(true)}
          >
            Open modal
          </button>
        </article>

        <article className="component-card">
          <div className="card-label">02 · TABS</div>

          <h2>Keyboard Tabs</h2>

          <p>
            Use Tab to reach the tablist and Arrow keys to move between tabs.
          </p>

          <Tabs />
        </article>

        <article className="component-card">
          <div className="card-label">03 · DISCLOSURE</div>

          <h2>Disclosure</h2>

          <p>
            Expandable content with an explicit expanded/collapsed state.
          </p>

          <Disclosure />
        </article>
      </section>

      <section className="keyboard-card">
        <h2>Keyboard test checklist</h2>

        <ul>
          <li>Tab through every interactive element.</li>
          <li>Open the modal without a mouse.</li>
          <li>Use Escape to close the modal.</li>
          <li>Confirm focus returns to the trigger.</li>
          <li>Use ArrowLeft and ArrowRight in the tabs.</li>
          <li>Use Home and End in the tabs.</li>
          <li>Open and close the disclosure with Enter or Space.</li>
        </ul>
      </section>

      <Modal
        isOpen={isModalOpen}
        title="Accessible modal"
        onClose={() => setIsModalOpen(false)}
      >
        <p>
          This modal was implemented manually using React, TypeScript and
          WAI-ARIA semantics.
        </p>

        <p>
          Try pressing Tab repeatedly, then use Shift + Tab and Escape.
        </p>
      </Modal>
    </main>
  );
}

export default App;