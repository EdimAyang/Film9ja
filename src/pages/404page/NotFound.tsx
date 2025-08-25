
import { useNavigate } from 'react-router-dom'
import { Message, Not_Found_Styles } from './Style'

const NotFound = () => {
  const navigate = useNavigate()

  const handleNav = ()=>{
    navigate("/")
  }
  return (
    <Not_Found_Styles>
      <img 
      src="/icon/arrow-left-solid.svg"
       alt="arrow left"
       className='arrow_left' 
       onClick={handleNav}
       />
       <Message>
        <img src="/error-6482984_1280.png" alt="error image" />
        <p> This Page Does Not Exist</p>
       </Message>
    </Not_Found_Styles>
  )
}

export default NotFound
