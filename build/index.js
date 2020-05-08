"use strict";

var _apolloServerExpress = require("apollo-server-express");

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _typeDefs = require("./typeDefs");

var _resolvers = require("./resolvers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var startServer = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var app, PORT, server;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            app = (0, _express["default"])();
            PORT = process.env.PORT || 4000;
            server = new _apolloServerExpress.ApolloServer({
              typeDefs: _typeDefs.typeDefs,
              resolvers: _resolvers.resolvers
            });
            server.applyMiddleware({
              app: app
            });
            _context.next = 6;
            return _mongoose["default"].connect('mongodb://localhost:27017/graph', {
              useNewUrlParser: true,
              useUnifiedTopology: true
            });

          case 6:
            app.listen(PORT, function () {
              return console.log("\uD83D\uDE80 Server ready at http://localhost:4000".concat(server.graphqlPath));
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function startServer() {
    return _ref.apply(this, arguments);
  };
}();

startServer();
//# sourceMappingURL=index.js.map