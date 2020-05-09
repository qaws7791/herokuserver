import { Todo } from "./models/Todo";
import "@babel/polyfill";

export const resolvers = {
    Query: {
        hello: () => 'hello',
        todos: () => Todo.find()
    },
    Mutation: {
        createTodo: async (_, { name }) => {
           const newTodo = new Todo({ name,did:false });
           await newTodo.save().then(() => console.log({ name }));
           return newTodo;
        },
        deleteTodo: async (_, { id }) => {
            await Todo.findByIdAndRemove(id);
            return true;
        }
    }
};




