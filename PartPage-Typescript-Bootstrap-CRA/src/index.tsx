import { createRoot } from "react-dom/client";

import { AppProvider } from "templates/AppProvider";
import { GlobalContainer } from "templates/GlobalContainer";

import App from "./App";

const container = document.getElementById("minisymposiumForm");
const root = createRoot(container);
root.render(
  <AppProvider>
    <GlobalContainer>
      <App />
    </GlobalContainer>
  </AppProvider>
);
