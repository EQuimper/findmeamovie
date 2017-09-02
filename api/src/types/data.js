// @flow

export type MovieDBData = {
  "vote_count": number,
  "id": number,
  "video": boolean,
  "vote_average": number,
  "title": string,
  "popularity": number,
  "poster_path": string,
  "original_language": string,
  "original_title": string,
  "genre_ids": Array<number>,
  "backdrop_path": string,
  "adult": boolean,
  "overview": string,
  "release_date": Date,
};

export type PopularMovieData = {
  movieDbId: number,
  poster: string,
  title: string,
  releaseDate: Date,
};