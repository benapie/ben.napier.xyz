import { AnimationProps } from "framer-motion";
import { createContext, ReactNode, useContext, useState } from "react";

export const usePageAnimation = () => useContext(PageAnimationContext);

export const PageAnimationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [animation, setAnimation] = useState<"ltr" | "rtl" | "initial">(
    "initial"
  );

  const animationProps = animationToProps[animation];

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <PageAnimationContext.Provider value={{ animationProps, setAnimation }}>
      {children}
    </PageAnimationContext.Provider>
  );
};

export type Animation = "ltr" | "rtl" | "initial";

export type PageAnimationContext = {
  animationProps: AnimationProps;
  setAnimation: (value: Animation) => void;
};

const animationToProps = {
  ltr: {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
    transition: {
      type: "tween",
      ease: "anticipate",
      duration: 0.85,
    },
  },
  rtl: {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "-100%", position: "relative" },
    transition: {
      type: "tween",
      ease: "anticipate",
      duration: 0.85,
    },
  },
  initial: {
    initial: {},
    animate: {},
    exit: {},
    transition: {},
  },
} satisfies Record<Animation, AnimationProps>;

const PageAnimationContext = createContext<PageAnimationContext>({
  animationProps: animationToProps.initial,
  setAnimation: () => {},
});
