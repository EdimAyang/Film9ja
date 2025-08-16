import Nav from "../../components/navbar/Nav";
import {
  Card,
  Cards_Wrapper,
  Catergories,
  Hero_section,
  Home_Styles,
  Slider_Text,
} from "./Style";
import { useEffect, useState } from "react";
import { ICategories } from "../../interface";
import SideBar from "../../components/sideBar/SideBar";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Loader2 from "../../components/loader2/Loader2";
import {
  useGetMovies,
  useGetSeries,
  useGetTrendingMovies,
} from "../../components/network/services/GetFilmsHook";

export const options = {};

const Home: React.FC = () => {
  const [PopularMovies, setPopularMovies] = useState<ICategories[]>([]);
  const [TV, setTV] = useState<ICategories[]>([]);
  const [Movies, setMovies] = useState<ICategories[]>([]);
  const navigate = useNavigate();

  //fetch popular, series, trending movies
  const query1 = useGetMovies();
  const query2 = useGetSeries();
  const query3 = useGetTrendingMovies();

  useEffect(() => {
    if (query1.data) setPopularMovies(query1.data);
    if (query2.data) setTV(query2.data);
    if (query3.data) setMovies(query3.data);
  }, [query1.data, query2.data, query3.data]);

  //local storage to store movie id and media type function
  const StoreMovieId = (id: number, type: string) => {
    localStorage.setItem("ID", JSON.stringify(id));
    localStorage.setItem("media_type", JSON.stringify(type));
    navigate("/movieInfo");
  };

  //local storage to store TV id function
  const StoreTVId = (id: number, type: string) => {
    localStorage.setItem("ID", JSON.stringify(id));
    localStorage.setItem("media_type", JSON.stringify(type));
    navigate("/tvinfo");
  };

  return (
    <Home_Styles>
      {query1.isLoading || query2.isLoading || query3.isLoading?  <Loader2 children={"Loading..."} /> : ''}
      <SideBar />
      <Nav />
      {/* Hero */}
      <Hero_section>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
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
          {PopularMovies.map((m, i) => (
            <SwiperSlide key={m.id} className="Slide">
              <img
                src={`https://image.tmdb.org/t/p/w500${PopularMovies[i].backdrop_path}`}
                alt="photo"
              />
              <Slider_Text>
                <h4>
                  {PopularMovies[i].name ||
                    PopularMovies[i].original_name ||
                    PopularMovies[i].original_title ||
                    PopularMovies[i].title}
                </h4>
              </Slider_Text>
            </SwiperSlide>
          ))}
        </Swiper>
      </Hero_section>

      {/* Popular */}

      <Catergories>
        <section>
          <h4>Popular</h4>
        </section>
        <Cards_Wrapper>
          {PopularMovies.map((c) => (
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
          {Movies.map((p) => (
            <Card key={p.id} onClick={() => StoreMovieId(p.id, p.media_type)}>
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
          {TV.map((m) => (
            <Card key={m.id} onClick={() => StoreTVId(m.id, m.media_type)}>
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
  );
};

export default Home;
