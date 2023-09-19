import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./styles/index.css"

import { addLocaleData, IntlProvider } from "react-intl"
import de from "react-intl/locale-data/de"
import messages_de from "./translations/de.json"

addLocaleData([...de])

const messages = {
  de: messages_de,
}

ReactDOM.render(
  <IntlProvider
    locale='de'
    messages={{ ...messages.de }}
  >
    <App />
  </IntlProvider>,
  document.getElementById("root")
)
