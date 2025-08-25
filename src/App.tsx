import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Global_Css } from "./GlobalStyles";
import { createContext } from "react";
import { Ibars } from "./interface";
import { useState } from "react";
export const BooleanContext = createContext<Ibars | null>(null);
import { useScrollToTop } from "./hooks/ScrollToTop";

//pages
import Home from "./pages/homepage/Home";
import Search from "./pages/searchpage/Search";
import Movies from "./pages/moviespage/Movies";
import TV from "./pages/tvSeriespage/TV";
import Info from "./pages/movieInfo/Info";
import Vplayer from "./pages/videoplayer/Vplayer";
import TvInfo from "./pages/tvinfo/TvInfo";
import NotFound from "./pages/404page/NotFound";

function App() {
  const [Bar, setBar] = useState<boolean>(true);
  useScrollToTop()

  const toggler = () => {
    setBar(!Bar);
  };

  //Router
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* <Route path="/" element={<Splash />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/searchpage" element={<Search />} />
        <Route path="/moviespage" element={<Movies />} />
        <Route path="/tvSeriespage" element={<TV />} />
        <Route path="/videoplayer" element={<Vplayer />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/movieInfo" element={<Info />} />
        <Route path="/tvinfo" element={<TvInfo />} />
      </Route>
    )
  );

  return (
    <div>
      <Global_Css />
      <BooleanContext.Provider value={{ Bar, toggler }}>
        <RouterProvider router={Router} />
      </BooleanContext.Provider>
    </div>
  );
}

export default App;
