export default {
  Query: {
    async Shows(obj, args, { dataSources }, info) {
      return await dataSources.showsApi.getShows();
    },
  }
}
