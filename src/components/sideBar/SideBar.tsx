import { NavLink } from "react-router-dom";
import { Navigations, Side_bar } from "./Style";
import InstallPrompt from "../InstallPrompt";
import { useSidebarStore } from "../../store/sidebarStore";
import { XIcon } from "lucide-react";

const SideBar: React.FC = () => {
  const { toggle, isOpen } = useSidebarStore();

  return (
    <Side_bar active={isOpen.toString()}>
      <XIcon className="close-icon" onClick={() => toggle()} />
      <Navigations>
        <NavLink
          to="/"
          onClick={() => toggle()}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/moviespage"
          onClick={() => toggle()}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Movies
        </NavLink>
        <NavLink
          to="/tvSeriespage"
          onClick={() => toggle()}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          TV Series
        </NavLink>
        <span onClick={() => toggle()}>
          <InstallPrompt />
        </span>
      </Navigations>
    </Side_bar>
  );
};

export default SideBar;
