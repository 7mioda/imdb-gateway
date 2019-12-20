import DataSource from './peopels.providers';
import schema from './peopels.schema';
import resolvers from './peopels.resolvers';


export default {
  peoplesApi: new DataSource(),
  schema,
  resolvers
}
