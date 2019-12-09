import { createServer } from 'http';
import {ApolloServer,gql
} from "apollo-server-express"
import Express from 'express'
import 'dotenv/config'

import schema from './domain';



const { PORT: port } = process.env;

const apolloServer = new ApolloServer( schema );
const app = Express();
apolloServer.applyMiddleware({ app });

const server = createServer(app);
if ( server ) {
    apolloServer.installSubscriptionHandlers(server);
    server.listen({ port }, () => console.log(`Server ready at ${port}`));
}
