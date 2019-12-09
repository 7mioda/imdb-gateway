import { gql } from 'apollo-server-express';

export default gql`
    type Movie {
        description: String
    }

    extend type Query {
        Movies: [Movie]
    }

`;
