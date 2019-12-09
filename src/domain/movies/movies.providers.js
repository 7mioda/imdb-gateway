import { RESTDataSource } from 'apollo-datasource-rest';


const { API: api } = process.env;

export default class StadiumAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `${api}/movie`;
    }

    async getMovies() {
        return this.get('/');
    }

}
