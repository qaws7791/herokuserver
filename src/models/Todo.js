import mongoose from "mongoose";

export const Todo = mongoose.model('Todo', { 
    name: String,
    did: Boolean,
    username:String

    });