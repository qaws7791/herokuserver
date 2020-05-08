import { Cat } from "./models/Cat";
import "@babel/polyfill";

export const resolvers = {
    Query: {
        hello: () => 'hello',
        cats: () => Cat.find()
    },
    Mutation: {
        createCat: async (_, { name }) => {
           const cat = new Cat({ name });
           await cat.save().then(() => console.log({name}));
           return cat;
        }
    }
};




