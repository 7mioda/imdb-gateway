import { RESTDataSource } from 'apollo-datasource-rest';


const { API_URL: api, API_V3_KEY: key } = process.env;

export default class PeoplesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${api}person`;
  }

  async getPopularPeoples() {
    return this.get(`/popular?api_key=${key}`);
  }

  async getLatestPeoples() {
    return this.get(`/latest?api_key=${key}`);
  }

}
