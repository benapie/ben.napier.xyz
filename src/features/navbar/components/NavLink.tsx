import { MouseEventHandler } from "react";
import * as Styled from "./styles/NavLink.styles";

export type NavLinkProps = {
  text: string;
  selected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const NavLink = ({ text, selected, onClick }: NavLinkProps) => (
  <Styled.NavLink onClick={onClick} selected={selected}>
    {text}
  </Styled.NavLink>
);
