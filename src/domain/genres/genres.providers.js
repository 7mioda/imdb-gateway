import { RESTDataSource } from 'apollo-datasource-rest';


const { API_URL: api, API_V3_KEY: key } = process.env;

export default class GenresAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `${api}genre`;
    }

    async getGenres(type) {
        return this.get(`/${type}/list?api_key=${key}`);
    }

    async getGenreById(type, genreId) {
        const { genres } = await this.get(`/${type}/list?api_key=${key}`);
        return genres.find(({ id }) => genreId === id)
    }

}
