import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import Portuguese from "./messages/pt.json";
import English from "./messages/en.json";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const locale = navigator.language.split("-")[0];
let language;

switch (locale) {
  case "en":
    language = English;
    break;
  case "pt":
    language = Portuguese;
    break;
  default:
    language = Portuguese;
}

root.render(
  <StrictMode>
    <IntlProvider locale={locale} messages={language}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProvider>
  </StrictMode>
);
