import { infiniteQueryOptions } from "@tanstack/react-query";
import { axiosInstance } from "../axios";
import { API_ROUTES } from "../reactQuery/ApiRouts";
import type { MoviesResponse } from "../../../interface";

const fetchMovies = async (page: number = 1): Promise<MoviesResponse> => {
  const data = await axiosInstance.get(`${API_ROUTES.moviePage}${page}`);
  return data.data;
};

const fetSeries = async (page: number): Promise<MoviesResponse> => {
  const data = await axiosInstance.get(`${API_ROUTES.tvPage}${page}`);
  return data.data;
};

const Movies = () => {
  return infiniteQueryOptions({
    queryKey: ["movies"],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => fetchMovies(pageParam),
    getNextPageParam: (lastPage) => {
      // Guard the object itself
      if (!lastPage) return undefined;

      // Guard all properties you access
      const { page, total_pages, results } = lastPage;

      // Check if necessary properties exist
      if (
        typeof page !== "number" ||
        typeof total_pages !== "number" ||
        !Array.isArray(results)
      ) {
        return undefined;
      }

      // The original logic is fine here, as all properties are now guaranteed to exist
      if (page < total_pages) {
        return page + 1;
      }

      return undefined;

      // return lastPage.total_pages > lastPage.page? lastPage.page + 1 : undefined
    },
  });
};

const Series = () => {
  return infiniteQueryOptions({
    queryKey: ["series"],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => fetSeries(pageParam),
    getNextPageParam: (lastPage) => {
      // Guard the object itself
      if (!lastPage) return undefined;

      // Guard all properties you access
      const { page, total_pages, results } = lastPage;

      // Check if necessary properties exist
      if (
        typeof page !== "number" ||
        typeof total_pages !== "number" ||
        !Array.isArray(results)
      ) {
        return undefined;
      }

      // The original logic is fine here, as all properties are now guaranteed to exist
      if (page < total_pages) {
        return page + 1;
      }

      return undefined;

      // return lastPage.total_pages > lastPage.page? lastPage.page + 1 : undefined
    },
  });
};

export const FilmQueries = {
  seriesPage: Series,
  moviePage: Movies,
};
