/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/react-router/history.d.ts"/>
/// <reference path="../typings/react-router/react-router.d.ts"/>

import Main from './main.tsx';
import * as React from 'react';
import SearchBar from './components/searchbar/searchbar.tsx';

import { Router, Route, Redirect, IndexRoute } from "react-router";
import createHistory from "history/lib/createBrowserHistory";

export default (
    <Route path="/" component={Main}>
      <IndexRoute component={SearchBar}/>
    </Route>

);
