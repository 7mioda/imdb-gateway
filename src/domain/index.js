import { gql } from 'apollo-server-express';
import {merge} from 'lodash';
import movies from './movies';

const domains = [movies];

const root = gql`
    scalar Date

    type Query {
        root: String
    }

    type Mutation {
        root:String
    }
`;


export default {
    typeDefs: [root, ...domains.map(({ schema }) => schema)],
    resolvers: merge(domains.map(({ resolvers }) => resolvers)),
    dataSources: () => merge(domains.map(({ resolvers, schema, ...rest }) => rest))
}



