import { useSuspenseQuery } from "@tanstack/react-query";
import {
  Card,
  Cards_Wrapper,
  Catergories,
  Hero_section,
  Home_Styles,
  Slider_Text,
} from "./Style";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { HomePageQueries } from "../../components/network/services/GetFilmsHook";
import { useIdAndMediaStore } from "../../store/movieIDStore";

const Home = () => {
  const navigate = useNavigate();
  const { setId, setMediaType } = useIdAndMediaStore();

  //fetch popular, series, trending movies
  const query2 = useSuspenseQuery(HomePageQueries.movies());
  const query3 = useSuspenseQuery(HomePageQueries.series());
  const query1 = useSuspenseQuery(HomePageQueries.trending());

  //local storage to store movie id and media type function
  const StoreMovieId = (id: any) => {
    setId(id);
    setMediaType("movie");
    navigate(`/movieInfo/${id}`);
  };

  //local storage to store TV id function
  const StoreTVId = (id: any) => {
    setId(id);
    setMediaType("tv");
    navigate(`/tvinfo/${id}`);
  };

  return (
    <>
      <Home_Styles>
        {/* Hero */}
        <Hero_section>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // pagination={{
            // clickable: true,
            // }}
            navigation={false}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <div className="overlay"></div>
            {query1.data.map((m, i) => (
              <SwiperSlide key={m.id} className="Slide">
                <img
                  src={`https://image.tmdb.org/t/p/w500${query1.data[i].backdrop_path}`}
                  alt="photo"
                />
                <Slider_Text>
                  <h4>
                    {query1.data[i].name ||
                      query1.data[i].original_name ||
                      query1.data[i].original_title ||
                      query1.data[i].title}
                  </h4>
                </Slider_Text>
              </SwiperSlide>
            ))}
          </Swiper>
        </Hero_section>

        {/* Popular */}

        <Catergories>
          <section>
            <h4>Trending</h4>
          </section>
          <Cards_Wrapper>
            {query1.data.map((c) => (
              <Card key={c.id}>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${c.poster_path}`}
                    alt="picture"
                  />
                </div>
                <p>{c.title}</p>
              </Card>
            ))}
          </Cards_Wrapper>
        </Catergories>

        {/* movies */}

        <Catergories>
          <section>
            <h4>Movies</h4>
            <Link to="/moviespage">
              <span>View all</span>
            </Link>
          </section>
          <Cards_Wrapper>
            {query2.data.map((p) => (
              <Card key={p.id} onClick={() => StoreMovieId(p.id)}>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${p.poster_path}`}
                    alt="picture"
                  />
                </div>
                <p>{p.title}</p>
              </Card>
            ))}
          </Cards_Wrapper>
        </Catergories>

        {/* Series */}

        <Catergories>
          <section>
            <h4>TV Series</h4>
            <Link to="/tvSeriespage">
              <span>View all</span>
            </Link>
          </section>
          <Cards_Wrapper>
            {query3.data.map((m) => (
              <Card key={m.id} onClick={() => StoreTVId(m.id)}>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                    alt="picture"
                  />
                </div>
                <p>{m.name}</p>
              </Card>
            ))}
          </Cards_Wrapper>
        </Catergories>
      </Home_Styles>
    </>
  );
};

export default Home;
