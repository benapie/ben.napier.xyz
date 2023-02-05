import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "./NavLink";
import * as Styled from "./styles/Navbar.styles";

export const Navbar = () => {
  const { onNavLinkClick, currentPage } = useNavbarNavigation();

  return (
    <Styled.Navbar>
      <NavLink
        text="home"
        selected={currentPage === "home"}
        onClick={() => onNavLinkClick("home")}
      />
      <NavLink
        text="experience"
        selected={currentPage === "experience"}
        onClick={() => onNavLinkClick("experience")}
      />
      <NavLink
        text="contact me"
        selected={currentPage === "contact"}
        onClick={() => onNavLinkClick("contact")}
      />
    </Styled.Navbar>
  );
};

const Page = {
  Home: "home",
  Experience: "experience",
  Contact: "contact",
} as const;
type Page = (typeof Page)[keyof typeof Page];
const isKnownPage = (val: string): val is Page =>
  Object.values(Page).some((page) => page === val);

const useNavbarNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const rawCurrentPage = location.pathname.slice(1);
  const currentPage = isKnownPage(rawCurrentPage)
    ? rawCurrentPage
    : ("unknown" as const);

  return {
    currentPage,
    onNavLinkClick: (navlink: "home" | "experience" | "contact") => {
      navigate(`/${navlink}`);
    },
  };
};
