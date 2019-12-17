import { RESTDataSource } from 'apollo-datasource-rest';


const { API_URL: api, API_V3_KEY: key } = process.env;

export default class MoviesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `${api}movie`;
    }

    async getMovies() {
        return this.get(`/popular?api_key=${key}`);
    }

}
