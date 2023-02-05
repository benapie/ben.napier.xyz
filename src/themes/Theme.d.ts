import "styled-components";

interface Colors {
  background: string;
  layer01: string;
  layer01Hover: string;
  textPrimary: string;
  accent01: string;
  accent02: string;
}

interface Fonts {
  body: string;
  heading: string;
}

declare module "styled-components" {
  export interface Theme {
    colors: Colors;
    fonts: Fonts;
  }
}
