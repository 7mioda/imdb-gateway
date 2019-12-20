import { gql } from 'apollo-server-express';
import {merge} from 'lodash';
import movies from './movies';
import shows from './shows';
import genres from './genres';
import peoples from './peoples';

const domains = [movies, shows, genres, peoples];

const root = gql`
    scalar Date
    
    interface PaginationResult {
        page: Int
        total_results: Int
        total_pages: Int
    }
    
    type Query {
        root: String
    }

    type Mutation {
        root:String
    }
`;

const rootResolvers = {
    PaginationResult: {
        __resolveType(obj, context, info){
            console.log(obj);
            if(obj.results[0].first_air_date){
                return 'ShowPagination';
            }

            return 'MoviePagination';
        },
    },
};


export default {
    typeDefs: [root, ...domains.map(({ schema }) => schema)],
    resolvers: domains.reduce((acc, { resolvers }) => merge({}, acc, resolvers), rootResolvers),
    dataSources: () => merge(
      domains.reduce((acc, { resolvers, schema, ...rest }) => ({ ...acc, ...rest }), {})
    )
}



