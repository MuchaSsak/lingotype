"use client";

import { useTyping } from "@/contexts/TypingContext";
import React from "react";

function TypingInfo() {
  const {
    currentTotalSingleWordIndex,
    allSingleWordsCount,
    gameStatus,
    settings,
  } = useTyping();

  return (
    <div
      className="flex-1 -translate-y-1.5 transform-gpu"
      style={{
        opacity: settings.isEndless ? 0 : 1,
        userSelect: settings.isEndless ? "none" : "auto",
      }}
    >
      <span
        className="text-primary pl-8 transition-[opacity] duration-500"
        style={{ opacity: gameStatus === "active" ? 1 : 0 }}
      >
        {currentTotalSingleWordIndex}/{allSingleWordsCount}
      </span>
    </div>
  );
}

export default TypingInfo;
