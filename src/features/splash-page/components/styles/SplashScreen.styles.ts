import styled from "styled-components";

export const SplashScreen = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: min-content;
  row-gap: 50px;
`;

export const Subtitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2em;
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.accent01};
  background-color: ${({ theme }) => theme.colors.layer01};

  padding: 20px;
  font-size: 5em;

  white-space: nowrap;
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.accent02};
`;
