import styled from "styled-components";

export const DetailsBox = styled.div<{ direction: "ltr" | "rtl" }>`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) =>
    direction === "ltr" ? "row" : "row-reverse"};
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.layer01};

  box-sizing: border-box;

  width: 500px;
  min-height: 30px;
`;

export const Arrow = styled.div<{ direction: "left" | "right" }>`
  border: solid 15px transparent;
  height: 0;
  ${({ direction, theme }) => {
    if (direction === "left") {
      return `
        margin-left: -15px;
        border-right-color: ${theme.colors.layer01};
        `;
    }
    return `
      margin-right: -15px;
      border-left-color: ${theme.colors.layer01};
      `;
  }}
`;
