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
}: CardProps) => (
  <Styled.Card>
    {headingSource ? (
      <Styled.ImageHeading src={headingSource} alt="icon" />
    ) : (
      <Styled.TextHeading>{headingText}</Styled.TextHeading>
    )}

    <Styled.Icon src={iconSource} alt="icon" />
  </Styled.Card>
);
