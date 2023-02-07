import { useAnimationControls } from "framer-motion";
import { useHover } from "hooks/useHover";
import { RefObject, useEffect, useState } from "react";
import * as Styled from "./styles/Border.styles";

export type BorderProps = {
  hoverRef: RefObject<HTMLDivElement>;
};

export const AnimatedBorder = ({ hoverRef }: BorderProps) => {
  const { controls } = useAnimation({ hoverRef });

  return (
    <Styled.Border>
      <Styled.TopRight variants={TOP_RIGHT_VARIANTS} animate={controls} />
      <Styled.BottomLeft variants={BOTTOM_LEFT_VARIANTS} animate={controls} />
    </Styled.Border>
  );
};

const useAnimation = ({
  hoverRef,
}: {
  hoverRef: RefObject<HTMLDivElement>;
}) => {
  const controls = useAnimationControls();

  const animateIn = async () => {
    controls.set("initial");
    await controls.start("inFirst");
    await controls.start("inSecond");
  };

  const animateOut = async () => {
    await controls.start("outFirst");
    await controls.start("outSecond");
    controls.set("reset");
  };

  const { hovering } = useHover({ hoverRef });
  const [animating, setAnimating] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);

  useEffect(() => {
    if (hovering) {
      if (animating) return;
      setAnimating(true);
      animateIn().catch();
      return;
    }
    if (!animating || animatingOut) return;
    setAnimatingOut(true);
    animateOut()
      .then(() => {
        setAnimatingOut(false);
        setAnimating(false);
      })
      .catch();
  }, [hovering, animatingOut]);

  return { controls };
};

const ANIMATION_DURATION = 0.3;

const TRANSITION_FIRST = {
  type: "tween",
  ease: "easeIn",
  duration: ANIMATION_DURATION / 2,
};

const TRANSITION_SECOND = {
  type: "tween",
  ease: "easeOut",
  duration: ANIMATION_DURATION / 2,
};

const TOP_RIGHT_VARIANTS = {
  initial: { display: "block" },
  inFirst: { right: 0, transition: TRANSITION_FIRST },
  inSecond: { bottom: 0, transition: TRANSITION_SECOND },
  outFirst: { left: "calc(100% - 1px)", transition: TRANSITION_FIRST },
  outSecond: { top: "100%", transition: TRANSITION_SECOND },
  reset: {
    top: 0,
    left: 0,
    bottom: "100%",
    right: "100%",
    display: "none",
  },
};

const BOTTOM_LEFT_VARIANTS = {
  initial: { display: "block" },
  inFirst: { bottom: 0, transition: TRANSITION_FIRST },
  inSecond: { right: 0, transition: TRANSITION_SECOND },
  outFirst: { top: "calc(100% - 1px)", transition: TRANSITION_FIRST },
  outSecond: { left: "100%", transition: TRANSITION_SECOND },
  reset: {
    top: 0,
    left: 0,
    bottom: "100%",
    right: "100%",
    display: "none",
  },
};
