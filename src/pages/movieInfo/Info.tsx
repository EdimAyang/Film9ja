import {
  Hero,
  Info_Nav,
  Info_Wrapper,
  Movies_Info,
  Outlet_wrapper,
  Poster_img,
  Trailer_Wrapper,
} from "./Style";
import { useState } from "react";
import { IMovieTv } from "../../interface";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../components/network/axios";
import { API_ROUTES } from "../../components/network/reactQuery/ApiRouts";
import { ApiResponse } from "../../components/network/ApiResponse";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import Overview from "../../components/overview/Overview";
import Similar from "../../components/similarpage/Similar";
import Company from "../../components/company/Company";

type Pagetype = "OverView" | "Similar" | "Company";
const Info = () => {
  const navigate = useNavigate();
  const [activeSubPage, setActiveSubPage] = useState<Pagetype>("OverView");
  const { id } = useParams<{ id: any }>();

  const handleNav = () => {
    navigate("/videoplayer");
  };

  //get movies id

  const getMoviesByID = async (id: number) => {
    const response = await axiosInstance.get<ApiResponse<IMovieTv>>(
      `${API_ROUTES.movieInfo}${id}`
    );
    return response.data;
  };

  //fetch Latest movies
  const { data } = useSuspenseQuery({
    queryKey: ["movieInfo", id],
    queryFn: () => getMoviesByID(id),
  });

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
      <Movies_Info>
        <Hero>
          <span
            onClick={() =>
              window.history ? window.history.back() : navigate("/")
            }
          >
            <ArrowLeftIcon style={{ color: "#fff" }} />
          </span>
          <img
            src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            alt="picture"
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
            {/* </Link> */}
          </div>
          <div>
            <h4>Rating</h4>
            <span>{data.vote_average}</span>
          </div>

          <div>
            <h4>Date</h4>
            <span>{data.release_date}</span>
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
      </Movies_Info>
    </>
  );
};

export default Info;
