import type { MotionProps } from "motion/react";

export function fadeInOut() {
  return {
    exit: { opacity: 0 },
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  } as MotionProps;
}
