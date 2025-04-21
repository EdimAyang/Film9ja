import { TV_Card1,  TV_Container, TV_header, TV_styled } from "./Style"
import { useContext, useEffect} from 'react';
import { BooleanContext } from "../../App"
import SideBar from "../../components/sideBar/SideBar";
import { options } from "../homepage/Home";
import { ICategories } from "../../interface";
import { useState } from "react";
import axios from "axios";
import Loader from "../../components/loader/Loader";
import { useInView } from "react-intersection-observer";



const TV = () => {
    const active = useContext(BooleanContext)
     const[TV, setTV] = useState<ICategories[]>([])
     const[totalPage, setTotalPage] = useState<number>(1)
    let[page, setPage] = useState<number>(1)
   const[hasMore, sethasMore] = useState<boolean>(false)

        //fetch Latest movies
    const getMovies = async (page:number)=>{
        try {
             const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?language=en-US&page=${page}`,options)
             setTV((prev) =>([...prev,...response.data.results]))
             setTotalPage(response.data.total_pages)
            console.log(response.data)
            } catch (error) {
              console.log(error)
            }
        }

//initial Fetch
useEffect(()=>{
  getMovies(page)
},[])


//Infinit Scrolling
const [ref, inView] = useInView();
useEffect(()=>{
  if(TV.length < totalPage){
    sethasMore(true)
    if(TV && page <= totalPage - 1){
      setPage(page = page + 1)
      getMovies(page)
    }
  }else{sethasMore(false)}

},[inView])


  
  return (
    <>
     <TV_styled>
        <SideBar />
        <TV_header>
            <h3>TV Series</h3>
            <img src="/icon/bars-staggered-solid (1).svg" alt="Photos" onClick={active?.toggler}/>
        </TV_header>
        <TV_Container>
           {TV.map((m, i)=>(
             <TV_Card1 key={i}>
                 <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}alt="picture" />
             </TV_Card1>
           ))}
           {hasMore && <Loader children="Loading more ...." ref={ref}/>}
        </TV_Container>
        </TV_styled> 
    </>
  )
}

export default TV
