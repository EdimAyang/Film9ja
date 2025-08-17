import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Cards1,
  Info,
  Input_container,
  Movie_container,
  Movie_pics,
  Search_styles,
} from "./Styles";
import { MultiSearch } from "../../interface";
import Loader from "../../components/loader/Loader";
import { useInView } from "react-intersection-observer";
import Loader2 from "../../components/loader2/Loader2";
import { axiosInstance } from "../../components/network/axios";
import { API_ROUTES } from "../../components/network/reactQuery/ApiRouts";
import { ApiResponse } from "../../components/network/ApiResponse";


const Search = () => {
  const navigate = useNavigate();
  const [SearchValue, setSearchValue] = useState<string>("");
  const [SearchRes, setSearchRes] = useState<MultiSearch[]>([]);
  let [page, setPage] = useState<number>(1);
  const [hasMore, sethasMore] = useState<boolean>(false);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [ref, inView] = useInView();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ErrorMsg, setErrorMsg] = useState<string>("");





  //local storage to store movie id and media type function
  const StoreMovieId = (id: number, type: string) => {
    localStorage.setItem("ID", JSON.stringify(id));
    localStorage.setItem("media_type", JSON.stringify(type));
    navigate("/videoplayer");
  };

  const handleSearch = async (page?: number) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get<ApiResponse<MultiSearch[]>>(
        `${API_ROUTES.search}${SearchValue}${API_ROUTES.searchFilter}${page}`
      );
      if (response.data.status === 200) sethasMore(false);
      setSearchRes((prev) =>
        [...prev, ...response.data.results].filter(
          (item: MultiSearch) =>
            item.backdrop_path != null && item.poster_path != null
        )
      );
      setTotalPage(response.data.total_pages);
    } catch (error: any) {
      setErrorMsg(`${error.message}`);
      sethasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    //logic for hasMore if page is < totalpage when there is movies
    if (page < totalPage) {
      sethasMore(true);
    } else {
      sethasMore(false);
    }

    // infinit scrolling
    if (page === totalPage) {
      sethasMore(false);
    }

    if (inView) {
      if (page <= totalPage - 1) {
        setPage((page = page + 1));
        handleSearch(page);
      }
    }
  }, [inView, page < totalPage]);

  //Debouncing
  useEffect(() => {
    setPage(1);
    if (!SearchValue) sethasMore(false);
    const handler = setTimeout(() => {
      if (SearchValue && SearchValue != "") {
        setSearchRes([]);
        handleSearch(page);
      }
    }, 1000); // delay

    return () => {
      clearTimeout(handler);
    };
  }, [SearchValue]);

  return (
    <Search_styles>
      {isLoading && <Loader2 children="Loading..." />}
      {ErrorMsg && <Loader2 children={`${ErrorMsg}`} />}
      <Input_container>
        <img
          src="/icon/arrow-left-solid.svg"
          alt="aorrow"
          loading="lazy"
          onClick={()=>window.history.back()}
        />

        <div>
          <input
            type="text"
            placeholder="Search Movie"
            value={SearchValue}
            onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
          />
          <img
            src="/icon/magnifying-glass-solid (4).svg"
            alt="moviePicture"
            className={SearchRes.length != 0 ? "active" : "imgAnimate"}
            loading="lazy"
          />
        </div>
      </Input_container>

      <Movie_container>
        {SearchRes.map((m, i) => (
          <Cards1 key={i} onClick={() => StoreMovieId(m.id, m.media_type)}>
            <Movie_pics>
              <img
                src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                alt="movie image"
                loading="lazy"
              />
            </Movie_pics>
            <Info>
              <h4>
                {m.name || m.original_name || m.original_title || m.title}
              </h4>
              <p>
                {m.media_type} . {m.first_air_date}
              </p>
            </Info>
          </Cards1>
        ))}
        {hasMore && <Loader children="" ref={ref} />}
      </Movie_container>
    </Search_styles>
  );
};

export default Search;
