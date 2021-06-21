/* eslint-disable camelcase */
export interface IMovie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string | null;
}

export interface IPaginationMovies {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export type ICache<T> = {
  get: (name: string) => Promise<T | undefined>;
  set: (name: string, data: T) => Promise<void>;
  has: (name: string) => Promise<boolean>;
  delete: (...names: string[]) => Promise<void>;
  clear: () => void;
};
