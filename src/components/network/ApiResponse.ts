export interface ApiResponse<T extends any = any> {
  backdrop_path: string;
  id: number;
  overview: string;
  poster_path: string;
  releaseDate: string;
  title: string;
  popularity: number;
  name: string;
  original_name: string;
  original_title: string;
  origin_country: string;
  vote_average: number;
  release_date: string;
  production_companies: [];
  media_type: string;
  message: string;
  status: number;
  results: T;
  total_pages: number;
  success: boolean;
}
