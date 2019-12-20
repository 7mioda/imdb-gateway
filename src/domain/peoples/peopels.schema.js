import { gql } from 'apollo-server-express';

export default gql`
    type People {
        id: ID
        birthday: Date
        place_of_birth: String
        known_for_department: String
        also_known_as: [String]
        deathday: Date
        name: String
        gender: Int
        biography: String
        popularity: Float
        profile_path: String
        adult: Boolean
        imdb_id: String
        homepage: String

    }

    type PeoplePagination implements PaginationResult {
        page: Int
        total_results: Int
        total_pages: Int
        results: [ People ]
    }


    extend type Query {
        Peoples(page: Int = 1): PeoplePagination
    }

`;
