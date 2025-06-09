import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import type {
  TypingData,
  TypingSettings,
  WordToType,
} from "@/contexts/TypingContext";
import { ErrorMessage } from "@/lib/types";
import { LanguageLocale, LOCALES } from "@/lib/dictionary";

// Global
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffleArray(array: any[]) {
  return array.sort(() => Math.random() - 0.5);
}

export function formatDate(date: Date, language: LanguageLocale) {
  return new Intl.DateTimeFormat(
    // This app does not support all the varietes of languages, so just find the whichever
    LOCALES.find((locale) => locale.split("-")[0] === language),
    {
      dateStyle: "long",
    },
  ).format(date);
}

// Typing context
export function findLongestWordInTypingData(typingData: TypingData) {
  let longest = 0;
  typingData.forEach((wordsSection) => {
    wordsSection.wordsToType.forEach((singleWord) => {
      if (singleWord.goal.length > longest) longest = singleWord.goal.length;
    });
  });
  return longest;
}

export function findAllSingleWordsCountInTypingData(typingData: TypingData) {
  let count = 0;
  typingData.forEach((wordsSection) => {
    wordsSection.wordsToType.forEach(() => {
      count++;
    });
  });
  return count;
}

export function findAllSingleWordsCharactersCountInTypingData(
  typingData: TypingData,
) {
  let count = 0;
  typingData.forEach((wordsSection) => {
    wordsSection.wordsToType.forEach((singleWord) => {
      count += singleWord.goal.length + 1; // Add a character for the single space between words
    });
  });
  count--; // Remove 1 space at the end
  return count;
}

export function findAllTranslationCharactersCountInTypingData(
  typingData: TypingData,
) {
  let count = 0;
  typingData.forEach((wordsSection) => {
    count += wordsSection.translation.length + 1; // Add a character for the single space between words
  });
  count--; // Remove 1 space at the end
  return count;
}

export function convertWordsListToTypingData(
  wordsList: string,
  settings: TypingSettings,
  startingTotalSingleWordIndex = 0,
  startingWordsSectionIndex = 0,
) {
  const dataToType: TypingData = [];

  const wordsSections: [string[], string][] = wordsList
    .split(";")
    .map((wordsSection) => wordsSection.split(","))
    .slice(0, -1)
    .map((wordsSection) => [
      wordsSection[0]
        .trim()
        .replaceAll("\n", " ")
        .split(" ")
        .filter((singleWord) => singleWord !== "")
        .map((singleWord) => singleWord.trim()),
      wordsSection[1].replaceAll("\n", " ").trim(),
    ]);

  /**
   * Settings
   */
  // Shuffle randomly
  if (settings.isRandomOrder) shuffleArray(wordsSections);

  // Convert to lowercase
  if (!settings.isCaseSensitive)
    wordsSections.forEach((wordsSection, i) => {
      const newWordsSection: [string[], string] = [
        wordsSection[0].join(" ").toLowerCase().split(" "),
        wordsSection[1].toLowerCase(),
      ];

      wordsSections[i] = newWordsSection;
    });

  // Remove special characters
  const specialCharactersRegex = /[$&+,:;=?@#|'<>.^*()%!-]/g;
  if (!settings.isAllCharacters)
    wordsSections.forEach((wordsSection, i) => {
      const newWordsSection: [string[], string] = [
        wordsSection[0]
          .join(" ")
          .replaceAll(specialCharactersRegex, "")
          .split(" "),
        wordsSection[1].replace(specialCharactersRegex, ""),
      ];

      wordsSections[i] = newWordsSection;
    });

  let totalSingleWordIndex = -1 + startingTotalSingleWordIndex;

  wordsSections.forEach((wordsSection, i) => {
    dataToType.push({
      wordsToType: wordsSection[0].map((wordToType) => {
        totalSingleWordIndex++;

        return {
          goal: wordToType,
          typed: "",
          totalSingleWordIndex,

          get hasTypo() {
            // Check if any typed letter mismatches the goal letter
            return this.typed
              .split("")
              .some((letter, letterIndex) => letter !== this.goal[letterIndex]);
          },

          get hasOverTyped() {
            // Check if typed word is longer than the goal word
            return this.typed.length > this.goal.length;
          },

          get hasUnfinished() {
            // Check if typed word is shorter than the goal word
            return this.typed.length < this.goal.length;
          },

          get hasMistake() {
            // Check if typed word is over typed or has a typo
            return this.hasTypo || this.hasOverTyped || this.hasUnfinished;
          },
        };
      }),

      wordsSectionIndex: i + startingWordsSectionIndex,
      translation: wordsSection[1],

      get hasWordsSectionTypo() {
        // Check if any single word has a typo
        return this.wordsToType.some(
          (singleWord: WordToType) => singleWord.hasTypo,
        );
      },

      get hasWordsSectionOverTyped() {
        // Check if any single word has over typed
        return this.wordsToType.some(
          (singleWord: WordToType) => singleWord.hasOverTyped,
        );
      },
    });
  });

  return dataToType;
}

export function resetTypingData(typingData: TypingData) {
  typingData.map((wordsSection) => {
    wordsSection.wordsToType.map((singleWord) => {
      singleWord.typed = "";
    });
  });
}

export function reportError(error: ErrorMessage) {
  console.error(error);
}
