import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("react-root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  throw new Error("React root container not found");
}
