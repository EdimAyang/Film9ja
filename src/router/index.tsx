import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import WithSuspense from "../lib/utilis/suspense";


//pages
const HomePage = lazy(() => import("../pages/homepage/Home"));

const SearchPage = lazy(() => import("../pages/searchpage/Search"));

const MoviesPage = lazy(() => import("../pages/moviespage/Movies"));

const TvPage = lazy(() => import("../pages/tvSeriespage/TV"));

const MovieInfoPage = lazy(() => import("../pages/movieInfo/Info"));

const VideoPlayerPage = lazy(() => import("../pages/videoplayer/Vplayer"));

const TvInfoPage = lazy(() => import("../pages/tvinfo/TvInfo"));

const NotFoundPage = lazy(() => import("../pages/404page/NotFound"));

const LayoutPage = lazy(() => import("../Layout"));

const ErrorPage = lazy(()=> import("../pages/500page"));



//Router
export const Router = createBrowserRouter([
  {
    id:'App',
    errorElement: WithSuspense(<ErrorPage/>),
    element:WithSuspense(<LayoutPage />),
    children: [
      {
        path: "/",
        element: WithSuspense(<HomePage />),
      },
      {
        path: "/searchpage",
        element: WithSuspense(<SearchPage />),
      },
      {
        path: "/moviespage",
        element: WithSuspense(<MoviesPage />),
      },
      {
        path: "/tvSeriespage",
        element: WithSuspense(<TvPage />),
      },
      {
        path: "/videoplayer",
        element: WithSuspense(<VideoPlayerPage />),
      },
      {
        path: "/*",
        element: WithSuspense(<NotFoundPage />),
      },
      {
        path:'/movieInfo/:id',
        element: WithSuspense(<MovieInfoPage />),
      },
      {
        path: "/tvInfo/:id",
        element: WithSuspense(<TvInfoPage />),
      },
    ],
  },
]);
