import { useState , useEffect} from "react"
import { OverView_styles } from "./Styles"
import axios from "axios"
import { options } from "../homepage/Home"
import { IMovieTv } from "../../interface"

const Overview = () => {
    //get movies id
    const ID = JSON.parse(localStorage.getItem("movieID") as string)
    const[overView, setOV] = useState<IMovieTv>()

            //fetch Latest movies
const getMoviesOV = async (id:number)=>{
    try {
     const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`,options)
     setOV(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getMoviesOV(ID)
  },[])


  return (
    <OverView_styles>
      <p>{overView?.overview}</p>
    </OverView_styles>
  )
}

export default Overview
