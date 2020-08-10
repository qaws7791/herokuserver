import { Todo } from "./models/Todo";
import { User } from "./models/User";
import "@babel/polyfill";

export const resolvers = {
    Query: {
        hello: () => 'hello',
        todos: () => Todo.find(),
        me: (_,__, { req }) => {
            if(!req.username){
                return null;
            }
            return User.findByUsername(req.username);
        }
    },
    Mutation: {
        createTodo: async (_, { name },{req}) => {
           const newTodo = new Todo({ name,did:false,username:req.username });
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
        },
        register: async (_, { username, password }) => {
            // const exists = await User.findByUsername(username);
            // if(exists) {
            //     return false;
            // }
            
            const newUser = new User({ username});
            await newUser.setPassword(password);
            await newUser.save();
            return true;

        },
        login: async (_, { username, password},{req,res}) => {
            
            if(!username || !password) {
                console.log("1");
                return false;
            }

            try {
                const user = await User.findByUsername(username);
                if(!user) {
                    console.log("2");
                    return false;
                }
                const valid = await user.checkPassword(password);
                if(!valid){

                    console.log("3");
                    return false;
                }
                const token = user.generateToken();
                res.cookie("access",token,{
                    httpOnly:true,
                    maxAge: 1000 * 60 * 60 * 24 * 7,
                    expire:60 * 60 * 24 * 7
                });
                return true;
            } catch(e){
                console.log(e);
                return false;
            }
        }

    }
};




