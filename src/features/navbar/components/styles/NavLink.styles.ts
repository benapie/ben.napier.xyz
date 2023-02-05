import styled from "styled-components";

export const NavLink = styled.button<{
  selected: boolean;
}>`
  all: unset;
  user-select: none;

  cursor: ${({ selected }) => (selected ? "default" : "pointer")};
  background-color: ${({ theme }) => theme.colors.layer01};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-transform: uppercase;
  padding: 10px;

  box-sizing: border-box;

  border-bottom: ${({ selected, theme }) =>
    selected ? `1px solid ${theme.colors.accent01}` : "1px solid transparent"};
`;
