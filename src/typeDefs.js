import { gql } from "apollo-server-express";

export const typeDefs = gql`
type Query {
    hello: String!
    todos: [Todo]!
}
type Todo {
    id: ID!
    name: String!
    data: String!,
    did: Boolean
}

type Mutation {
    createTodo(name: String!,data:String!): Todo!
}
`;
