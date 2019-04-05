import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import Base from './layouts/base/Base';
import Todo from './pages/todo/Todo';
import Done from './pages/done/Done';

import './index.css';

const store = createStore(() => {},
    applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Base>
                <Route exact path='/' component={Todo}/>
                <Route path='/done' component={Done}/>
            </Base>
        </BrowserRouter>
    </Provider>,

  document.getElementById('root')
);
