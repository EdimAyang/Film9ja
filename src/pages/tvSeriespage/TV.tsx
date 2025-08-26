import { TV_Card1, TV_Container, TV_header, TV_styled } from "./Style";
import { useContext, useEffect } from "react";
import { BooleanContext } from "../../App";
import SideBar from "../../components/sideBar/SideBar";
import { ICategories } from "../../interface";
import { useState } from "react";
import Loader from "../../components/loader/Loader";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/navbar/Nav";
import Loader2 from "../../components/loader2/Loader2";
import { axiosInstance } from "../../components/network/axios";
import { APIKEYS } from "../../components/network/reactQuery/ApiKeys";
import { API_ROUTES } from "../../components/network/reactQuery/ApiRouts";
import { ApiResponse } from "../../components/network/ApiResponse";
import { useQuery } from "@tanstack/react-query";

const TV = () => {
  const active = useContext(BooleanContext);
  const [TV, setTV] = useState<ICategories[]>([]);
  const [totalPage, setTotalPage] = useState<number>(1);
  let [page, setPage] = useState<number>(1);
  const [hasMore, sethasMore] = useState<boolean>(false);
  const navigate = useNavigate();
  let [ErrorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [ref, inView] = useInView();

  //fetch Latest movies
  const { refetch } = useQuery({
    queryKey: [APIKEYS.seriesPages],
    queryFn: () => getMovies(page),
  });

  const getMovies = async (page: number) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get<ApiResponse>(
        `${API_ROUTES.tvPage}${page}`
      );
      setTV((prev) => [...prev, ...response.data.results]);
      response.data.results ? setIsLoading(false) : setIsLoading(true);
      setTotalPage(response.data.total_pages);
      return response.data.results;
    } catch (error: any) {
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  //Infinit Scrolling
  useEffect(() => {
    if (TV.length === 0 || TV.length === totalPage) {
      sethasMore(false);
    } else {
      sethasMore(true);
    }

    if (inView) {
      if (TV.length < totalPage) {
        if (TV && page <= totalPage - 1) {
          setPage((page = page + 1));
          refetch();
        }
      } else {
        sethasMore(false);
      }
    }
  }, [inView, TV.length === 0, TV.length === totalPage]);

  //local storage to store movie id and media type function
  const StoreMovieId = (id: number, type: string) => {
    localStorage.setItem("ID", JSON.stringify(id));
    localStorage.setItem("media_type", JSON.stringify(type));
    navigate("/tvinfo");
  };

  return (
    <>
      {ErrorMsg && <Loader2 children={`${ErrorMsg}`} isLoad={isLoading} />}
      {isLoading && <Loader2 children="Loading..." isLoad={isLoading} />}
      <TV_styled>
        <Nav />
        <SideBar />
        <TV_header>
          <h3>TV Series</h3>
          <img
            src="/icon/bars-staggered-solid (1).svg"
            alt="Photos"
            onClick={active?.toggler}
          />
        </TV_header>
        <TV_Container>
          {TV.map((m, i) => (
            <TV_Card1 key={i} onClick={() => StoreMovieId(m.id, m.media_type)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                alt="picture"
              />
            </TV_Card1>
          ))}
          {hasMore && <Loader children="Loading more ...." ref={ref} />}
        </TV_Container>
      </TV_styled>
    </>
  );
};

export default TV;
