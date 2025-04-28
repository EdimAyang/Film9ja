import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import { Global_Css } from "./GlobalStyles"
import { createContext } from "react"
import { Ibars } from "./interface";
import { useState } from "react"

export const BooleanContext = createContext<Ibars | null>(null);
//pages
import Splash from "./pages/splashpage/Splash"
import Home from "./pages/homepage/Home"
import Search from "./pages/searchpage/Search"
import Movies from "./pages/moviespage/Movies";
import TV from "./pages/tvSeriespage/TV";
import Info from "./pages/movieInfo/Info";
import Overview from "./pages/overviewpage/Overview";
import Similar from "./pages/similarpage/Similar";
import Company from "./pages/company/Company";


function App() {
const[Bar, setBar] = useState<boolean>(true)

const toggler = ()=>{
  setBar(!Bar)
}

 //Router
 const Router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path = "/" element= {<Splash />} />
    <Route path="/homepage" element= {<Home />} />
    <Route path="/searchpage" element= {<Search />} />
    <Route path="/moviespage" element= {<Movies />} />
    <Route path="/tvSeriespage" element= {<TV />} />
    <Route path="/movieInfo" element={<Info />}>
      <Route path="overviewpage" element={<Overview />}/> 
      <Route path="similarpage" element={<Similar />}/> 
      <Route path="company" element={<Company />} />
    </Route>
  </Route>
 ))

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
