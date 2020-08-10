import { ApolloServer, gql } from 'apollo-server-express';
import express from "express";
import mongoose from "mongoose";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import  cookieParser from "cookie-parser";
import jwtMiddleware from './lib/jwtMiddleware';
import { verify } from 'jsonwebtoken';
// const mongodb_uri ="mongodb+srv://ad:ad@cluster0-uayz0.mongodb.net/graph?retryWrites=true&w=majority"
//mongodb://localhost:27017/graph






const startServer = async () => {
    const app = express();

    app.use(cookieParser());

    const PORT = process.env.PORT || 4000;

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({req,res}) =>  ({req, res})
        // context: ({ req, res}) => {
        //   const token = req.headers.authorization || '';
        //   res.cookie("id",token,{
        //     httpOnly:true,
        //     maxAge: 1000 * 60 * 60 * 24 * 7
        // });
        //   return res;
        // },
      });
    
    app.use((req, _,next) => {
      const accessToken = req.cookies['access'];
      
      try{
        const data = verify(accessToken,"33e86a4534354864399343");
        req.username = data.username;
      } catch {

      }
      next();
    });

      server.applyMiddleware({ app });

      await mongoose.connect("mongodb://localhost:27017/graph",{
           useNewUrlParser: true, 
           useUnifiedTopology: true
      });
      mongoose.set('useFindAndModify', false);
      
      app.listen(PORT, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
      );

};

startServer();