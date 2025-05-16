import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";

const container = document.getElementById("react-root");
if (container) {
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  throw new Error("React root container not found");
}
