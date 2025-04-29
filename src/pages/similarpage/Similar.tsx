import { Similar_styles } from "./Style"
import { useEffect, useState } from "react"
import axios from "axios"
import { options } from "../homepage/Home"
import { ICategories } from "../../interface"



const Similar = () => {
     //get movies id
    const ID = JSON.parse(localStorage.getItem("movieID") as string)
    const[Similar, setSimilar] = useState<ICategories[]>([])



            //fetch Latest movies
            const getMoviesOV = async (id:number)=>{
                try {
                 const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar`,options)
                 setSimilar(response.data.results)
                } catch (error) {
                  console.log(error)
                }
              }
            
              useEffect(()=>{
                getMoviesOV(ID)
              },[])

              
            
  return (
    <Similar_styles>
        {Similar.map((S)=>(
            <div>
            <img src={`https://image.tmdb.org/t/p/w500${S.poster_path}`} alt="picture" />
            <span>{S.name || S.original_name || S.original_title || S.title}</span>
        </div>
        ))}
    </Similar_styles>
  )
}

export default Similar
