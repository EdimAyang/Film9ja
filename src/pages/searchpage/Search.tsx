import { useNavigate } from "react-router-dom"
import { useState } from "react"
import {  Cards1, Info, Input_container, Movie_container, Movie_pics, Search_styles } from "./Styles"
import axios from "axios"
import { options } from "../homepage/Home"
import { MultiSearch } from "../../interface"

const Search = () => {
const navigate = useNavigate()
const [SearchValue, setSearchValue] = useState<string>("")
const [SearchRes, setSearchRes] = useState<MultiSearch[]>([])
// const [totalPage, setTotalPage] = useState<number>(1)
const handleNav = ()=>{
        navigate("/homepage")
}

const handleSearch  = async (e:React.ChangeEvent<HTMLInputElement>)=>{
    try {
        setSearchValue(e.target.value.toLowerCase()) 
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/multi?query=${SearchValue}&include_adult=false&language=en-US&page=1` ,options
        )
        
        setSearchRes(response.data.results)
        // setTotalPage(response.data.total_pages)
    } catch (error) {
        console.log(error)
    }
}


      // console.log(SearchRes)
  return (
    <Search_styles>
      <Input_container>
        <img src="/icon/bars-staggered-solid (1).svg" alt="" onClick={handleNav}/>
        <input type="text" placeholder="Search Movie" value={SearchValue} onChange={e=>handleSearch(e)}/>
      </Input_container>

      <Movie_container>
        {SearchRes.map(m=>(
            <Cards1 key={m.id}>
            <Movie_pics>
                <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt="" />
            </Movie_pics>
            <Info>
                <h4>{m.name || m.original_name || m.original_title || m.title}</h4>
                <p>{m.media_type} . {m.first_air_date}</p>
            </Info>
        </Cards1>
        )) }
      </Movie_container>
    </Search_styles>
  )
}

export default Search
