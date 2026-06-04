#!/usr/bin/env bun
import { createCliRenderer, TextAttributes } from "@opentui/core";
import { createRoot, useKeyboard } from "@opentui/react";
import { useState } from 'react'
import { spawn } from 'bun'

import { Navbar, Home } from './components/index'
import Route from './router/route'


function App() {
  const [route, setRoute] = useState("home")
  useKeyboard((key) => {
    switch (key.name) {
      case "1": return setRoute("home")
      case "2": return setRoute("about")
      case "3":{
        spawn(['cmd','/c','start','https://github.com/Im-gowtham-cd/opentuiStudy'])
        break
      }
      default: setRoute("home")
    }
  })
  return (
    <box alignItems="center" justifyContent="flex-start" flexGrow={1}>
      <Navbar />
      <Route route={route} />
    </box>
  );
}

const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);
