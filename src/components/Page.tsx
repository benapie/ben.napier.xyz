import { usePageAnimation } from "providers/PageAnimationProvider";
import { ReactNode } from "react";
import * as Styled from "./styles/Page.styles";

export type PageProps = {
  children: ReactNode;
  id: string;
  topOffset?: number;
};

export const Page = ({ children, id, topOffset = 150 }: PageProps) => {
  const { animationProps } = usePageAnimation();

  return (
    <Styled.Page key={id} top={topOffset} {...animationProps}>
      {children}
    </Styled.Page>
  );
};
