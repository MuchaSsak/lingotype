"use client";

import React from "react";
import * as motion from "motion/react-client";

import { cn, findAllSingleWordsCharactersCountInTypingData } from "@/lib/utils";
import { useTyping } from "@/contexts/TypingContext";
import TypingCursor from "@/components/typing/TypingCursor";

export const TYPING_INPUT_LETTER_WIDTH_PX = 18;
export const TYPING_INPUT_LETTER_HEIGHT_PX = 39;
export const TYPING_INPUT_MAX_INDEX_TO_RENDER_WORD = 10;

function TypingInput() {
  const {
    dataToType,
    currentTotalSingleWordIndex,
    currentTotalCharacterIndex,
    currentWordsSectionIndex,
  } = useTyping();

  const dataToTypeToRender = dataToType.slice(
    Math.max(
      currentWordsSectionIndex - TYPING_INPUT_MAX_INDEX_TO_RENDER_WORD,
      0,
    ),
    Math.min(
      currentWordsSectionIndex + TYPING_INPUT_MAX_INDEX_TO_RENDER_WORD,
      dataToType.length,
    ),
  );

  return (
    <div
      className="relative left-1/2 w-max transform-gpu overflow-hidden transition-transform"
      style={{
        height: TYPING_INPUT_LETTER_HEIGHT_PX + "px",
        transform: `translateX(-${
          TYPING_INPUT_LETTER_WIDTH_PX * currentTotalCharacterIndex
        }px)`,
        paddingLeft:
          currentWordsSectionIndex > TYPING_INPUT_MAX_INDEX_TO_RENDER_WORD
            ? `${
                (findAllSingleWordsCharactersCountInTypingData(
                  dataToType.slice(
                    0,
                    currentWordsSectionIndex -
                      TYPING_INPUT_MAX_INDEX_TO_RENDER_WORD,
                  ),
                ) +
                  1) *
                TYPING_INPUT_LETTER_WIDTH_PX
              }px`
            : undefined,
      }}
    >
      {/* Blinking cursor */}
      <TypingCursor />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex"
        style={{
          gap: TYPING_INPUT_LETTER_WIDTH_PX + "px",
        }}
      >
        {dataToTypeToRender.map((wordsSection) =>
          wordsSection.wordsToType.map((singleWord) => {
            /**
             * Single words
             */
            const singleWordToDisplay =
              singleWord.goal + singleWord.typed.slice(singleWord.goal.length);

            return (
              <span
                key={`${wordsSection.wordsSectionIndex}:${singleWord.totalSingleWordIndex}`}
              >
                {singleWordToDisplay.split("").map((letter, letterIndex) => {
                  /**
                   * Letters
                   */
                  const hasTypedLetterPerfectly =
                    singleWord.typed[letterIndex] ===
                    singleWord.goal[letterIndex];
                  const hasLetterTypo =
                    singleWord.typed[letterIndex] &&
                    singleWord.typed[letterIndex] !==
                      singleWord.goal[letterIndex];
                  const hasOverTyped = !singleWord.goal[letterIndex];
                  const hasSkippedOverMistake =
                    singleWord.hasMistake &&
                    currentTotalSingleWordIndex >
                      singleWord.totalSingleWordIndex;

                  return (
                    <span
                      key={`${wordsSection.wordsSectionIndex}:${singleWord.totalSingleWordIndex}:${letterIndex}`}
                      className={cn(
                        hasTypedLetterPerfectly
                          ? "text-foreground"
                          : "text-muted",
                        hasLetterTypo ? "text-destructive" : "",
                        hasOverTyped ? "text-red-800" : "",
                        hasSkippedOverMistake
                          ? "decoration-destructive underline decoration-2 underline-offset-[6px]"
                          : "",
                        "transition-colors",
                      )}
                    >
                      {letter}
                    </span>
                  );
                })}
              </span>
            );
          }),
        )}
      </motion.div>
    </div>
  );
}

export default TypingInput;
