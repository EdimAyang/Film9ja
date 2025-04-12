import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Global_Css } from "./GlobalStyles"

//pages
import Splash from "./pages/splashpage/Splash"
import Login from "./pages/loginpage/Login"
import SignUP from "./pages/signUp/Sign"
import Home from "./pages/homepage/Home"


function App() {
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
    element:<Home />
  }
 ])

  return (
    <>
    <Global_Css />
    <RouterProvider router={Router} />
    </>
  )
}

export default App
