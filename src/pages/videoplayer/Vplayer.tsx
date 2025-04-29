import { Video_player } from "./Styles"
import ReactPlayer from 'react-player'
import { useEffect, useState } from "react"
import axios from "axios"
import { options } from "../homepage/Home"
import { Ivideo } from "../../interface"
import { Link } from "react-router-dom"

const Vplayer = () => {
     //get movies id
const ID = JSON.parse(localStorage.getItem("movieID") as string)
const[Video_url, setVideo_url] = useState<Ivideo[]>([])
let[Res] = useState<Ivideo[]>([])


  //fetch Latest movies
  const getVideo = async (id:number)=>{
    try {
     const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`,options)
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
    getVideo(ID)
  },[])


  getKey(Video_url)
 
 const getFirstTrailer = (Res:Ivideo[])=>{
 for(let i = 0; i < Res.length; i++){
  let Fkey = Res.at(-1)?.key
  return Fkey
 }
 
 } 

const R = getFirstTrailer(Res)


  return (
    <Video_player>
      <Link to="/homepage">
        <img src="/icon/arrow-left-solid.svg" alt="" />
      </Link>
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
