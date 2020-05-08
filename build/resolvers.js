"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;

var _Cat = require("./models/Cat");

require("@babel/polyfill");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var resolvers = {
  Query: {
    hello: function hello() {
      return 'hello';
    },
    cats: function cats() {
      return _Cat.Cat.find();
    }
  },
  Mutation: {
    createCat: function () {
      var _createCat = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, _ref) {
        var name, cat;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = _ref.name;
                cat = new _Cat.Cat({
                  name: name
                });
                _context.next = 4;
                return cat.save().then(function () {
                  return console.log({
                    name: name
                  });
                });

              case 4:
                return _context.abrupt("return", cat);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createCat(_x, _x2) {
        return _createCat.apply(this, arguments);
      }

      return createCat;
    }()
  }
};
exports.resolvers = resolvers;
//# sourceMappingURL=resolvers.js.map