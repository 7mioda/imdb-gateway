import DataSource from './genres.providers'
import schema from './genres.schema';
import resolvers from './genres.resolvers'


export default {
    genresApi: new DataSource(),
    schema,
    resolvers
}
