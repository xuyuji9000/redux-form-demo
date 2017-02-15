import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";

import store from "./store";
import Layout from "./components/Layout";
import ItemList from "./components/ItemList.js";
import Form from "./components/Form.js";

// Redux 
const App = function() {
    return (
        <Provider store={store}>
            <Layout></Layout>
        </Provider>
    )
};

render(
    <App></App>,
    document.getElementById('root')
);
