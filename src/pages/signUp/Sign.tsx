
import { SignUpForm, SignUPInputWrapper, SignUpStyles,SignDiv } from './Styles'
import { ButtonS } from '../../components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OverlayDiv } from '../splashpage/Style';


const SignUP = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState<string>("");
    const [userPw, setUserPw] = useState<string>("");
    const [inputSN, setInputSN] = useState<string>("")
    const [inputSP, setInputSP] = useState<string>("")

     //User Object
 let User2 = {
    name: userName,
    pass: userPw
  }

   // get user name
 let data = JSON.parse(localStorage.getItem("user2") as string)

console.log(data)

    //set user details in localSate
const handleLocalStorage = (User2:object)=>{
    localStorage.setItem("user2", JSON.stringify(User2))
  }


  //handle inputChange validation
const handleSignUp = (e:React.FormEvent<HTMLDivElement>)=>{
    e.preventDefault()
    if(userName === "" && userPw === "")return
    if(data)return
    if(!data){
      for (let i = 0; i < userName.length; i++) {
        if(userName[0] == userName[0].toLocaleUpperCase() && userName.length >= 5 )
  {
            setInputSN("2px solid green")
            setInputSP("none")
            handleLocalStorage(User2)
            setTimeout(()=>{
              navigate("/loginpage")
            },2000)
        }else{
            setInputSN("2px solid red")
            setInputSP("block")
        }
      }
    }
  }
  //navigate
  const handleNavToLogIn = ()=>{
    navigate("/loginpage")
  }
  return (
    <SignUpStyles onSubmit={e =>handleSignUp(e)}>
        <OverlayDiv />
      <SignUpForm>
        {data && <h4>Profile Created</h4>}
        <h1>Sign up</h1>
        <SignUPInputWrapper state={inputSN} state2={inputSP}>
            <input type="text" name="name"  placeholder="Enter Name.." onChange={e=>setUserName(e.target.value)} required/>
            <span>First latter  uppercased and five letters minimum</span>
            <input type="password" name="pw" placeholder="Enter password"  onChange={e=>setUserPw(e.target.value)} required/>
        </SignUPInputWrapper>
        <ButtonS  children="Sign up" size="60%"  type="submit" />
      </SignUpForm>
      <SignDiv>
        <span onClick={handleNavToLogIn}>Log IN</span>
    </SignDiv>
    </SignUpStyles>
  )
}

export default SignUP