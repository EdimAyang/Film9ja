import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}


const ScrollToTop: React.FC<Props> = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'});
  }, [location.pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
