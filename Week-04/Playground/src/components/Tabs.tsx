import { useId, useRef, useState } from "react";

type Tab = {
  id: string;
  label: string;
  content: string;
};

const tabs: Tab[] = [
  {
    id: "overview",
    label: "Overview",
    content:
      "This tab demonstrates the basic information and overview of the project.",
  },
  {
    id: "features",
    label: "Features",
    content:
      "The project focuses on accessible interactions, keyboard support, and clear component behavior.",
  },
  {
    id: "notes",
    label: "Notes",
    content:
      "Every interaction is designed to remain usable without relying on a mouse.",
  },
];

export function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const baseId = useId();

  const selectTab = (index: number) => {
    setActiveTab(index);
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    let nextIndex = index;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % tabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    selectTab(nextIndex);
  };

  const current = tabs[activeTab];

  return (
    <div className="tabs-wrapper">
      <div
        className="tabs-list"
        role="tablist"
        aria-label="Project information"
      >
        {tabs.map((tab, index) => {
          const tabId = `${baseId}-${tab.id}-tab`;
          const panelId = `${baseId}-${tab.id}-panel`;

          return (
            <button
              key={tab.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={tabId}
              className={`tab-button ${
                activeTab === index ? "active" : ""
              }`}
              type="button"
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={panelId}
              tabIndex={activeTab === index ? 0 : -1}
              onClick={() => selectTab(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-${current.id}-panel`}
        className="tab-panel"
        role="tabpanel"
        aria-labelledby={`${baseId}-${current.id}-tab`}
        tabIndex={0}
      >
        <h3>{current.label}</h3>
        <p>{current.content}</p>
      </div>
    </div>
  );
}