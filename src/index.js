import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import LayoutBase from "./layout/Base";
import Teste from "layout/auth/Teste";

import "./assets/scss/style.scss";
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/login" render={props => <Teste {...props}/>} />
            <Route path="/" render={props => <LayoutBase {...props} />} />
        </Switch>
    </Router>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
