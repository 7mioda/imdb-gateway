import DataSource from './movies.providers'
import schema from './movies.schema';
import resolvers from './movies.resolvers'


export default {
    moviesApi: new DataSource(),
    schema,
    resolvers
}
