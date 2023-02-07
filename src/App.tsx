import { Prelude } from "Prelude";
import { Navbar } from "features/navbar";
import { Routes } from "Routes";
import * as Styled from "./styles/App.styles";

export const App = () => (
  <Prelude>
    <Styled.App>
      <Styled.NavbarContainer>
        <Navbar />
      </Styled.NavbarContainer>
      <Routes />
    </Styled.App>
  </Prelude>
);
