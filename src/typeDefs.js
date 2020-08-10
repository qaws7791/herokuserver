import { gql } from "apollo-server-express";

export const typeDefs = gql`
type Query {
    hello: String!
    todos: [Todo]!
    me: User
    
}
type Todo {
    id: ID!
    name: String!
    did:Boolean
    username:String
}
type User {
    username: String!
    hashedPassword: String!
}

type Mutation {
    createTodo(name: String!,did: Boolean): Todo!
    deleteTodo(id: ID!): Boolean!
    updateTodo(id: ID!, name: String!,did:Boolean): Todo!
    updateDid(id: ID!, did:Boolean): Todo!
    register(username: String!, password:String!): Boolean!
    login(username: String!, password:String!): Boolean!
}
`;
