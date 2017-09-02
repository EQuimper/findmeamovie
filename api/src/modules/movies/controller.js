// @flow

import * as theMovieDBAPIService from '../../services/theMovieDBAPI/movie';

export async function getPopularMovies(req, res) {
  const data = await theMovieDBAPIService.getPopularMovies(req, res);

  return res.status(200).json({
    movies: data.movies,
    moviesCount: data.movies.length,
    page: data.page,
  });
}