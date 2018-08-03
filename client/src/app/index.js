import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";

import AppRouter from "./routers/AppRouter";
import store from "./store";

ReactDom.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    window.document.getElementById('app'));
