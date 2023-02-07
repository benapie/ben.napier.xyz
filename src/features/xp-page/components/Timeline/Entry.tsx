import { AnimatedBorder } from "components/AnimatedBorder";
import { createRef } from "react";
import { EntryData } from "../../types/EntryData";
import { DetailsBox } from "./DetailsBox";
import * as Styled from "./styles/Entry.styles";

export type EntryProps = {
  direction: "ltr" | "rtl";
  data: EntryData;
};

export const Entry = ({
  direction,
  data: { title, subtitle, body, date },
}: EntryProps) => {
  const hoverRef = createRef<HTMLDivElement>();

  const detailsElement = (
    <DetailsBox direction={direction}>
      <Styled.Details ref={hoverRef}>
        <Styled.H1>{title}</Styled.H1>
        <Styled.H2>{subtitle}</Styled.H2>
        <Styled.P>{body}</Styled.P>
        <AnimatedBorder hoverRef={hoverRef} />
      </Styled.Details>
    </DetailsBox>
  );
  const dateElement = <Styled.Date>{date}</Styled.Date>;

  return (
    <>
      <Styled.LeftContainer>
        {direction === "ltr" ? detailsElement : dateElement}
      </Styled.LeftContainer>
      <Styled.InnerContainer>
        <Styled.InnerLine />
        <Styled.InnerDot />
      </Styled.InnerContainer>
      <Styled.RightContainer>
        {direction === "ltr" ? dateElement : detailsElement}
      </Styled.RightContainer>
    </>
  );
};
