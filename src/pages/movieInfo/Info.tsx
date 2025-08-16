import {
  Hero,
  Info_Nav,
  Info_Wrapper,
  Movies_Info,
  Outlet_wrapper,
  Poster_img,
  Trailer_Wrapper,
} from "./Style";
import { useEffect, useState } from "react";
import { IMovieTv } from "../../interface";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader2 from "../../components/loader2/Loader2";
import { axiosInstance } from "../../components/network/axios";
import { API_ROUTES } from "../../components/network/reactQuery/ApiRouts";
import { ApiResponse } from "../../components/network/ApiResponse";
import { useQuery } from "@tanstack/react-query";
import { APIKEYS } from "../../components/network/reactQuery/ApiKeys";

const Info = () => {
  const [movie, setMovie] = useState<IMovieTv>();
  const navigate = useNavigate();
  let [ErrMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleNav = () => {
    navigate("/videoplayer");
  };

  //get movies id
  const ID = JSON.parse(localStorage.getItem("ID") as string);

  //fetch Latest movies
  const { data } = useQuery({
    queryKey: [APIKEYS.movieinfo],
    queryFn: () => getMoviesByID(ID),
  });

  const getMoviesByID = async (id: number) => {
    try {
      const response = await axiosInstance.get<ApiResponse<IMovieTv>>(
        `${API_ROUTES.movieInfo}${id}`
      );
      response.data.results ? setIsLoading(true) : setIsLoading(false);
      return response.data;
    } catch (error: any) {
      setErrMsg(error.message);
    }
  };

  useEffect(() => {
    if (data) {
      setMovie(data);
    }
  }, [data]);

  return (
    <Movies_Info>
      {isLoading && (
        <Loader2 children={`${ErrMsg ? `${ErrMsg}` : "Loading..."}`} />
      )}
      <Hero>
        <Link to="/">
          <img src="icon/arrow-left-solid.svg" alt="picture" />
        </Link>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
          alt="picture"
        />
        <Poster_img>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt="picture"
          />
        </Poster_img>
      </Hero>
      <Trailer_Wrapper>
        <div>
          <h4>Trailer</h4>
          {/* <Link to="/videoplayer"> */}
          <img
            src="/icon/youtube-brands.svg"
            alt="youtube logo"
            onClick={handleNav}
          />
          {/* </Link> */}
        </div>
        <div>
          <h4>Rating</h4>
          <span>{movie?.vote_average}</span>
        </div>

        <div>
          <h4>Date</h4>
          <span>{movie?.release_date}</span>
        </div>
      </Trailer_Wrapper>
      <Info_Wrapper>
        <Info_Nav>
          <h4>
            <Link to="overviewpage">Overview</Link>
          </h4>
          <h4>
            <Link to="similarpage">Similar</Link>
          </h4>
          <h4>
            <Link to="company">Company</Link>
          </h4>
        </Info_Nav>
        <Outlet_wrapper>
          <Outlet />
        </Outlet_wrapper>
      </Info_Wrapper>
    </Movies_Info>
  );
};

export default Info;
