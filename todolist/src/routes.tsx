import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import CreateTodo from './pages/CreateTodo';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={CreateTodo} path="/create-todo" />
        </BrowserRouter>
    )
} 
export default Routes;

