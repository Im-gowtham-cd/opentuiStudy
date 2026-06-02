import { createCliRenderer, TextAttributes } from "@opentui/core";
import { createRoot } from "@opentui/react";

import { Navbar } from './components/index'

function App() {
  return (
    <box alignItems="center" justifyContent="flex-start" flexGrow={1}>
      <Navbar />
    </box>
  );
}

const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);
