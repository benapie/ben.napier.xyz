import styled from "styled-components";

export const SplashScreen = styled.div`
  position: relative;
  padding-top: 20vh;
  padding-left: 15vw;
`;

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

  padding: 20px 50px;
  font-size: 5em;

  white-space: nowrap;
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.accent02};
`;
