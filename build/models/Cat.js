"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cat = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Cat = _mongoose["default"].model('Cat', {
  name: String
});

exports.Cat = Cat;
//# sourceMappingURL=Cat.js.map