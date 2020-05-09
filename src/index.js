import { ApolloServer, gql } from 'apollo-server-express';
import express from "express";
import mongoose from "mongoose";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import "cors";
// const mongodb_uri ="mongodb+srv://ad:ad@cluster0-uayz0.mongodb.net/graph?retryWrites=true&w=majority"
//mongodb://localhost:27017/graph






const startServer = async () => {
    const app = express();
    app.use(cors());
    const PORT = process.env.PORT || 4000;

    const server = new ApolloServer({
        typeDefs,
        resolvers,
      });
      
      server.applyMiddleware({ app });
      
      await mongoose.connect("mongodb+srv://ad:ad@cluster0-uayz0.mongodb.net/graph?retryWrites=true&w=majority",{
           useNewUrlParser: true, 
           useUnifiedTopology: true
      });

      app.listen(PORT, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
      );

};

startServer();