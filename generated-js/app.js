"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var searchbar_tsx_1 = require('./components/searchbar/searchbar.tsx');
var React = require('react');
var ReactDOM = require('react-dom');
var AppComponent = (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        _super.call(this);
    }
    AppComponent.prototype.render = function () {
        return (React.createElement("div", {className: "container"}, React.createElement(searchbar_tsx_1.default, null)));
    };
    return AppComponent;
})(React.Component);
ReactDOM.render(React.createElement(AppComponent, null), document.getElementById('app'));
