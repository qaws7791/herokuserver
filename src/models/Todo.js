import mongoose from "mongoose";

export const Todo = mongoose.model('Todo', { 
    date: Date,
    name: String,
    did: Boolean
});