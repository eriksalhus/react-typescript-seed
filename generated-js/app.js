"use strict";
var React = require('react');
var react_router_1 = require("react-router");
var routes = require('./routes.tsx');
var ReactDOM = require('react-dom');
ReactDOM.render(React.createElement(react_router_1.Router, null, routes), document.getElementById('app'));
