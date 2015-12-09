"use strict";
var main_tsx_1 = require('./main.tsx');
var React = require('react');
var searchbar_tsx_1 = require('./components/searchbar/searchbar.tsx');
var react_router_1 = require("react-router");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (React.createElement(react_router_1.Route, {path: "/", component: main_tsx_1.default}, React.createElement(react_router_1.IndexRoute, {component: searchbar_tsx_1.default})));
