"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;

var _Todo = require("./models/Todo");

require("@babel/polyfill");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var resolvers = {
  Query: {
    hello: function hello() {
      return 'hello';
    },
    todos: function todos() {
      return _Todo.Todo.find();
    }
  },
  Mutation: {
    createTodo: function () {
      var _createTodo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, _ref) {
        var name, newTodo;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = _ref.name;
                newTodo = new _Todo.Todo({
                  name: name,
                  did: false
                });
                _context.next = 4;
                return newTodo.save().then(function () {
                  return console.log({
                    name: name
                  });
                });

              case 4:
                return _context.abrupt("return", newTodo);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createTodo(_x, _x2) {
        return _createTodo.apply(this, arguments);
      }

      return createTodo;
    }(),
    deleteTodo: function () {
      var _deleteTodo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_, _ref2) {
        var id;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _ref2.id;
                _context2.next = 3;
                return _Todo.Todo.findByIdAndRemove(id);

              case 3:
                return _context2.abrupt("return", true);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function deleteTodo(_x3, _x4) {
        return _deleteTodo.apply(this, arguments);
      }

      return deleteTodo;
    }()
  }
};
exports.resolvers = resolvers;
//# sourceMappingURL=resolvers.js.map