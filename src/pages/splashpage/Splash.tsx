import { ButtonS } from "../../components/Button"
import { Logo, OverlayDiv, Splash_Styles } from "./Style"
import { useNavigate } from "react-router-dom"


const Splash = () => {
    const navigate = useNavigate()

    const handleNavigate = ()=>{
        navigate("/homepage")
    }
  return (
    <Splash_Styles>
        <OverlayDiv />
      <Logo >
        <h1>Film<span>9ja</span></h1>
      </Logo>
      <ButtonS children="Get started" onClick={handleNavigate}/>
    </Splash_Styles>
  )
}

export default Splash
