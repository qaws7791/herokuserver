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
        },
        updateTodo: async (_, { id, name, did }) => {
            await Todo.findByIdAndUpdate(id,{name:name, did:did});
            return Todo.findById(id);
        },
        updateDid: async (_, { id,did }) => {
            await Todo.findByIdAndUpdate(id,{did:did});
            return Todo.findById(id);
        }

    }
};




