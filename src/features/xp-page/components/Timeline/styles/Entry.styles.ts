import styled from "styled-components";

const OuterContainer = styled.div`
  display: flex;
  padding: 50px 25px;
  box-sizing: border-box;
`;

export const LeftContainer = styled(OuterContainer)`
  justify-content: flex-end;
`;

export const RightContainer = styled(OuterContainer)`
  justify-content: flex-start;
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const InnerLine = styled.div`
  width: 1px;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.accent01};
`;

export const InnerDot = styled.div`
  position: absolute;
  transform: translate(0, -50%);
  top: 50%;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.accent02};
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 30px;
  position: relative;
`;

export const H1 = styled.div`
  color: ${({ theme }) => theme.colors.accent01};
  font-family: ${({ theme }) => theme.fonts.heading};

  font-size: 1.5em;
`;
export const H2 = styled.div`
  color: ${({ theme }) => theme.colors.accent02};
  font-family: ${({ theme }) => theme.fonts.heading};

  font-size: 1.2em;
`;
export const P = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.accent01};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5em;
`;
