import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n/i18n"; // initialize i18n before App so it can access routes
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./style/index.scss";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
