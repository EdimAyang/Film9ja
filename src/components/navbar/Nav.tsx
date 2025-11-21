import { useNavigate, NavLink } from "react-router-dom";
import { Logo_2, Nav_bar, Navigation, NavWrapper } from "./Styles";
import InstallPrompt from "../InstallPrompt";
import { useSidebarStore } from "../../store/sidebarStore";


const Nav: React.FC = () => {
  const navigate = useNavigate();
  const { toggle } = useSidebarStore();

  const handleNav = () => {
    navigate("/searchpage");
  };

  return (
    <NavWrapper>
      <Nav_bar>
        <Logo_2 onClick={() => navigate("/")}>
          <h3>
            Film<span>9ja</span>
          </h3>
        </Logo_2>
        <Navigation>
          <InstallPrompt />
            <img
              src="/icon/magnifying-glass-solid (3).svg"
              alt="magnifying-glass icon"
              onClick={handleNav}
              className="glass"
            />
          <img
            src="/icon/bars-staggered-solid (1).svg"
            alt="hamburger icon"
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
