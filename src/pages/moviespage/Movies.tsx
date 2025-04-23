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



const Movies = () => { 
    const active = useContext(BooleanContext)
      const[Movies, setMovies] = useState<ICategories[]>([])
      const[totalPage, setTotalPage] = useState<number>(1)
      let[page, setPage] = useState<number>(1)
      const[hasMore, sethasMore] = useState<boolean>(false)
    

        //fetch Latest movies
 const getMovies = async (page:number)=>{
    try {
     const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${page}`,options)
     setMovies((prev) =>([...prev,...response.data.results]))
     setTotalPage(response.data.total_pages)
    } catch (error) {
      console.log(error)
    }
  }


  //initial fetch
  useEffect(()=>{
    getMovies(page)
  },[])


  //Infinit Scrolling
const [ref, inView] = useInView();

useEffect(()=>{
  if(Movies.length < totalPage  ){
    sethasMore(true)
    if(Movies && page <= totalPage - 1){
      setPage(page = page + 1)
      getMovies(page)
    }
  }else{sethasMore(false)}
},[inView])


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
           {hasMore && <Loader children="Loading more ...." ref={ref}/>}
        </Movie_Container>
        </Movie_styled> 
    </>
  )
}

export default Movies
