import { Hero, Info_Nav, Info_Wrapper, TV_Info, Outlet_wrapper, Poster_img, Trailer_Wrapper } from "./Style"
import { options } from "../homepage/Home"
import axios from "axios"
import { useEffect, useState } from "react"
import { IMovieTv } from "../../interface";
import { Link,  Outlet } from "react-router-dom";
import Loader2 from "../../components/loader2/Loader2";
import { useNavigate } from "react-router-dom";


const TvInfo = () => {
    const [TV, setTV] = useState<IMovieTv>()
    let[ErrMsg, setErrMsg] = useState("")
    const[isLoading, setIsLoading] = useState<boolean>(true)
    const navigate = useNavigate()
    

    //get TV id and type
        const ID = JSON.parse(localStorage.getItem("ID") as string)

const getMoviesByID = async (id:number)=>{
    try {
     const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}`,options)
     setTV(response.data)
     response.data.results ? setIsLoading(true) :  setIsLoading(false)
    } catch (error:any) {
      setErrMsg(error.message)
    }
  }

  useEffect(()=>{
    getMoviesByID(ID)
  },[])

  const handleNav = ()=>{
    navigate("/videoplayer")
  }


  return (
    <TV_Info>
      {isLoading && <Loader2 children={`${ErrMsg ? `${ErrMsg}` : "Loading..."}`}/>}
      <Hero>
        <Link to="/homepage">
          <img src="icon/arrow-left-solid.svg" alt="picture" />
        </Link>
        <img src={`https://image.tmdb.org/t/p/w500${TV?.backdrop_path}`} alt="picture" />
        <Poster_img>
        <img src={`https://image.tmdb.org/t/p/w500${TV?.poster_path}`} alt="picture" />
        </Poster_img>
      </Hero>
      <Trailer_Wrapper>
        <div>
          <h4>Trailer</h4>
            <img src="/icon/youtube-brands.svg" alt="youtube logo" onClick={handleNav}/>
        </div>
        <div>
          <h4>Rating</h4>
          <span>{TV?.vote_average}</span>
        </div>

        <div>
          <h4>Date</h4>
          <span>{TV?.release_date}</span>
        </div>
        
      </Trailer_Wrapper>
      <Info_Wrapper>
        <Info_Nav>
          <h4><Link to ="overviewpage">Overview</Link></h4>
          <h4><Link to ="similarpage">Similar</Link></h4>
          <h4><Link to ="company">Company</Link></h4>
        </Info_Nav>
          <Outlet_wrapper>
            <Outlet />
          </Outlet_wrapper>
      </Info_Wrapper>
    </TV_Info>
  )
}

export default TvInfo
