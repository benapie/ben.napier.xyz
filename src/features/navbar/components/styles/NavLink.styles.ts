import { motion } from "framer-motion";
import styled from "styled-components";

export const NavLink = styled.button<{
  selected: boolean;
}>`
  all: unset;
  user-select: none;

  cursor: ${({ selected }) => (selected ? "default" : "pointer")};

  background-color: ${({ theme }) => theme.colors.layer01};
  box-sizing: border-box;
  text-transform: uppercase;
  padding: 10px;
  font-family: ${({ theme }) => theme.fonts.heading};

  position: relative;

  transition: all 300ms ease-out 0s;

  :hover {
    background-color: ${({ theme }) => theme.colors.layer01Hover};
  }
`;

export const Underline = styled(motion.div)`
  position: absolute;
  bottom: -1px;
  right: 0;
  left: 0;

  height: 1px;
  background-color: ${({ theme }) => theme.colors.accent01};
`;
