import { useState } from "react"
import { ButtonS } from "../../components/Button"
import { InputWrapper, LoginForm, LoginStyles, SignDiv } from "./Styles"
import { useNavigate } from "react-router-dom"
import {  OverlayDiv } from "../splashpage/Style"


const Login:React.FC = () => {

    const navigate = useNavigate()
    const [userName, setUserName] = useState<string>("");
    const [userPw, setUserPw] = useState<string>("");
    const [inputSN, setInputSN] = useState<string>("")
    const [inputSP, setInputSP] = useState<string>("")
    

      // get user name
      let data = JSON.parse(localStorage.getItem("user2") as string)
    console.log(data)

    //handle inputChange validation
    const handleInputChange = (e:React.FormEvent<HTMLDivElement>)=>{
      e.preventDefault()
      if(userName === "" && userPw === "")return
      if(!data){
        navigate("/signUp")
      }
      if(data){
        for (let i = 0; i < userName.length; i++) {
          if(userName[0] == userName[0].toLocaleUpperCase() && userName.length >= 5 && data.name === userName && data.pass === userPw){
              setInputSN("2px solid green")
              setInputSP("none")
              setTimeout(()=>{
                navigate("/homepage")
              },2000)
          }else{
              setInputSN("2px solid red")
              setInputSP("block")
          }
        }
      }else{
        setInputSN("2px solid red")
        setInputSP("block")
      }
    }

  
    //clear Localstorage
    const handleClearUser =()=>{
      localStorage.removeItem("user2")
      setUserName("")
      setUserPw("")

    }

//navigate user to Signup page
const NavSignup = ()=>{
  navigate("/signUp")
}

  return (
    <LoginStyles onSubmit={e =>handleInputChange(e)} >
     <OverlayDiv />
      <LoginForm>
        <h1>Log in</h1>

        <InputWrapper state={inputSN} state2={inputSP}>
            <input type="text" name="name" value={userName} placeholder="Enter Name.." onChange={e=>setUserName(e.target.value)} required/>
            <span>First latter  uppercased and five letters minimum</span>
            <input type="password" name="pw" value={userPw} placeholder="Enter password"  onChange={e=>setUserPw(e.target.value)} required/>
        </InputWrapper>
        <ButtonS  children="Log in" size="60%"  type="submit" />
      </LoginForm>
        <SignDiv>
            <span onClick={handleClearUser}>Clear profile</span>
            <span onClick={NavSignup}>Sign up </span>
        </SignDiv>
    </LoginStyles>
  )
}

export default Login
