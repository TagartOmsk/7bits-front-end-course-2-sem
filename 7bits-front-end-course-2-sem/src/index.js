import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux';

import BaseLayout from './layouts/base/BaseLayout';
import PlainLayout from './layouts/plain/PlainLayout';
import Todo from './pages/todo/Todo';
import Done from './pages/done/Done';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

import './index.css';

import store from './store/store'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/signin' render={() => (
                    <PlainLayout>
                        <Route exact path='/signin' component={Login}/>
                    </PlainLayout>
                )}/>
                <Route path='/signup' render={() => (
                    <PlainLayout>
                        <Route exact path='/signup' component={Signup}/>
                    </PlainLayout>
                )}/>
                <Route path='/' render={() => (
                    <BaseLayout>
                        <Route exact path='/' component={Todo}/>
                        <Route path='/done' component={Done}/>
                    </BaseLayout>
                )}/>
            </Switch>
        </BrowserRouter>
    </Provider>,

  document.getElementById('root')
);
