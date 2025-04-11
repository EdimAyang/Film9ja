import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Global_Css } from "./GlobalStyles"

//pages
import Splash from "./pages/splashpage/Splash"


function App() {
 //Router
 const Router = createBrowserRouter([
  {
    path:"/",
    element:<Splash />
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
