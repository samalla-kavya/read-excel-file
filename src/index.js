import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EmpInfo from './Components/components/EmpInfo'
import { Provider } from 'react-redux';
import  store  from "./store";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/Emp/:id" component={EmpInfo} />
            </Switch>
        </Provider>
    </Router>

    , document.getElementById('root'));
