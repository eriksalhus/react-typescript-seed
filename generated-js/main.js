"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.apply(this, arguments);
    }
    Main.prototype.render = function () {
        return (React.createElement("div", {className: "container"}, React.createElement("div", null, "Erik tester"), this.props.children));
    };
    return Main;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Main;
