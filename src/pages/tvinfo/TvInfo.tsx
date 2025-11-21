import {
  Hero,
  Info_Nav,
  Info_Wrapper,
  TV_Info,
  Outlet_wrapper,
  Poster_img,
  Trailer_Wrapper,
} from "./Style";
import { useState } from "react";
import { IMovieTv } from "../../interface";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../components/network/axios";
import { API_ROUTES } from "../../components/network/reactQuery/ApiRouts";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import Overview from "../../components/overview/Overview";
import Similar from "../../components/similarpage/Similar";
import Company from "../../components/company/Company";

type Pagetype = "OverView" | "Similar" | "Company";
const TvInfo = () => {
  const navigate = useNavigate();
  const [activeSubPage, setActiveSubPage] = useState<Pagetype>("OverView");
  const { id } = useParams<{ id: any }>();

  const getMoviesByID = async (id: any) => {
    const { data } = await axiosInstance.get<IMovieTv>(
      `${API_ROUTES.tvInfo}${id}`
    );
    console.log(data);
    return data;
  };

  //fetch movie details
  const { data } = useSuspenseQuery({
    queryKey: ["tvinfo", id],
    queryFn: () => getMoviesByID(id),
  });

  const handleNav = () => {
    navigate("/videoplayer");
  };

  const handleSubPageRender = () => {
    if (activeSubPage === "OverView") {
      return <Overview data={data.overview} />;
    } else if (activeSubPage === "Similar") {
      return <Similar />;
    } else {
      return <Company data={data.production_companies} />;
    }
  };

  return (
    <>
      <TV_Info>
        <Hero>
          <span>
            <ArrowLeftIcon
              style={{ color: "#fff" }}
              onClick={() => (window.history ? navigate(-1) : navigate("/"))}
            />
          </span>
          <img
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            alt="picture"
            className="bg"
          />
          <Poster_img>
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
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
            <span>{data.vote_average}</span>
          </div>

          <div>
            <h4>Date</h4>
            <span>{data.first_air_date}</span>
          </div>
        </Trailer_Wrapper>
        <Info_Wrapper>
          <Info_Nav>
            <h4
              style={activeSubPage === "OverView" ? { color: "#fff" } : {}}
              onClick={() => setActiveSubPage("OverView")}
            >
              Overview
            </h4>

            <h4
              style={activeSubPage === "Similar" ? { color: "#fff" } : {}}
              onClick={() => setActiveSubPage("Similar")}
            >
              Similar
            </h4>

            <h4
              style={activeSubPage === "Company" ? { color: "#fff" } : {}}
              onClick={() => setActiveSubPage("Company")}
            >
              Company
            </h4>
          </Info_Nav>
          <Outlet_wrapper>{handleSubPageRender()}</Outlet_wrapper>
        </Info_Wrapper>
      </TV_Info>
    </>
  );
};

export default TvInfo;
