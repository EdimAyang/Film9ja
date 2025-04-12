import { useNavigate } from "react-router-dom"
import {  Cards1, Info, Input_container, Movie_container, Movie_pics, Search_styles } from "./Styles"

const Search = () => {
const navigate = useNavigate()

    const handleNav = ()=>{
        navigate("/homepage")
      }

  return (
    <Search_styles>
      <Input_container>
        <img src="/public/icon/bars-staggered-solid (1).svg" alt="" onClick={handleNav}/>
        <input type="text" placeholder="Search Movie"/>
      </Input_container>
      <Movie_container>
        <Cards1>
            <Movie_pics>
                <img src="/src/assets/Spiderman-pics.jpeg" alt="" />
            </Movie_pics>
            <Info>
                <h4>spiderman</h4>
                <p>movie . 2025 . united states of America</p>
                <p>science Fiction. Action.Thriller</p>
                
            </Info>
        </Cards1>
        <Cards1>
            <Movie_pics>
                <img src="/src/assets/batman-pics.jpeg" alt="" />
            </Movie_pics>
            <Info>
                <h4>Batman</h4>
                <p>movie . 2025 . united states of America</p>
                <p>science Fiction. Action.Thriller</p>
            </Info>
        </Cards1>
        <Cards1>
            <Movie_pics>
                <img src="/src/assets/AlienRomulus-pics.avif" alt="" />
            </Movie_pics>
            <Info>
                <h4>Alien</h4>
                <p>movie . 2025 . united states of America</p>
                <p>science Fiction. Action.Thriller</p>
            </Info>
        </Cards1>
        <Cards1>
            <Movie_pics>
                <img src="/src/assets/Abigal-pics.jpg" alt="" />
            </Movie_pics>
            <Info>
                <h4>Abigail</h4>
                <p>movie . 2025 . united states of America</p>
                <p>science Fiction. Action.Thriller</p>
            </Info>
        </Cards1>
        <Cards1>
            <Movie_pics>
                <img src="/src/assets/Titanic-pics.jpg" alt="" />
            </Movie_pics>
            <Info>
                <h4>Titanic</h4>
                <p>movie . 2025 . united states of America</p>
                <p>science Fiction. Action.Thriller</p>
            </Info>
        </Cards1>
        <Cards1>
            <Movie_pics>
                <img src="/src/assets/black-panther-pics.jpg" alt="" />
            </Movie_pics>
            <Info>
                <h4>Black Panther</h4>
                <p>movie . 2025 . united states of America</p>
                <p>science Fiction. Action.Thriller</p>
            </Info>
        </Cards1>
      </Movie_container>
    </Search_styles>
  )
}

export default Search
