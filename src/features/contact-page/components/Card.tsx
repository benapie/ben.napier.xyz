import { AnimatedBorder } from "components/AnimatedBorder";
import { createRef } from "react";
import { openInNewTab } from "utils/openInNewTab";
import * as Styled from "./styles/Card.styles";

export type CardProps = {
  iconSource: string;
  link: string;
} & (
  | { headingSource: string; headingText?: null }
  | { headingSource?: null; headingText: string }
);

export const Card = ({
  iconSource,
  link,
  headingSource = null,
  headingText = null,
}: CardProps) => {
  const ref = createRef<HTMLButtonElement>();

  return (
    <Styled.Card ref={ref} onClick={() => openInNewTab(link)}>
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
