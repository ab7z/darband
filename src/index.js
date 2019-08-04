import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {addLocaleData, IntlProvider} from "react-intl";
import messages_de from "./translations/de.json";
import de from "react-intl/locale-data/de";

addLocaleData([...de]);

const messages = {
    'de': messages_de
};

ReactDOM.render(
    <IntlProvider locale='de' messages={{...messages.de}}>
        <App />
    </IntlProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
