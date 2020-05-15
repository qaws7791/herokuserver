import { gql } from "apollo-server-express";

export const typeDefs = gql`
type Query {
    hello: String!
    todos: [Todo]!
}
type Todo {
    id: ID!
    name: String!
    did:Boolean
}

type Mutation {
    createTodo(name: String!,did: Boolean): Todo!
    deleteTodo(id: ID!): Boolean!
    updateTodo(id: ID!, name: String!,did:Boolean): Todo!
    updateDid(id: ID!, did:Boolean): Todo!
}
`;
