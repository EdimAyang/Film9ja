
import { useNavigate, Link } from "react-router-dom"
import { useContext } from "react"
import { BooleanContext } from "../../App"
import { Logo_2, Nav_bar, Navigation } from "./Styles"




const Nav:React.FC = () => {

const navigate = useNavigate()
const active = useContext(BooleanContext)


  const handleNav = ()=>{
    navigate("/searchpage")
  }

  return (
    <Nav_bar>
     <Logo_2 >
        <h3>Film<span>9ja</span></h3>
    </Logo_2>
    <Navigation>
      <img src="/icon/magnifying-glass-solid (3).svg" alt="" onClick={handleNav} className="glass"/>
      <img src="/icon/bars-staggered-solid (1).svg" alt="" onClick={active?.toggler}/>
      
      <Link to="/" className="active">Home</Link>
      <Link to="/tvSeriespage">Tv Series</Link>
      <Link to="/moviespage">Movies</Link>
    </Navigation>
    </Nav_bar>
  )
}

export default Nav
