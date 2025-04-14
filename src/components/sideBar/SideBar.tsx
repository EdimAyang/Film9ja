
import { Link } from 'react-router-dom'
import { Navigations, Side_bar } from './Style'
import { useContext } from 'react';
import { BooleanContext } from "../../App"


const SideBar:React.FC = () => {
const active = useContext(BooleanContext)

  console.log(active?.Bar)
  
  return (
    <Side_bar active={active?.Bar}>
      <img src="/icon/bars-staggered-solid (1).svg" alt="Photos" onClick={active?.toggler}/>
      <Navigations>
        <Link to="">Home</Link>
        <Link to="">Movies</Link>
        <Link to="">TV Series</Link>
        <Link to="">Profile</Link>
      </Navigations>
    </Side_bar>
  )
}

export default SideBar
