export const countMedias = (results, type) => {
    const totals = results.reduce((acc, el) => {
        if (el.media_type === "movie") acc.totalMovies += 1;
        if (el.media_type === "tv") acc.totalTvShows += 1;
        return acc;
    }, { totalMovies: 0, totalTvShows: 0 });


    if (type === "movie") totals.totalMovies = results.length;
    if (type === "tv") totals.totalTvShows = results.length;

    return totals;
}