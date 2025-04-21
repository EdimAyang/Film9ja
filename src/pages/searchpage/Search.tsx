import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import {  Cards1, Info, Input_container, Movie_container, Movie_pics, Search_styles } from "./Styles"
import axios from "axios"
import { options } from "../homepage/Home"
import { MultiSearch } from "../../interface"
import Loader from "../../components/loader/Loader"
import { useInView } from "react-intersection-observer";

const Search = () => {
const navigate = useNavigate()
const [SearchValue, setSearchValue] = useState<string>("")
const [SearchRes, setSearchRes] = useState<MultiSearch[]>([])
let[page, setPage] = useState<number>(1)
const[hasMore, sethasMore] = useState<boolean>(false)
const[totalPage, setTotalPage] = useState<number>(1)
const handleNav = ()=>{
        navigate("/homepage")
}

const handleSearch  = async ( page:number )=>{
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/multi?query=${SearchValue}&include_adult=false&language=en-US&page=${page}` ,options
        )
      setSearchRes((prev) =>([...prev,...response.data.results].reverse()))
        console.log(response.data)
        setTotalPage(response.data.total_pages)
    } catch (error) {
        console.log(error)
    }
}

//empty array
useEffect(()=>{
  if(SearchValue === ""){
    setSearchRes([])
  }
},[SearchValue])

  //Infinit Scrollingn
  const [ref, inView] = useInView();
  useEffect(()=>{

    if(SearchRes.length < totalPage){
      sethasMore(false)
      if(SearchRes && page <= totalPage - 1){
        setPage(page = page + 1)
        handleSearch(page)
      }
    }else{sethasMore(false)}
  },[inView])

console.log(totalPage ,page)
console.log(hasMore)

  //handle Search button
  const Search = ()=>{
    handleSearch(page)
}
console.log(SearchRes.length)

  return (
    <Search_styles>
      <Input_container>
        <img src="/icon/arrow-left-solid.svg" alt="" onClick={handleNav}/>
        <div>
        <input type="text" placeholder="Search Movie" value={SearchValue} onChange={e=>setSearchValue(e.target.value.toLowerCase())} />
        <img src="/icon/magnifying-glass-solid (4).svg" alt="" onClick={Search} className="imgAnimate"/>
        </div>
      </Input_container>

      <Movie_container>
        {SearchRes.map((m ,i)=>(
            <Cards1 key={i}>
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
