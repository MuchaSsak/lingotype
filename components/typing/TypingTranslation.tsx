"use client";

import React from "react";
import * as motion from "motion/react-client";

import { useTyping } from "@/contexts/TypingContext";
import { cn, findAllTranslationCharactersCountInTypingData } from "@/lib/utils";

const TYPING_TRANSLATION_LETTER_WIDTH_PX = 10.81;
const TYPING_TRANSLATION_WORD_HEIGHT_PX = 28;
const TYPING_TRANSLATION_MAX_INDEX_TO_RENDER_WORD = 12;

function TypingTranslation() {
  const {
    dataToType,
    currentTotalCharacterIndex,
    currentWordsSectionIndex,
    allTranslationCharactersCount,
    allSingleWordsCharactersCount,
    currentTotalSingleWordIndex,
    settings,
  } = useTyping();

  const dataToTypeToRender = dataToType.slice(
    Math.max(
      currentWordsSectionIndex - TYPING_TRANSLATION_MAX_INDEX_TO_RENDER_WORD,
      0,
    ),
    Math.min(
      currentWordsSectionIndex + TYPING_TRANSLATION_MAX_INDEX_TO_RENDER_WORD,
      dataToType.length,
    ),
  );

  return (
    <div
      className="transition-[opacity] duration-300"
      style={{
        opacity: settings.showTranslation ? 1 : 0,
        userSelect: settings.showTranslation ? "auto" : "none",
        height: TYPING_TRANSLATION_WORD_HEIGHT_PX + "px",
        paddingLeft:
          currentWordsSectionIndex > TYPING_TRANSLATION_MAX_INDEX_TO_RENDER_WORD
            ? `${
                (findAllTranslationCharactersCountInTypingData(
                  dataToType.slice(
                    0,
                    currentWordsSectionIndex -
                      TYPING_TRANSLATION_MAX_INDEX_TO_RENDER_WORD,
                  ),
                ) +
                  1) *
                TYPING_TRANSLATION_LETTER_WIDTH_PX
              }px`
            : undefined,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.25 }}
        className="relative left-1/2 flex w-max transform-gpu overflow-hidden pt-2 pb-4 text-lg transition-[transform]"
        style={{
          gap: TYPING_TRANSLATION_LETTER_WIDTH_PX,
          transform: `translateX(-${
            TYPING_TRANSLATION_LETTER_WIDTH_PX *
            allTranslationCharactersCount *
            (currentTotalCharacterIndex / allSingleWordsCharactersCount)
          }px)`,
        }}
      >
        {dataToTypeToRender.map((wordsSection) => {
          const hasTypedEntireWordsSectionPerfectly =
            wordsSection.wordsToType.every(
              (singleWord) => singleWord.goal === singleWord.typed,
            );
          const hasTypo = wordsSection.wordsToType.some(
            (singleWord) => singleWord.hasTypo,
          );
          const hasOverTyped = wordsSection.wordsToType.some(
            (singleWord) => singleWord.hasOverTyped,
          );
          const hasSkippedOverMistake = wordsSection.wordsToType.some(
            (singleWord) =>
              singleWord.hasMistake &&
              singleWord.totalSingleWordIndex < currentTotalSingleWordIndex,
          );
          return (
            <span
              aria-label={`translation-wordsSectionIndex:${wordsSection.wordsSectionIndex}`}
              key={`translation-wordsSectionIndex:${wordsSection.wordsSectionIndex}`}
              className={cn(
                hasTypedEntireWordsSectionPerfectly
                  ? "text-foreground"
                  : "text-muted",
                hasTypo ? "text-destructive" : "",
                hasOverTyped ? "text-red-800" : "",
                hasSkippedOverMistake
                  ? "decoration-destructive underline decoration-2 underline-offset-[6px]"
                  : "",
                "transition-colors",
              )}
            >
              {wordsSection.translation}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}

export default TypingTranslation;
