import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@fontsource-variable/instrument-sans";
import { AlertProvider } from "./util/AlertProvider.tsx";
import { LinkProvider } from "./util/DataProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AlertProvider>
      <LinkProvider>
        <App />
      </LinkProvider>
    </AlertProvider>
  </React.StrictMode>
);
