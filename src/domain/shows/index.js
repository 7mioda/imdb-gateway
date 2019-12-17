import DataSource from './shows.providers'
import schema from './shows.schema';
import resolvers from './shows.resolvers'


export default {
  showsApi: new DataSource(),
  schema,
  resolvers
}
