import { createRoot } from "react-dom/client";

import { App } from "./App";

import "@fontsource/jetbrains-mono";
import "@fontsource/ibm-plex-sans";

const container = document.getElementById("app")!;
const root = createRoot(container);

root.render(<App />);
