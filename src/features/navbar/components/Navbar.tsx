import { Animation, usePageAnimation } from "providers/PageAnimationProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "./NavLink";
import * as Styled from "./styles/Navbar.styles";

export const Navbar = () => {
  const { setAnimation } = usePageAnimation();
  const { onNavLinkClick, currentPage } = useNavbarNavigation({ setAnimation });

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

type NavLinkID = "home" | "experience" | "contact";

const navLinkIdToOrder = {
  home: 0,
  experience: 1,
  contact: 2,
} satisfies Record<NavLinkID, number>;

const useNavbarNavigation = ({
  setAnimation,
}: {
  setAnimation: (animation: Animation) => void;
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const rawCurrentPage = location.pathname.slice(1);
  const currentPage = isKnownPage(rawCurrentPage) ? rawCurrentPage : "unknown";

  return {
    currentPage,
    onNavLinkClick: (navLink: NavLinkID) => {
      if (currentPage === "unknown") {
        setAnimation("initial");
      } else if (navLinkIdToOrder[navLink] < navLinkIdToOrder[currentPage]) {
        setAnimation("ltr");
      } else {
        setAnimation("rtl");
      }
      navigate(`/${navLink}`);
    },
  };
};
