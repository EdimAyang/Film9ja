
import { Hero, Info_Nav, Info_Wrapper, Movies_Info, Outlet_wrapper, Poster_img, Trailer_Wrapper } from "./Style"
import { options } from "../homepage/Home"
import axios from "axios"
import { useEffect, useState } from "react"
import { IMovieTv } from "../../interface";
import { Link,  Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader2 from "../../components/loader2/Loader2";


//Trailer Endpoint
//https://api.themoviedb.org/3/movie/{movie_id}/videos
//end point for movies by id
//https://api.themoviedb.org/3/movie/343611
const Info = () => {
    const [movie, setMovie] = useState<IMovieTv>()
    const navigate = useNavigate()
    let[ErrMsg, setErrMsg] = useState("")
    const[isLoading, setIsLoading] = useState<boolean>(true)

    const handleNav = ()=>{
      navigate("/videoplayer")
    }
    

    //get movies id
        const ID = JSON.parse(localStorage.getItem("ID") as string)

        //fetch Latest movies
const getMoviesByID = async (id:number)=>{
    try {
     const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`,options)
     response.data.results ? setIsLoading(true) :  setIsLoading(false)
     setMovie(response.data)
    } catch (error:any) {
      setErrMsg(error.message)
    }
  }

  useEffect(()=>{
    getMoviesByID(ID)
  },[])



  return (
    <Movies_Info>
       {isLoading && <Loader2 children={`${ErrMsg ? `${ErrMsg}` : "Loading..."}`}/>}
      <Hero>
        <Link to="/homepage">
          <img src="icon/arrow-left-solid.svg" alt="picture" />
        </Link>
        <img src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`} alt="picture" />
        <Poster_img>
        <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="picture" />
        </Poster_img>
      </Hero>
      <Trailer_Wrapper>
        <div>
          <h4>Trailer</h4>
          {/* <Link to="/videoplayer"> */}
            <img src="/icon/youtube-brands.svg" alt="youtube logo" onClick={handleNav}/>
          {/* </Link> */}
        </div>
        <div>
          <h4>Rating</h4>
          <span>{movie?.vote_average}</span>
        </div>

        <div>
          <h4>Date</h4>
          <span>{movie?.release_date}</span>
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
    </Movies_Info>
  )
}

export default Info
