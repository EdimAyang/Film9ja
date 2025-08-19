
import { Link } from 'react-router-dom'
import { Navigations, Side_bar } from './Style'
import { useContext } from 'react';
import { BooleanContext } from "../../App"


const SideBar:React.FC = () => {
const active = useContext(BooleanContext)

  
  return (
    <Side_bar active={active?.Bar}>
      <img src="/icon/xmark-solid (1).svg" alt="Photos" onClick={active?.toggler}/>
      <Navigations>
        <Link to="/" onClick={active?.toggler}>Home</Link>
        <Link to="/moviespage" onClick={active?.toggler}>Movies</Link>
        <Link to="/tvSeriespage" onClick={active?.toggler}>TV Series</Link>
      </Navigations>
    </Side_bar>
  )
}

export default SideBar
