import { useNavigate, NavLink } from "react-router-dom";
import { Logo, Nav_bar, Navigation, NavWrapper } from "./Styles";
import InstallPrompt from "../InstallPrompt";
import { useSidebarStore } from "../../store/sidebarStore";
import { SearchIcon, MenuIcon } from "lucide-react";

const Nav: React.FC = () => {
  const navigate = useNavigate();
  const { toggle } = useSidebarStore();

  const handleNav = () => {
    navigate("/searchpage");
  };

  return (
    <NavWrapper>
      <Nav_bar>
        <Logo onClick={() => navigate("/")}>
          Film<span>9ja</span>
        </Logo>
        <Navigation>
          <InstallPrompt />
          <SearchIcon
            style={{ color: "#ffff" }}
            onClick={handleNav}
            className="glass"
          />
          <MenuIcon
            className="menu"
            style={{ color: "#fff" }}
            onClick={() => toggle()}
          />

          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/tvSeriespage"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Tv Series
          </NavLink>
          <NavLink
            to="/moviespage"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Movies
          </NavLink>
        </Navigation>
      </Nav_bar>
    </NavWrapper>
  );
};

export default Nav;
