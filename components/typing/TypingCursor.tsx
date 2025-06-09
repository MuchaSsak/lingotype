"use client";

import React from "react";
import * as motion from "motion/react-client";

import { useTyping } from "@/contexts/TypingContext";
import { TYPING_INPUT_LETTER_WIDTH_PX } from "@/components/typing/TypingInput";

function TypingCursor() {
  const { currentTotalCharacterIndex } = useTyping();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        repeat: Infinity,
        easings: ["easeInOut"],
        repeatType: "reverse",
        duration: 0.5,
      }}
      className="bg-primary absolute left-0 h-9 w-[3px] transition-[left]"
      style={{
        left: `${TYPING_INPUT_LETTER_WIDTH_PX * currentTotalCharacterIndex}px`,
      }}
    />
  );
}

export default TypingCursor;
