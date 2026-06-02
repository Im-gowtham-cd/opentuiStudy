import { createCliRenderer, TextAttributes } from "@opentui/core";
import { createRoot } from "@opentui/react";

import { Navbar } from './components/index'

function App() {
  return (
    <box alignItems="center" justifyContent="center" flexGrow={1}>
      <Navbar />
      <box justifyContent="center" alignItems="flex-end">
        <ascii-font font="block" text="GoTM" />
        <text attributes={TextAttributes.DIM}>What will you build?</text>
      </box>
    </box>
  );
}

const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);
