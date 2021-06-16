import { get } from 'src/services/fetch';
import { IMovie } from 'src/types/data';

export const searchMovies = async (query: string, page: number = 1) => get<IMovie>(`/search/movie`, { query, page });
