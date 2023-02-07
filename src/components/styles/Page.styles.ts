import { motion } from "framer-motion";
import styled from "styled-components";

export const Page = styled(motion.div)<{ top: number }>`
  position: absolute;
  inset: ${({ top }) => top}px 0 0;
  overflow-y: auto;
`;
