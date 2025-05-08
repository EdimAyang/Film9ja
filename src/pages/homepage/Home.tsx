
import axios from "axios";
import Nav from "../../components/navbar/Nav"
import { Card, Cards_Wrapper, Catergories, Hero_section, Home_Styles,  Slider_Text,  } from "./Style"
import { useEffect, useState } from "react";
import { ICategories } from "../../interface";
import SideBar from "../../components/sideBar/SideBar";
import { Link, useNavigate } from "react-router-dom";
import AOS from 'aos';
import { Swiper,  SwiperSlide } from "swiper/react";
import { Autoplay} from 'swiper/modules';
import Loader2 from "../../components/loader2/Loader2";


//options
export  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWVkYzA1OTdiOGVkNjU5NGU3MDM0M2YwMmRiZDcwYyIsIm5iZiI6MTc0NDMxMTAzOS4zOTM5OTk4LCJzdWIiOiI2N2Y4MTJmZmQzYWI3ZDdhOGJhZDYyNWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3D-u27IuH3HJXjvj-ovnjz_xN1G7BBo88_LvCtH2Dgk'
  }
};



const Home:React.FC = () => {

  //Endpoints
  const PopularURL = "https://api.themoviedb.org/3/movie/popular"
  const MoviesURL = "https://api.themoviedb.org/3/trending/movie/week"
  const TVSeriesURL = "https://api.themoviedb.org/3/trending/tv/week"

  const[PopularMovies, setPopularMovies] = useState<ICategories[]>([])
  const[TV, setTV] = useState<ICategories[]>([])
  const[Movies, setMovies] = useState<ICategories[]>([])
  const navigate = useNavigate()
  const[isLoading, setIsLoading] = useState<boolean>(true)


  
  //fetch popular movies
  const getPopularMovies = async ()=>{
    try {
     const response = await axios.get(PopularURL,options)
     setPopularMovies(response.data.results)
     response.data.results ? setIsLoading(false) :  setIsLoading(true)
    } catch (error) {
      console.log(error)
    }
  }

  //local storage to store movie id and media type function
  const StoreMovieId = (id:number , type:string) =>{
    localStorage.setItem("ID", JSON.stringify(id))
    localStorage.setItem("media_type", JSON.stringify(type))
    navigate("/movieInfo")
  }

  
  //local storage to store TV id function
const StoreTVId = (id:number, type:string) =>{
  localStorage.setItem("ID", JSON.stringify(id))
  localStorage.setItem("media_type", JSON.stringify(type))
  navigate("/tvinfo")
}
  //fetch Tv series
  const getTvSeries = async ()=>{
    try {
     const response = await axios.get(TVSeriesURL,options)
     setTV(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  

   //fetch Latest movies
 const getMovies = async ()=>{
  try {
   const response = await axios.get(MoviesURL,options)
   setMovies(response.data.results)
   
  } catch (error) {
    
  }
}


useEffect(()=>{
  getMovies()
  getTvSeries()
  getPopularMovies()

  //scroll animation
AOS.init({
  offset: 50,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});
},[])


  return (
    <Home_Styles>
      {isLoading && <Loader2 />}
      <SideBar/>
        <Nav/>
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
            {PopularMovies.map((m, i)=>(
              <SwiperSlide key={m.id} className="Slide">
                <img src={`https://image.tmdb.org/t/p/w500${PopularMovies[i].backdrop_path}`} alt="photo" 
                
                />
                <Slider_Text>
                  <h4>{PopularMovies[i].name || PopularMovies[i].original_name || PopularMovies[i].original_title || PopularMovies[i].title}</h4>
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
        <Cards_Wrapper data-Aos = 'fade-up'>
            {PopularMovies.map((c )=>(
                <Card key={c.id} >
                <div>
                  <img src={`https://image.tmdb.org/t/p/w500${c.poster_path}`} alt="picture" />
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
          <Link to ="/moviespage"><span>View all</span></Link>
        </section>
        <Cards_Wrapper data-Aos = 'fade-up'>
        {Movies.map((p )=>(
                <Card key={p.id}  onClick={()=>StoreMovieId(p.id, p.media_type)}>
                  <div>
                    <img src={`https://image.tmdb.org/t/p/w500${p.poster_path}`}alt="picture" />
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
          <Link to ="/tvSeriespage"><span>View all</span></Link>
        </section>
        <Cards_Wrapper data-Aos = 'fade-up'>
          {TV.map((m )=>(
            <Card key={m.id}  onClick={()=>StoreTVId(m.id, m.media_type)}>
              <div>
                <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt="picture" />
              </div>
              <p>{m.name}</p>
            </Card>
          ))}
        </Cards_Wrapper>
      </Catergories>
      
    </Home_Styles>
  )
}

export default Home
