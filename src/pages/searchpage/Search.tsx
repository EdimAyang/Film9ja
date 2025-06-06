import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import {  Cards1, Info, Input_container, Movie_container, Movie_pics, Search_styles } from "./Styles"
import axios from "axios"
import { options } from "../homepage/Home"
import { MultiSearch } from "../../interface"
import Loader from "../../components/loader/Loader"
import { useInView } from "react-intersection-observer";
import Loader2 from "../../components/loader2/Loader2"



const Search = () => {
const navigate = useNavigate()
const [SearchValue, setSearchValue] = useState<string>("")
const [SearchRes, setSearchRes] = useState<MultiSearch[]>([])
let[page, setPage] = useState<number>(1)
const[hasMore, sethasMore] = useState<boolean>(false)
const[totalPage, setTotalPage] = useState<number>(1)
const [ref, inView] = useInView();
let[ErrMsg, setErrMsg] = useState("")
const[isLoading, setIsLoading] = useState<boolean>(false)


const handleNav = ()=>{
        navigate("/homepage")
}

//local storage to store movie id and media type function
const StoreMovieId = (id:number , type:string) =>{
  localStorage.setItem("ID", JSON.stringify(id))
  localStorage.setItem("media_type", JSON.stringify(type))
  navigate("/videoplayer")
}

const handleSearch  = async ( page:number )=>{
  
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/multi?query=${SearchValue}&include_adult=false&language=en-US&page=${page}` ,options
        )
        
      setSearchRes((prev) =>([...prev, ...response.data.results].filter((obj)=>{
        if(obj.media_type != "person" && obj.poster_path != null){
          return obj
        }
      })))
      response.data.results ? setIsLoading(false) :  setIsLoading(true) ;
      
        setTotalPage(response.data.total_pages)
    } catch (error:any) {
      setErrMsg(error.message)
    }
}


//logic for hasMore if page is < totalpage when there is movies 

  useEffect(()=>{
    if(page < totalPage){
      sethasMore(true)
    }else{
      sethasMore(false)
    }

  },[SearchRes])

// infinit scrolling
useEffect(()=>{
  if(page === totalPage){
    sethasMore(false)
  }
  if(page <= totalPage -1){
    sethasMore(true)
    setPage(page = page + 1)
    Search(page)
  }
},[inView])



//logic for clearing Search results if input is empty
useEffect(()=>{
  setSearchRes([])
  sethasMore(false)
},[SearchValue === ""])


  // handle Search button
  const Search = (page: number)=>{
    if(SearchValue === "")return
    // if(SearchRes.length != 0)return
    setIsLoading(true)
    handleSearch(page)
  }

  return (
    <Search_styles>
      {isLoading && <Loader2 children={`${ErrMsg ? `${ErrMsg}` : "Loading..."}`}/>}
      <Input_container>
        <img 
        src="/icon/arrow-left-solid.svg" alt=""
         onClick={handleNav}/>
    
        <div>
        <input type="text" placeholder="Search Movie" value={SearchValue} onChange={e=>setSearchValue(e.target.value.toLowerCase())} />
        <img src="/icon/magnifying-glass-solid (4).svg" alt="moviePicture" className={SearchRes.length != 0 ? "active" : "imgAnimate"} onClick={()=>Search(page)}/>
        </div>
      </Input_container>

      <Movie_container>
        {SearchRes.map((m ,i)=>(
            <Cards1 key={i} onClick={()=>StoreMovieId(m.id, m.media_type)}>
            <Movie_pics>
                <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt="" />
            </Movie_pics>
            <Info>
                <h4>{m.name || m.original_name || m.original_title || m.title}</h4>
                <p>{m.media_type} . {m.first_air_date}</p>
            </Info>
        </Cards1>
        )) }
        {hasMore && <Loader children="Loading more ...." ref={ref}/>}
      </Movie_container>
    </Search_styles>
  )
}

export default Search
