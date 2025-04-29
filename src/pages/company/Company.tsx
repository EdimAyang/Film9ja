import { useEffect, useState } from "react"
import axios from "axios"
import { options } from "../homepage/Home"
import { ICom } from "../../interface"
import { Company_styles } from "./Styles"

const Company = () => {
     //get movies id
const ID = JSON.parse(localStorage.getItem("movieID") as string)
const[Com, setCom] = useState<ICom[]>([])
        //fetch Latest movies
        const getMoviesOV = async (id:number)=>{
            try {
             const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`,options)
             setCom(response.data.production_companies)
            } catch (error) {
              console.log(error)
            }
          }
        
          useEffect(()=>{
            getMoviesOV(ID)
          },[])

          
  return (
    <Company_styles>
      {Com.map((C)=>(
        <div>
        <img src={`https://image.tmdb.org/t/p/w500${C.logo_path}`} alt="picture" />
        <span>{C.name}</span>
        </div>
    ))}
    </Company_styles>
  )
}

export default Company
