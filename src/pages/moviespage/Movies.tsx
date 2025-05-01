import { Movie_Card1,  Movie_Container, Movie_header, Movie_styled } from "./Styled"
import { useContext, useEffect } from 'react';
import { BooleanContext } from "../../App"
import SideBar from "../../components/sideBar/SideBar";
import { options } from "../homepage/Home";
import { ICategories } from "../../interface";
import { useState } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import Loader from "../../components/loader/Loader";
import { useNavigate } from "react-router-dom";


const Movies = () => { 
    const active = useContext(BooleanContext)
      const[Movies, setMovies] = useState<ICategories[]>([])
      const[totalPage, setTotalPage] = useState<number>(1)
      let[page, setPage] = useState<number>(1)
      const[hasMore, sethasMore] = useState<boolean>(false)
        const navigate = useNavigate()
    

  //fetch Latest movies
  const getMovies = async (page:number)=>{
    try {
     const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${page}`,options)
     setMovies((prev) =>([...prev,...response.data.results]))
     setTotalPage(response.data.total_pages)
     console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  // initial fetch
  useEffect(()=>{
    if(Movies.length === 0){
      sethasMore(false)
      getMovies(page)
    }else{sethasMore(true)}
  },[Movies.length === 0])


  //Infinit Scrolling
const [ref, inView] = useInView();

useEffect(()=>{
  if(Movies.length < totalPage  ){
    if(Movies && page <= totalPage - 1){
      setPage(page = page + 1)
      getMovies(page)
    }
  }else{sethasMore(false)}
},[inView])


//local storage to store movie id and media type function
const StoreMovieId = (id:number , type:string) =>{
  localStorage.setItem("ID", JSON.stringify(id))
  localStorage.setItem("media_type", JSON.stringify(type))
  navigate("/movieInfo")
}
  return (
    <>
     <Movie_styled>
        <SideBar />
        <Movie_header>
            <h3>Movies</h3>
            <img src="/icon/bars-staggered-solid (1).svg" alt="Photos" onClick={active?.toggler}/>
        </Movie_header>
        <Movie_Container>
           {Movies.map((m,i )=>(
             <Movie_Card1 key={i} onClick={()=>StoreMovieId(m.id, m.media_type)}>
                 <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}alt="picture" />
             </Movie_Card1>
           ))}
           {hasMore && <Loader children="Loading more ...." ref={ref}/>}
        </Movie_Container>
        </Movie_styled> 
    </>
  )
}

export default Movies
