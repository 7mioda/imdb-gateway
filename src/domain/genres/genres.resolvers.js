export default {
    Query: {
        async Genres(obj, { type }, { dataSources }, info) {
             const { genres } = await dataSources.genresApi.getGenres(type);
            return genres
        },
    }
}
