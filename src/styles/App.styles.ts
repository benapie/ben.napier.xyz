import styled from "styled-components";

export const App = styled.div`
  position: absolute;
  inset: 0;

  /* display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 150px auto;
  overflow: hidden; */
  overflow: hidden;
`;

export const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 150px;
`;

export const PageContainer = styled.div`
  position: absolute;
  inset: 150px 0 0;
`;
