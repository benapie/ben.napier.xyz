import { DefaultTheme } from "themes";
import { ReactNode, StrictMode } from "react";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";

export type PreludeProps = { children: ReactNode };

export const Prelude = ({ children }: PreludeProps) => (
  <StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <MemoryRouter>{children}</MemoryRouter>
    </ThemeProvider>
  </StrictMode>
);
