export default {
  Query: {
    async Peoples(obj, args, { dataSources }, info) {
      return await dataSources.peoplesApi.getPopularPeoples();
    },
  }
}
