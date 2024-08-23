import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from 'react-redux';
import store from './store';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} theme={theme}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
    
);