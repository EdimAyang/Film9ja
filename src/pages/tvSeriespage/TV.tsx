import { TV_Card1,  TV_Container, TV_header, TV_styled } from "./Style"
import { useContext, useEffect } from 'react';
import { BooleanContext } from "../../App"
import SideBar from "../../components/sideBar/SideBar";
import { options } from "../homepage/Home";
import { ICategories } from "../../interface";
import { useState } from "react";
import axios from "axios";



const TV = () => {
    const active = useContext(BooleanContext)
     const[TV, setTV] = useState<ICategories[]>([])
     const[totalPages, setTotalPages] = useState<number>()
    
    let[page] = useState<number>(3)

    for (let i = 0; i < Number(totalPages); i++){
        
        
    }
   

        //fetch Latest movies
  
  useEffect(()=>{
    const getMovies = async (page:number)=>{
        try {
             const response = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?language=en-US&page=${page}`,options)
             setTV(response.data.results)
             setTotalPages(response.data.total_pages)
             console.log(response.data)
            } catch (error) {
              console.log(error)
            }
        }
        getMovies(page)
        
  },[])



  
  return (
    <>
     <TV_styled>
        <SideBar />
        <TV_header>
            <h3>TV Series</h3>
            <img src="/icon/bars-staggered-solid (1).svg" alt="Photos" onClick={active?.toggler}/>
        </TV_header>
        <TV_Container>
           {TV.map((m)=>(
             <TV_Card1>
                 <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}alt="picture" />
             </TV_Card1>
           ))}
        </TV_Container>
        </TV_styled> 
    </>
  )
}

export default TV
