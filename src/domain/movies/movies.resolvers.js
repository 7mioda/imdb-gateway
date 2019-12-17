export default {
    Query: {
        async Movies(obj, args, { dataSources }, info) {
            return await dataSources.moviesApi.getMovies();
        },
    }
}
