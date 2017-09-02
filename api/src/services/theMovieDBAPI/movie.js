// @flow

import axios from 'axios';

import type { MovieDBData, PopularMovieData } from '../../types';

import { themoviedbApi } from '../../../config/constants';
import { getMovieDBPoster } from '../../utils/helpers/getMovieDBPoster';

type GetPopularMovies = {
  movies: Array<MovieDBData>,
  page: number,
};

export async function getPopularMovies(req: Object): GetPopularMovies {
  const { page, posterHeight, posterWidth } = req.query;

  let url;
  if (process.env.API_KEY != null) {
    url = `${themoviedbApi.baseUrl}/${themoviedbApi.moviePopular}?api_key=${process
      .env.API_KEY}&page=${page || ''}`;
  }

  try {
    const { data } = await axios.get(url);

    const mData = transformMoviesResults(
      data.results,
      posterHeight,
      posterWidth,
    );

    return {
      movies: mData,
      page,
    };
  } catch (error) {
    throw error;
  }
}

function transformMoviesResults(
  results: Array<MovieDBData>,
  posterHeight: number,
  posterWidth: number,
): Array<PopularMovieData> {
  return results.reduce((arr: Array<PopularMovieData>, item) => {
    const movie = {
      movieDbId: item.id,
      poster: getMovieDBPoster(posterHeight, posterWidth, item.poster_path),
      title: item.title,
      releaseDate: item.release_date,
    };

    arr.push(movie);

    return arr;
  }, []);
}
