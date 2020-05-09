"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Todo = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Todo = _mongoose["default"].model('Todo', {
  name: String,
  did: Boolean
});

exports.Todo = Todo;
//# sourceMappingURL=Todo.js.map