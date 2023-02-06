import { motion } from "framer-motion";
import styled from "styled-components";

export const Border = styled(motion.div)`
  position: absolute;
  inset: -1px;
  z-index: -1;
`;

export const BottomLeft = styled(motion.div)`
  display: none;
  position: absolute;
  inset: 0 100% 100% 0;
  border-left: 1px ${({ theme }) => theme.colors.accent01} solid;
  border-bottom: 1px ${({ theme }) => theme.colors.accent01} solid;
`;

export const TopRight = styled(motion.div)`
  display: none;
  position: absolute;
  inset: 0 100% 100% 0;
  border-right: 1px ${({ theme }) => theme.colors.accent01} solid;
  border-top: 1px ${({ theme }) => theme.colors.accent01} solid;
`;
