import { AnimatedBorder } from "components/AnimatedBorder";
import { createRef } from "react";
import * as Styled from "./styles/Card.styles";

export type CardProps = {
  iconSource: string;
} & (
  | { headingSource: string; headingText?: null }
  | { headingSource?: null; headingText: string }
);

export const Card = ({
  iconSource,
  headingSource = null,
  headingText = null,
}: CardProps) => {
  const ref = createRef<HTMLDivElement>();

  return (
    <Styled.Card ref={ref}>
      {headingSource ? (
        <Styled.ImageHeading src={headingSource} alt="icon" />
      ) : (
        <Styled.TextHeading>{headingText}</Styled.TextHeading>
      )}

      <Styled.Icon src={iconSource} alt="icon" />
      <AnimatedBorder hoverRef={ref} />
    </Styled.Card>
  );
};
