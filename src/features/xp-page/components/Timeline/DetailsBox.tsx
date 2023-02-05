import { ReactNode } from "react";
import * as Styled from "./styles/DetailsBox.styles";

export type DetailsBoxProps = {
  direction: "ltr" | "rtl" | "no-arrow";
  children?: ReactNode;
};

export const DetailsBox = ({ direction, children = null }: DetailsBoxProps) => (
  <Styled.DetailsBox direction={direction !== "no-arrow" ? direction : "ltr"}>
    <Styled.Content>{children}</Styled.Content>
    {direction !== "no-arrow" && (
      <Styled.Arrow direction={direction === "ltr" ? "right" : "left"} />
    )}
  </Styled.DetailsBox>
);
