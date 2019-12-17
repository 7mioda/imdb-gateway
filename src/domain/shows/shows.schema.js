import { gql } from 'apollo-server-express';

export default gql`
    type Show  {
        id: ID
        poster_path: String
        popularity: Float
        backdrop_path: String
        vote_average: Float
        overview: String
        first_air_date: Date
        origin_country: [String]
        genre_ids: [ID]
        original_language: String
        vote_count: Int
        name: String
        original_name: String
    }

    type ShowPagination implements PaginationResult {
        page: Int
        total_results: Int
        total_pages: Int
        results: [ Show ]
    }

    extend type Query {
        Shows(page: Int = 1): ShowPagination
    }

`;
