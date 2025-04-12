import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Global_Css } from "./GlobalStyles"
import { createContext } from "react"
import { Ibars } from "./interface";

export const BooleanContext = createContext<Ibars | null>(null);
//pages
import Splash from "./pages/splashpage/Splash"
import Login from "./pages/loginpage/Login"
import SignUP from "./pages/signUp/Sign"
import Home from "./pages/homepage/Home"
import Search from "./pages/searchpage/Search"
import { useState } from "react"


function App() {
const[Bar, setBar] = useState<boolean>(false)

const toggler = ()=>{
  setBar(!Bar)
}

 //Router
 const Router = createBrowserRouter([
  {
    path:"/",
    element:<Splash />
  },

  {
    path:"/loginpage",
    element:<Login />
  },

  {
    path:"/signUp",
    element:<SignUP />
  },

  {
    path:"/homepage",
    element:<Home/>
  }, 

  {
    path:"/searchpage",
    element:<Search />
  }

 ])

  return (
    <>
    <Global_Css />
    <BooleanContext.Provider value={{Bar, toggler}}>
      <RouterProvider router={Router} />
    </BooleanContext.Provider>
    
    </>
  )
}

export default App
