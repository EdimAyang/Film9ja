
import { useNavigate } from "react-router-dom"
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
      <img src="/icon/magnifying-glass-solid (3).svg" alt="" onClick={handleNav}/>
      <img src="/public/icon/bars-staggered-solid (1).svg" alt="" onClick={active?.toggler}/>
    </Navigation>
    </Nav_bar>
  )
}

export default Nav
