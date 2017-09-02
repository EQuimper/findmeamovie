// @flow

import { themoviedbApi } from '../../../config/constants';

/**
 * getMovieDBPoster()
 *
 * get the poster with a certain dimension
 *
 * @param {number} height
 * @param {number} width
 * @param {string} posterPath
 *
 * @return string
 */
export function getMovieDBPoster(height: number, width: number, posterPath: string): string {
  return `${themoviedbApi.posterUrl}/w${width}_and_h${height}_bestv2${posterPath}`;
}