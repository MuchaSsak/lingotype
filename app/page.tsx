"use client";

import React from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

import useHandleTyping from "@/hooks/useHandleTyping";
import TypingInput from "@/components/typing/TypingInput";
import TypingInfo from "@/components/typing/TypingInfo";
import TypingTranslation from "@/components/typing/TypingTranslation";
import TypingResetButton from "@/components/typing/TypingResetButton";
import TypingSettings from "@/components/typing/TypingSettings";
import useHandleButtonsFocus from "@/hooks/useHandleButtonsFocus";
import { useTyping } from "@/contexts/TypingContext";
import { fadeInOut } from "@/lib/animations";
import WordsListsMenu from "@/components/wordsLists/WordsListsMenu";

function Homepage() {
  const { gameStatus } = useTyping();

  useHandleTyping();
  useHandleButtonsFocus();

  return (
    <div className="min-h-screen text-3xl">
      <AnimatePresence>
        {gameStatus === "ended" && (
          <motion.div
            {...fadeInOut()}
            className="fixed bottom-1/2 flex w-screen translate-y-14 transform-gpu flex-col gap-4"
          >
            <p className="text-center">Finished!</p>
            <TypingResetButton />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {gameStatus !== "ended" && (
          <motion.div {...fadeInOut()}>
            <TypingSettings />

            <div className="fixed bottom-1/2 flex w-screen translate-y-14 transform-gpu flex-col gap-4">
              <TypingInfo />
              <TypingTranslation />
              <TypingInput />
              <TypingResetButton />
            </div>

            <WordsListsMenu />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Homepage;
