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
import { useInView } from "react-intersection-observer";
import Loader from "../../router/loader";
import { axiosInstance } from "../../components/network/axios";
import { API_ROUTES } from "../../components/network/reactQuery/ApiRouts";
import { ApiResponse } from "../../components/network/ApiResponse";
import { useIdAndMediaStore } from "../../store/movieIDStore";
import { ArrowLeftIcon, SearchIcon } from "lucide-react";


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
  const { setId, setMediaType } = useIdAndMediaStore();

  //save previous search results in local storage
  const PreviousSearch: MultiSearch[] = JSON.parse(
    localStorage.getItem("searchResults") as string
  );

 
  //local storage to store movie id and media type function
  const StoreMovieId = (id: number, type: string) => {
    setId(id);
    setMediaType(type);
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
      localStorage.setItem(
        "searchResults",
        JSON.stringify([...response.data.results])
      );
      setTotalPage(response.data.total_pages);
    } catch (error: any) {
      // toast.error(`${error.message}`)
      setErrorMsg(error.message);
      localStorage.removeItem("searchResults");
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
      setSearchRes(PreviousSearch ? PreviousSearch : []);
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
    <>
      {ErrorMsg && <p>Error</p>}
      {isLoading && <Loader />}
      <Search_styles>
        <Input_container>
          <ArrowLeftIcon
            style={{ color: "#fff" }}
            onClick={() => (window.history ? navigate(-1) : navigate("/"))}
          />

          <div>
            <input
              type="text"
              placeholder="Search Movie"
              value={SearchValue}
              onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
            />
            <SearchIcon
              style={{ color: "#000" }}
              className={SearchRes.length != 0 ? "active" : "imgAnimate"}
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
          {hasMore && <p ref={ref}>Loading...</p>}
        </Movie_container>
      </Search_styles>
    </>
  );
};

export default Search;
