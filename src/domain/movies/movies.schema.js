import { gql } from 'apollo-server-express';

export default gql`
    type Movie {
        id: ID
        title: String
        description: String
        adult: Boolean
        backdrop_path: String
        poster_path: String
        genre_ids: [Int]
        original_language: String
        original_title: String
        overview: String
        release_date: Date
        popularity: Float
        video: Boolean
        vote_average: Int
        vote_count: Int
        rating: Int
    }

    type MoviePagination implements PaginationResult {
        page: Int
        total_results: Int
        total_pages: Int
        results: [ Movie ]
    }
    

    extend type Query {
        Movies(page: Int = 1): MoviePagination
    }

`;
