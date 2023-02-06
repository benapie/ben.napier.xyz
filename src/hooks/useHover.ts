import { RefObject, useEffect, useState } from "react";

export type HoverParams = {
  hoverRef: RefObject<HTMLDivElement>;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
};

export const useHover = ({
  hoverRef,
  onMouseOver: onMouseEnter = () => {},
  onMouseOut: onMouseLeave = () => {},
}: HoverParams) => {
  const [hovering, setIsHovering] = useState<boolean>(false);

  const onMouseOver = () => {
    setIsHovering(true);
    onMouseEnter();
  };
  const onMouseOut = () => {
    setIsHovering(false);
    onMouseLeave();
  };

  useEffect(() => {
    const node = hoverRef.current;
    if (!node) return () => {};

    node.addEventListener("mouseenter", onMouseOver);
    node.addEventListener("mouseleave", onMouseOut);

    return () => {
      node.removeEventListener("mouseenter", onMouseOver);
      node.removeEventListener("mouseleave", onMouseOut);
    };
  }, [hoverRef.current]);

  return { hovering };
};
