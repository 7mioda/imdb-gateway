export default {
    Query: {
        async Movies(obj, args, { dataSources }, info) {
            return await dataSources.moviesApi.getMovies();
        },
    },
    Movie: {
        async genres({ genre_ids: genres }, args, { dataSources }, info) {
            const genresPromises =  genres.map( genre => dataSources.genresApi.getGenreById('movie', genre));
            return await Promise.all(genresPromises);
        },
    }
}
