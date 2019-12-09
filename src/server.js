import { createServer } from 'http';
import {ApolloServer,gql
} from "apollo-server-express"
import Express from 'express'
import 'dotenv/config'

import schema from './domain';



const { PORT } = process.env;
const port = PORT || 7000;
const apolloServer = new ApolloServer( schema );
const app = Express();
apolloServer.applyMiddleware({ app });

const server = createServer(app);
if ( server ) {
    apolloServer.installSubscriptionHandlers(server);
    server.listen({ port }, () => console.log(`Server ready at ${port}`));
}
