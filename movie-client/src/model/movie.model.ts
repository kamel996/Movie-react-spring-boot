export interface IMovie {
    id: {
        timestamp: number;
        date: string;
    };
    imdbId: string;
    title: string;
    releaseDate: string;
    trailerLink: string;
    poster: string;
    genres: string[];
    backdrops: string[];
    reviewIds: {id: string, body: string}[];
}
