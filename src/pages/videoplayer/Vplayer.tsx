import { Video_player } from "./Styles"
import ReactPlayer from 'react-player'
import { useEffect, useState } from "react"
import axios from "axios"
import { options } from "../homepage/Home"
import { Ivideo } from "../../interface"
import { useNavigate } from "react-router-dom"

const Vplayer = () => {
  const navigate = useNavigate()

     //get movies id
const ID = JSON.parse(localStorage.getItem("ID") as string)

const T = JSON.parse(localStorage.getItem("media_type") as string)
console.log(T)



const handleNavigation = (T:string)=>{
  if(T === "tv"){
    navigate("/tvSeriespage")
  }else if(T === "movie"){
    navigate("/moviespage")
  }else{
    navigate("/homepage")
  }
}
//fetch TV details
const[Video_url, setVideo_url] = useState<Ivideo[]>([])
let[Res] = useState<Ivideo[]>([])


  //fetch Latest movies
  const getVideo = async (id:number, type:string)=>{
    try {
        const response = await axios.get(`${type? `https://api.themoviedb.org/3/${type}/${id}/videos` : null}`,options)
        setVideo_url(response.data.results)
    } catch (error) {
      console.log(error)
    }
  }


  const getKey = (V:Ivideo[])=>{
  const Data =  V.filter((v)=>{
        if(v.site === "YouTube" && v.type === "Trailer") {
           return v
        }
    })
    Res = Data
  }

  useEffect(()=>{
    getVideo(ID ,T)
  },[])


  getKey(Video_url)
 
 const getFirstTrailer = (Res:Ivideo[])=>{
 for(let i = 0; i < Res.length; i++){
  let Fkey = Res[0].key
  return Fkey
 }
 
 } 

const R = getFirstTrailer(Res)


  return (
    <Video_player>
        <img src="/icon/arrow-left-solid.svg" alt="" onClick={()=>handleNavigation(T)}/>
      <div>
        <ReactPlayer 
            width="100%"
            height="100%"
            controls
            url={`https://www.youtube.com/watch?v=${R}`}
        />
      </div>
    </Video_player>
  )
}

export default Vplayer
