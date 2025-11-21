import { TV_Card1, TV_Container, TV_styled } from "./Style";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { FilmQueries } from "../../components/network/services/useGetMovies";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useIdAndMediaStore } from "../../store/movieIDStore";

const TV = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView();
  const {setId, setMediaType} = useIdAndMediaStore()

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useSuspenseInfiniteQuery(FilmQueries.seriesPage());

  const Series = useMemo(
    () => data?.pages.flatMap((page) => page.results) ?? [],
    [data?.pages]
  );

  //Infinit Scrolling
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  //local storage to store movie id and media type function
  const StoreMovieId = (id: any, type: string) => {
    setId(id);
    setMediaType(type);
     navigate(`/tvinfo/${id}`);
  };

  return (
    <>
      <TV_styled>
        <TV_Container>
          {Series.map((m, i) => (
            <TV_Card1 key={i} onClick={() => StoreMovieId(m.id, m.media_type)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                alt="picture"
              />
            </TV_Card1>
          ))}
          <div ref={ref} style={{ color: "#fff" }}>
            {isFetchingNextPage ? "Loading more..." : "Scroll for more"}
          </div>
        </TV_Container>
      </TV_styled>
    </>
  );
};

export default TV;
