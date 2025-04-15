import { Movie_Card1,  Movie_Container, Movie_header, Movie_styled } from "./Styled"
import { useContext, useEffect } from 'react';
import { BooleanContext } from "../../App"
import SideBar from "../../components/sideBar/SideBar";
import { options } from "../homepage/Home";
import { ICategories } from "../../interface";
import { useState } from "react";
import axios from "axios";

//Endpoint
 const MoviesURL = "https://api.themoviedb.org/3/trending/movie/week"


const Movies = () => {
    const active = useContext(BooleanContext)
      const[Movies, setMovies] = useState<ICategories[]>([])

    

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
  },[])
  return (
    <>
     <Movie_styled>
        <SideBar />
        <Movie_header>
            <h3>Movies</h3>
            <img src="/icon/bars-staggered-solid (1).svg" alt="Photos" onClick={active?.toggler}/>
        </Movie_header>
        <Movie_Container>
           {Movies.map((m)=>(
             <Movie_Card1>
                 <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}alt="picture" />
             </Movie_Card1>
           ))}
        </Movie_Container>
        </Movie_styled> 
    </>
  )
}

export default Movies
