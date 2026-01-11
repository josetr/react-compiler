import { useRef, useState } from "react";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

type BadgeTone = "static" | "dynamic" | "info";

type RenderBadgeProps = {
  label: string;
  tone: BadgeTone;
};

function RenderBadge({ label, tone }: RenderBadgeProps) {
  const renders = useRef(0);
  renders.current += 1;

  return (
    <div className={`render-badge render-badge-${tone}`}>
      <span className="badge-label">{label}</span>
      <span className="badge-count">renders: {renders.current}</span>
    </div>
  );
}

export function App() {
  const [count, setCount] = useState(0);
  const [note, setNote] = useState("Compiler check");

  return (
    <div className="app">
      <div className="logo-container">
        <img src={logo} alt="Bun Logo" className="logo bun-logo" />
        <img src={reactLogo} alt="React Logo" className="logo react-logo" />
      </div>

      <h1>Bun + React</h1>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <section className="compiler-panel">
        <div className="compiler-header">
          <h2>React Compiler Badges</h2>
          <p>Click the counter or edit the note. The static badge should stop re-rendering if the compiler is active.</p>
        </div>
        <div className="compiler-controls">
          <button type="button" className="counter-button" onClick={() => setCount(value => value + 1)}>
            Count: {count}
          </button>
          <input
            className="note-input"
            value={note}
            onChange={event => setNote(event.target.value)}
            placeholder="Update this note"
          />
        </div>
        <div className="badge-grid">
          <RenderBadge label="Static badge" tone="static" />
          <RenderBadge label={`Count badge: ${count}`} tone="dynamic" />
          <RenderBadge label={`Note length: ${note.length}`} tone="info" />
        </div>
      </section>
    </div>
  );
}

export default App;
