import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Global_Css } from "./GlobalStyles";
import { createContext } from "react";
import { Ibars } from "./interface";
import { useState, useEffect } from "react";

export const BooleanContext = createContext<Ibars | null>(null);
//pages
import Splash from "./pages/splashpage/Splash";
import Home from "./pages/homepage/Home";
import Search from "./pages/searchpage/Search";
import Movies from "./pages/moviespage/Movies";
import TV from "./pages/tvSeriespage/TV";
import Info from "./pages/movieInfo/Info";
import Overview from "./pages/overviewpage/Overview";
import Similar from "./pages/similarpage/Similar";
import Company from "./pages/company/Company";
import Vplayer from "./pages/videoplayer/Vplayer";
import TvInfo from "./pages/tvinfo/TvInfo";
import NotFound from "./pages/404page/NotFound";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}
function App() {
  const [Bar, setBar] = useState<boolean>(true);
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(promptEvent);
      handleInstallClick();
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User dismissed the install prompt");
    }
    setDeferredPrompt(null);
  };
  const toggler = () => {
    setBar(!Bar);
  };

  //Router
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Splash />} />
        <Route path="/homepage" element={<Home />} />
        <Route path="/searchpage" element={<Search />} />
        <Route path="/moviespage" element={<Movies />} />
        <Route path="/tvSeriespage" element={<TV />} />
        <Route path="/videoplayer" element={<Vplayer />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/movieInfo" element={<Info />}>
          <Route path="overviewpage" element={<Overview />} />
          <Route path="similarpage" element={<Similar />} />
          <Route path="company" element={<Company />} />
        </Route>
        <Route path="/tvinfo" element={<TvInfo />}>
          <Route path="overviewpage" element={<Overview />} />
          <Route path="similarpage" element={<Similar />} />
          <Route path="company" element={<Company />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <Global_Css />
      <BooleanContext.Provider value={{ Bar, toggler }}>
        <RouterProvider router={Router} />
      </BooleanContext.Provider>
    </>
  );
}

export default App;
