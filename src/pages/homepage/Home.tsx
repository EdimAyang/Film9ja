
import axios from "axios";
import Nav from "../../components/navbar/Nav"
import { Card, Cards_Wrapper, Catergories, Hero_section, Home_Styles,Slider_Container, Slider_Text,  } from "./Style"
import { useEffect, useState } from "react";
import { ICategories } from "../../interface";




const Home = () => {

  //Endpoints
  const PopularURL = "https://api.themoviedb.org/3/movie/popular"
  const MoviesURL = "https://api.themoviedb.org/3/trending/movie/day"
  const TVSeriesURL = "https://api.themoviedb.org/3/trending/tv/day"
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWVkYzA1OTdiOGVkNjU5NGU3MDM0M2YwMmRiZDcwYyIsIm5iZiI6MTc0NDMxMTAzOS4zOTM5OTk4LCJzdWIiOiI2N2Y4MTJmZmQzYWI3ZDdhOGJhZDYyNWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3D-u27IuH3HJXjvj-ovnjz_xN1G7BBo88_LvCtH2Dgk'
    }
  };

  const[PopularMovies, setPopularMovies] = useState<ICategories[]>([])
  const[TV, setTV] = useState<ICategories[]>([])
  const[Movies, setMovies] = useState<ICategories[]>([])

  //fetch popular movies
  const getPopularMovies = async ()=>{
    try {
     const response = await axios.get(PopularURL,options)
     setPopularMovies(response.data.results)
    } catch (error) {
      console.log(error)
    }
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
    console.log(error)
  }
}


useEffect(()=>{
  getMovies()
  getTvSeries()
  getPopularMovies()
},[])


  return (
    <Home_Styles>
        <Nav />

 {/* Hero        */}
        <Hero_section>
          <Slider_Container>
            <img src="/src/assets/black-panther-pics.jpg" alt="photo" />
            <Slider_Text>
              <p>Popularity : <span>100</span></p>
              <p>Rating : <span>5</span></p>
              <p>Votes : <span>5</span></p>
            </Slider_Text>
          </Slider_Container>
        </Hero_section>



{/* Popular */}

        <Catergories>
        <section>
          <h4>Popular</h4>
        </section>
        <Cards_Wrapper>
            {PopularMovies.map((p )=>(
                <Card key={p.id}>
                <div>
                  <img src={`https://image.tmdb.org/t/p/w500${p.poster_path}`} alt="picture" />
                </div>
                <p>{p.title}</p>
              </Card>
            ))}
        </Cards_Wrapper>
      </Catergories>


{/* movies */}

      <Catergories>
        <section>
          <h4>Latest Movies</h4>
          <span>View all</span>
        </section>
        <Cards_Wrapper>
        {Movies.map((p )=>(
    <Card key={p.id}>
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${p.poster_path}`}
alt="picture" />
    </div>
    <p>{p.title}</p>
  </Card>
))}
        </Cards_Wrapper>
      </Catergories>

{/* Series */}

      <Catergories>
        <section>
          <h4>Latest TV Series</h4>
          <span>View all</span>
        </section>
        <Cards_Wrapper>
          {TV.map((m )=>(
            <Card key={m.id}>
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
