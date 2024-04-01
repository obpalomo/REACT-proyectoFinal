import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";


import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { SessionProvider } from "./contexts/SessionContext.jsx";
import "./i18n.js";
import { CookiesProvider } from "react-cookie";
import { CookieAcceptProvider } from "./contexts/CookieAccetpContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <CookieAcceptProvider>
        <SessionProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SessionProvider>
      </CookieAcceptProvider>
    </CookiesProvider>
  </React.StrictMode>
);
