import {
  Hero,
  Info_Nav,
  Info_Wrapper,
  TV_Info,
  Outlet_wrapper,
  Poster_img,
  Trailer_Wrapper,
} from "./Style";
import { useEffect, useState } from "react";
import { IMovieTv } from "../../interface";
import { Link } from "react-router-dom";
import Loader2 from "../../components/loader2/Loader2";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../components/network/axios";
import { API_ROUTES } from "../../components/network/reactQuery/ApiRouts";
import { ApiResponse } from "../../components/network/ApiResponse";
import { useQuery } from "@tanstack/react-query";
import { APIKEYS } from "../../components/network/reactQuery/ApiKeys";

//pages
import Overview from "../overviewpage/Overview";
import Similar from "../similarpage/Similar";
import Company from "../company/Company";

type Pagetype = "OverView" | "Similar" | "Company";
const TvInfo = () => {
  const [TV, setTV] = useState<IMovieTv>();
  let [ErrMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const [activeSubPage, setActiveSubPage] = useState<Pagetype>("OverView");

  //get TV id and type
  const ID = JSON.parse(localStorage.getItem("ID") as string);

  //fetch movie details
  const { data } = useQuery({
    queryKey: [APIKEYS.tvinfo],
    queryFn: () => getMoviesByID(ID),
  });

  const getMoviesByID = async (id: number) => {
    try {
      const response = await axiosInstance.get<ApiResponse<IMovieTv>>(
        `${API_ROUTES.tvInfo}${id}`
      );
      setTV(response.data);
      response.data.results ? setIsLoading(true) : setIsLoading(false);
      return response.data;
    } catch (error: any) {
      setErrMsg(error.message);
    }
  };

  useEffect(() => {
    if (data) setTV(data);
  }, [data]);

  const handleNav = () => {
    navigate("/videoplayer");
  };

  const handleSubPageRender = () => {
    if (activeSubPage === "OverView") {
      return <Overview />;
    } else if (activeSubPage === "Similar") {
      return <Similar />;
    } else {
      return <Company />;
    }
  };

  // useEffect(()=>{
  // handleSubPageRender()
  // },[data])

  return (
    <TV_Info>
      {isLoading && (
        <Loader2 children={`${ErrMsg ? `${ErrMsg}` : "Loading..."}`} />
      )}
      <Hero>
        <span onClick={()=> window.history.back()}>
          <img src="icon/arrow-left-solid.svg" alt="picture" />
        </span>
        <img
          src={`https://image.tmdb.org/t/p/w500${TV?.backdrop_path}`}
          alt="picture"
          className="bg"
        />
        <Poster_img>
          <img
            src={`https://image.tmdb.org/t/p/w500${TV?.poster_path}`}
            alt="picture"
          />
        </Poster_img>
      </Hero>
      <Trailer_Wrapper>
        <div>
          <h4>Trailer</h4>
          <img
            src="/icon/youtube-brands.svg"
            alt="youtube logo"
            onClick={handleNav}
          />
        </div>
        <div>
          <h4>Rating</h4>
          <span>{TV?.vote_average}</span>
        </div>

        <div>
          <h4>Date</h4>
          <span>{TV?.release_date}</span>
        </div>
      </Trailer_Wrapper>
      <Info_Wrapper>
        <Info_Nav>
          <h4 onClick={() => setActiveSubPage("OverView")}>Overview</h4>

          <h4 onClick={() => setActiveSubPage("Similar")}>Similar</h4>

          <h4 onClick={() => setActiveSubPage("Company")}>Company</h4>
        </Info_Nav>
        <Outlet_wrapper>{handleSubPageRender()}</Outlet_wrapper>
      </Info_Wrapper>
    </TV_Info>
  );
};

export default TvInfo;
