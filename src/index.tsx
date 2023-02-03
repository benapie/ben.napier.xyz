import { createRoot } from "react-dom/client";

import "@fontsource/fredoka-one";
import "@fontsource/fredoka/300.css";
import "@fontsource/fredoka/400.css";
import "@fontsource/fredoka/500.css";
import "@fontsource/lato";
import { App } from "./App";

const container = document.getElementById("app")!;
const root = createRoot(container);

root.render(<App />);
