import { gql } from 'apollo-server-express';

export default gql`
    
    enum GenreType {
        tv
        movie
    }
    
    type Genre {
        id: ID
        name: String
    }
    
    extend type Query {
        Genres(type: GenreType = "SHOW" ): [Genre]
    }

`;
