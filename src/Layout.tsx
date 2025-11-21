import { Outlet } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import SideBar from "./components/sideBar/SideBar";
import styled from "styled-components";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const location = useLocation();

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

useEffect(() => {
    if (!isOnline) {
      toast.error("You are currently offline.");
    }
  }, [isOnline]);

  return (
    <LayoutStyle>
    {location.pathname !== '/searchpage'  && <Nav />}
      <SideBar />
      <main className="main">
        <Outlet />
      </main>
    </LayoutStyle>
  );
};

export default Layout;

const LayoutStyle = styled.div`
  background-color: #000;
  height: 100vh;
  overflow: auto;
  width: 100%;
  .main {
    margin-top: 15%;
    width: 100%;
    /* height: auto; */
    //tablet view
    @media screen and (min-width: 600px) {
      width: 100%;
      max-width: 600px;
      margin: auto;
      margin-top: 10%;
    }
    //laptop
    @media screen and (min-width: 900px) {
      width: 100%;
      max-width: 800px;
      margin: auto;
      margin-top: 7%;
    }
  }
`;
