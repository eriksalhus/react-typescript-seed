"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var SearchBar = (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar() {
        _super.apply(this, arguments);
    }
    SearchBar.prototype.render = function () {
        return (React.createElement("div", {className: "container"}, React.createElement("form", null, React.createElement("div", {className: "form-group"}, React.createElement("label", null, "Search by user id"), React.createElement("input", {type: "text", className: "form-control", id: "search", placeholder: "Search by user id"})))));
    };
    return SearchBar;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchBar;
