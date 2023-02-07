import { DefaultTheme } from "themes";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";

export type PreludeProps = { children: ReactNode };

export const Prelude = ({ children }: PreludeProps) => (
  <ThemeProvider theme={DefaultTheme}>
    <MemoryRouter>{children}</MemoryRouter>
  </ThemeProvider>
);
