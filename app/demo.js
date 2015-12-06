"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var Demo = (function (_super) {
    __extends(Demo, _super);
    function Demo() {
        _super.call(this);
    }
    Demo.prototype.render = function () {
        return (React.createElement("div", {className: "form-group"}, React.createElement("label", null, "Search by user id"), React.createElement("input", {type: "text", className: "form-control", id: "search", placeholder: "Search by user id"})));
    };
    return Demo;
})(React.Component);
ReactDOM.render(React.createElement(Demo, null), document.getElementById('app'));
