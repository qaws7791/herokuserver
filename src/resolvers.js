import { Todo } from "./models/Todo";
import "@babel/polyfill";

export const resolvers = {
    Query: {
        hello: () => 'hello',
        Todos: () => Todo.find()
    },
    Mutation: {
        createTodo: async (_, { name, data }) => {
           const Todo = new Todo({ name,data, did: false });
           await Todo.save().then(() => console.log({name}));
           return Todo;
        }
    }
};




