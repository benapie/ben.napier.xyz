import { motion } from "framer-motion";
import styled from "styled-components";

export const Card = styled.button`
  all: unset;
  background-color: ${({ theme }) => theme.colors.layer01};
  width: 300px;
  display: grid;
  grid-template-rows: 112px 210px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
`;

export const CardBorder = styled(motion.div)`
  position: absolute;
  z-index: -1;
  top: -1px;
  left: -1px;
  border: 1px solid red;
`;

export const ImageHeading = styled.img`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  object-fit: contain;
  padding: 30px;
  filter: invert(80%) sepia(35%) saturate(336%) hue-rotate(150deg)
    brightness(87%) contrast(85%);
`;

export const TextHeading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 30px;
  color: ${({ theme }) => theme.colors.accent01};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 2.5em;
`;

export const Icon = styled.img`
  padding: 50px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  object-fit: contain;

  filter: invert(96%) sepia(12%) saturate(786%) hue-rotate(109deg)
    brightness(77%) contrast(86%);
`;
