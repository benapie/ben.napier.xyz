import { DefaultTheme } from "themes";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";
import { PageAnimationProvider } from "providers/PageAnimationProvider";

export type PreludeProps = { children: ReactNode };

export const Prelude = ({ children }: PreludeProps) => (
  <PageAnimationProvider>
    <ThemeProvider theme={DefaultTheme}>
      <MemoryRouter>{children}</MemoryRouter>
    </ThemeProvider>
  </PageAnimationProvider>
);
