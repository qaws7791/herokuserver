"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = void 0;

var _apolloServerExpress = require("apollo-server-express");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ntype Query {\n    hello: String!\n    todos: [Todo]!\n}\ntype Todo {\n    id: ID!\n    name: String!\n    did:Boolean\n}\n\ntype Mutation {\n    createTodo(name: String!,did: Boolean): Todo!\n    deleteTodo(id: ID!): Boolean!\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var typeDefs = (0, _apolloServerExpress.gql)(_templateObject());
exports.typeDefs = typeDefs;
//# sourceMappingURL=typeDefs.js.map