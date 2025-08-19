import {
  Movie_Card1,
  Movie_Container,
  Movie_header,
  Movie_styled,
} from "./Styled";
import { useContext, useEffect } from "react";
import { BooleanContext } from "../../App";
import SideBar from "../../components/sideBar/SideBar";
import { ICategories } from "../../interface";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/navbar/Nav";
import Loader2 from "../../components/loader2/Loader2";
import { axiosInstance } from "../../components/network/axios";
import { APIKEYS } from "../../components/network/reactQuery/ApiKeys";
import { API_ROUTES } from "../../components/network/reactQuery/ApiRouts";
import { ApiResponse } from "../../components/network/ApiResponse";
import { useQuery } from "@tanstack/react-query";

const Movies = () => {
  const active = useContext(BooleanContext);
  const [Movies, setMovies] = useState<ICategories[]>([]);
  const [totalPage, setTotalPage] = useState<number>(1);
  let [page, setPage] = useState<number>(1);
  const [hasMore, sethasMore] = useState<boolean>(false);
  const navigate = useNavigate();
  let [ErrMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [ref, inView] = useInView();

  //fetch Latest movies
  const { refetch } = useQuery({
    queryKey: [APIKEYS.moviesPages],
    queryFn: () => getMovies(page),
  });

  const getMovies = async (page: number) => {
    try {
      const response = await axiosInstance.get<ApiResponse>(
        `${API_ROUTES.moviePage}${page}`
      );
      setMovies((prev) => [...prev, ...response.data.results]);
      response.data.results ? setIsLoading(false) : setIsLoading(true);
      setTotalPage(response.data.total_pages);
      return response.data.results;
    } catch (error: any) {
      setErrMsg(error.message);
    }
  };

  //Infinit Scrolling
  useEffect(() => {
    if (Movies.length === 0) {
      sethasMore(false);
    } else {
      sethasMore(true);
    }
    
    if (Movies.length < totalPage) {
      if (Movies && page <= totalPage - 1) {
        setPage((page = page + 1));
        refetch();
      }
    } else {
      sethasMore(false);
    }
  }, [inView, Movies.length === 0]);

  //local storage to store movie id and media type function
  const StoreMovieId = (id: number, type: string) => {
    localStorage.setItem("ID", JSON.stringify(id));
    localStorage.setItem("media_type", JSON.stringify(type));
    navigate("/movieInfo");
  };

  return (
    <>
      <Movie_styled>
        {isLoading && (
          <Loader2 children={`${ErrMsg ? `${ErrMsg}` : "Loading..."}`} />
        )}
        <Nav />
        <SideBar />
        <Movie_header>
          <h3>Movies</h3>
          <img
            src="/icon/bars-staggered-solid (1).svg"
            alt="Photos"
            onClick={active?.toggler}
          />
        </Movie_header>
        <Movie_Container>
          {Movies.map((m, i) => (
            <Movie_Card1
              key={i}
              onClick={() => StoreMovieId(m.id, m.media_type)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                alt="picture"
              />
            </Movie_Card1>
          ))}
          {hasMore && <Loader children="Loading more ...." ref={ref} />}
        </Movie_Container>
      </Movie_styled>
    </>
  );
};

export default Movies;
