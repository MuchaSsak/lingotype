import React, { createContext, useContext, useEffect, useReducer } from "react";

import {
  convertWordsListToTypingData,
  findLongestWordInTypingData,
  findAllSingleWordsCountInTypingData,
  findAllSingleWordsCharactersCountInTypingData,
  findAllTranslationCharactersCountInTypingData,
  resetTypingData,
} from "@/lib/utils";
import { TYPING_INPUT_MAX_INDEX_TO_RENDER_WORD } from "@/components/typing/TypingInput";
import type { WordsList } from "@/components/wordsLists/WordsListsMenu";

/**
 * Types
 */
export type TypingReducerAction = {
  type:
    | "state/load"
    | "typing/keypress"
    | "typing/space"
    | "typing/backspace"
    | "typing/reset"
    | "settings/toggleIsEndless"
    | "settings/toggleIsRandomOrder"
    | "settings/toggleShowTranslation"
    | "settings/toggleIsCaseSensitive"
    | "settings/toggleIsAllCharacters"
    | "wordsLists/toggle";
  payload?: any;
};
export type WordToType = {
  goal: string;
  typed: string;
  totalSingleWordIndex: number;
  hasTypo: boolean;
  hasOverTyped: boolean;
  hasUnfinished: boolean;
  hasMistake: boolean;
};
export type TypingData = {
  wordsToType: WordToType[];
  wordsSectionIndex: number;
  translation: string;
  hasWordsSectionTypo: boolean;
  hasWordsSectionOverTyped: boolean;
}[];
export type TypingSettings = {
  isEndless: boolean;
  isRandomOrder: boolean;
  showTranslation: boolean;
  isCaseSensitive: boolean;
  isAllCharacters: boolean;
};
type TypingGameStatus = "ready" | "active" | "ended";
type TypingContextState = {
  selectedWordsLists: string[];
  wordsList: string;
  storedWordsLists: WordsList[];
  dataToType: TypingData;
  currentWordsSectionIndex: number;
  currentTotalSingleWordIndex: number;
  currentSingleWordIndex: number;
  currentTotalCharacterIndex: number;
  longestSingleWord: number;
  allSingleWordsCount: number;
  allSingleWordsCharactersCount: number;
  allTranslationCharactersCount: number;
  gameStatus: TypingGameStatus;
  settings: TypingSettings;
  dispatch: React.ActionDispatch<[action: TypingReducerAction]>;
};

let dataToType: TypingData = [];

const initialTypingContextState: TypingContextState = {
  selectedWordsLists: [],
  wordsList: `Please select some words lists!, Or else you're stuck with this text! 😉;`,
  storedWordsLists: [],
  dataToType,
  currentWordsSectionIndex: 0,
  currentTotalSingleWordIndex: 0,
  currentSingleWordIndex: 0,
  currentTotalCharacterIndex: 0,
  longestSingleWord: 0,
  allSingleWordsCount: 0,
  allSingleWordsCharactersCount: 0,
  allTranslationCharactersCount: 0,
  gameStatus: "ready",
  settings: {
    isEndless: false,
    isRandomOrder: true,
    showTranslation: true,
    isCaseSensitive: false,
    isAllCharacters: true,
  },
  dispatch: () => {},
};
const TypingContext = createContext(initialTypingContextState);

/**
 * Reducer functions
 */
// State
function stateLoadSettings(state: TypingContextState): TypingContextState {
  let settings = initialTypingContextState.settings;

  if (localStorage.getItem("settings"))
    settings = JSON.parse(localStorage.getItem("settings")!);

  return { ...state, settings };
}

function stateSaveSettings(state: TypingContextState): TypingContextState {
  localStorage.setItem("settings", JSON.stringify(state.settings));

  return { ...state };
}

function stateLoad(
  state: TypingContextState,
  isEndlessAddition?: boolean,
): TypingContextState {
  let newState: TypingContextState = { ...state };

  // Load settings
  newState = { ...stateLoadSettings(newState) };

  // Load words list
  newState = { ...wordsListsLoad(newState) };

  if (isEndlessAddition) {
    dataToType.push(
      ...convertWordsListToTypingData(
        newState.wordsList,
        newState.settings,
        newState.allSingleWordsCount,
        newState.dataToType.at(-1)!.wordsSectionIndex + 1,
      ),
    );
  } else {
    dataToType = convertWordsListToTypingData(
      newState.wordsList,
      newState.settings,
    );
  }

  newState = {
    ...newState,
    dataToType,
    longestSingleWord: findLongestWordInTypingData(dataToType),
    allSingleWordsCount: findAllSingleWordsCountInTypingData(dataToType),
    allSingleWordsCharactersCount:
      findAllSingleWordsCharactersCountInTypingData(dataToType),
    allTranslationCharactersCount:
      findAllTranslationCharactersCountInTypingData(dataToType),
  };

  return { ...newState };
}

// Typing
function typingKeypress(
  state: TypingContextState,
  action: TypingReducerAction,
): TypingContextState {
  const newLetter = action.payload as string;
  const currentlyTypedWord =
    dataToType[state.currentWordsSectionIndex].wordsToType[
      state.currentSingleWordIndex
    ];
  // Check if it's the very letter
  const isEndOfGame =
    !dataToType[state.currentWordsSectionIndex + 1] &&
    dataToType[state.currentWordsSectionIndex].wordsToType.at(-1)!.goal
      .length ===
      dataToType[state.currentWordsSectionIndex].wordsToType.at(-1)!.typed
        .length +
        1;

  if (isEndOfGame) return { ...state, gameStatus: "ended" };

  // Don't allow too much overtype
  if (currentlyTypedWord.typed.length >= state.longestSingleWord * 1.5)
    return state;

  currentlyTypedWord.typed += newLetter;

  return {
    ...state,
    dataToType,
    gameStatus: "active",
    currentTotalCharacterIndex: state.currentTotalCharacterIndex + 1,
  };
}

function typingSpace(state: TypingContextState): TypingContextState {
  // Check if should jump onto the next word section
  const isEndOfWordSection =
    !dataToType[state.currentWordsSectionIndex].wordsToType[
      state.currentSingleWordIndex + 1
    ];
  // Check if it's the very last word
  const isEndOfGame =
    isEndOfWordSection && !dataToType[state.currentWordsSectionIndex + 1];
  const currentlyTypedWord =
    dataToType[state.currentWordsSectionIndex].wordsToType[
      state.currentSingleWordIndex
    ];

  if (isEndOfGame) return { ...state, gameStatus: "ended" };

  // Don't allow for jumping to the next word if you haven't typed anything in the current one
  if (currentlyTypedWord.typed.length === 0) return state;

  // If is at least halfway done
  let newState = { ...state };

  if (
    newState.settings.isEndless &&
    newState.currentWordsSectionIndex >
      newState.dataToType.length - TYPING_INPUT_MAX_INDEX_TO_RENDER_WORD
  )
    newState = stateLoad(newState, true);

  return {
    ...newState,
    currentTotalSingleWordIndex: newState.currentTotalSingleWordIndex + 1,
    currentTotalCharacterIndex:
      newState.currentTotalCharacterIndex +
      currentlyTypedWord.goal.slice(currentlyTypedWord.typed.length).length +
      1,
    currentSingleWordIndex: isEndOfWordSection
      ? 0
      : newState.currentSingleWordIndex + 1,
    currentWordsSectionIndex: isEndOfWordSection
      ? newState.currentWordsSectionIndex + 1
      : newState.currentWordsSectionIndex,
  };
}

function typingBackspace(state: TypingContextState): TypingContextState {
  const currentlyTypedWord =
    dataToType[state.currentWordsSectionIndex].wordsToType[
      state.currentSingleWordIndex
    ];

  const shouldRevert =
    currentlyTypedWord.typed.length === 0 &&
    currentlyTypedWord.totalSingleWordIndex > 0;
  const shouldRevertToPreviousWordsSection =
    shouldRevert && state.currentSingleWordIndex === 0;

  currentlyTypedWord.typed = currentlyTypedWord.typed.slice(0, -1);

  return {
    ...state,
    dataToType,
    gameStatus: state.currentTotalCharacterIndex <= 1 ? "ready" : "active",
    currentTotalCharacterIndex: shouldRevert
      ? !!dataToType[state.currentWordsSectionIndex].wordsToType[
          state.currentSingleWordIndex - 1
        ]
        ? state.currentTotalCharacterIndex -
          (dataToType[state.currentWordsSectionIndex].wordsToType[
            state.currentSingleWordIndex - 1
          ].goal.length -
            Math.min(
              dataToType[state.currentWordsSectionIndex].wordsToType[
                state.currentSingleWordIndex - 1
              ].typed.length,
              dataToType[state.currentWordsSectionIndex].wordsToType[
                state.currentSingleWordIndex - 1
              ].goal.length,
            )) -
          1
        : state.currentTotalCharacterIndex -
          (dataToType[state.currentWordsSectionIndex - 1].wordsToType.at(-1)!
            .goal.length -
            Math.min(
              dataToType[state.currentWordsSectionIndex - 1].wordsToType.at(-1)!
                .typed.length,
              dataToType[state.currentWordsSectionIndex - 1].wordsToType.at(-1)!
                .goal.length,
            )) -
          1
      : state.currentTotalCharacterIndex > 0
        ? state.currentTotalCharacterIndex - 1
        : state.currentTotalCharacterIndex,

    currentWordsSectionIndex: shouldRevertToPreviousWordsSection
      ? state.currentWordsSectionIndex - 1
      : state.currentWordsSectionIndex,

    currentTotalSingleWordIndex: shouldRevert
      ? state.currentTotalSingleWordIndex - 1
      : state.currentTotalSingleWordIndex,

    currentSingleWordIndex: shouldRevert
      ? !!dataToType[state.currentWordsSectionIndex].wordsToType[
          state.currentSingleWordIndex - 1
        ]
        ? state.currentSingleWordIndex - 1
        : dataToType[state.currentWordsSectionIndex - 1].wordsToType.length - 1
      : state.currentSingleWordIndex,
  };
}

function typingReset(state: TypingContextState): TypingContextState {
  // Make a new array with a random order
  if (state.settings.isRandomOrder)
    dataToType = convertWordsListToTypingData(state.wordsList, state.settings);
  // Mutate and therefore reset the array (no need to create a whole new one though)
  else resetTypingData(dataToType);

  return {
    ...state,
    dataToType,
    longestSingleWord: findLongestWordInTypingData(dataToType),
    allSingleWordsCount: findAllSingleWordsCountInTypingData(dataToType),
    allSingleWordsCharactersCount:
      findAllSingleWordsCharactersCountInTypingData(dataToType),
    allTranslationCharactersCount:
      findAllTranslationCharactersCountInTypingData(dataToType),
    gameStatus: "ready",
    currentSingleWordIndex: 0,
    currentTotalCharacterIndex: 0,
    currentTotalSingleWordIndex: 0,
    currentWordsSectionIndex: 0,
  };
}

function settingsToggleIsEndless(
  state: TypingContextState,
  action: TypingReducerAction,
): TypingContextState {
  const shouldBeEndless = action.payload as boolean;

  const newState: TypingContextState = {
    ...state,
    settings: {
      ...state.settings,
      isEndless: shouldBeEndless,
    },
  };

  stateSaveSettings(newState);
  stateLoad(newState);

  return {
    ...newState,
    dataToType,
  };
}

function settingsToggleIsRandomOrder(
  state: TypingContextState,
  action: TypingReducerAction,
): TypingContextState {
  const shouldBeRandomized = action.payload as boolean;

  const newState: TypingContextState = {
    ...state,
    settings: {
      ...state.settings,
      isRandomOrder: shouldBeRandomized,
    },
  };

  stateSaveSettings(newState);
  stateLoad(newState);

  return {
    ...newState,
    dataToType,
  };
}

function settingsToggleShowTranslation(
  state: TypingContextState,
  action: TypingReducerAction,
): TypingContextState {
  const shouldShowTranslation = action.payload as boolean;

  const newState: TypingContextState = {
    ...state,
    settings: {
      ...state.settings,
      showTranslation: shouldShowTranslation,
    },
  };

  stateSaveSettings(newState);

  return {
    ...newState,
  };
}

function settingsToggleIsCaseSensitive(
  state: TypingContextState,
  action: TypingReducerAction,
): TypingContextState {
  const shouldBeRandomized = action.payload as boolean;

  const newState: TypingContextState = {
    ...state,
    settings: {
      ...state.settings,
      isCaseSensitive: shouldBeRandomized,
    },
  };

  stateSaveSettings(newState);
  stateLoad(newState);

  return {
    ...newState,
    dataToType,
  };
}

function settingsToggleIsAllCharacters(
  state: TypingContextState,
  action: TypingReducerAction,
): TypingContextState {
  const shouldBeAllCharacters = action.payload as boolean;

  const newState: TypingContextState = {
    ...state,
    settings: {
      ...state.settings,
      isAllCharacters: shouldBeAllCharacters,
    },
  };

  stateSaveSettings(newState);
  stateLoad(newState);

  return {
    ...newState,
    dataToType,
  };
}

// Words lists
function wordsListsLoad(state: TypingContextState): TypingContextState {
  let selectedWordsLists = initialTypingContextState.selectedWordsLists;
  let wordsList = initialTypingContextState.wordsList;

  const parsedSelectedWordsLists = JSON.parse(
    localStorage.getItem("selectedWordsLists") ?? "null",
  );
  const parsedWordsList = JSON.parse(
    localStorage.getItem("wordsList") ?? "null",
  );

  if (parsedSelectedWordsLists?.length && parsedWordsList) {
    selectedWordsLists = parsedSelectedWordsLists;
    wordsList = parsedWordsList;
  }

  return { ...state, selectedWordsLists, wordsList };
}

function wordsListsSave(state: TypingContextState): TypingContextState {
  localStorage.setItem(
    "selectedWordsLists",
    JSON.stringify(state.selectedWordsLists),
  );
  localStorage.setItem("wordsList", JSON.stringify(state.wordsList));

  return { ...state };
}

function wordsListsToggle(
  state: TypingContextState,
  action: TypingReducerAction,
): TypingContextState {
  const wordsList = action.payload as WordsList;

  let newState: TypingContextState = { ...state };

  const shouldAddWordsList = !newState.selectedWordsLists.includes(
    wordsList.id,
  );
  if (shouldAddWordsList) {
    newState.selectedWordsLists = [
      ...newState.selectedWordsLists,
      wordsList.id,
    ];

    newState.wordsList =
      newState.wordsList === initialTypingContextState.wordsList
        ? wordsList.words // Replace default
        : newState.wordsList + wordsList.words;
  } else {
    newState.selectedWordsLists = newState.selectedWordsLists.filter(
      (wordListId) => wordListId !== wordsList.id,
    );

    newState.wordsList =
      newState.wordsList.slice(0, newState.wordsList.indexOf(wordsList.words)) +
      newState.wordsList.slice(
        newState.wordsList.indexOf(wordsList.words) + wordsList.words.length,
      );
  }

  wordsListsSave(newState);
  newState = { ...stateLoad(newState) };

  return { ...newState };
}

function wordsListsCreate(
  state: TypingContextState,
  action: TypingReducerAction,
): TypingContextState {
  const newState = { ...state };

  return { ...newState };
}

/**
 * Reducer
 */

function reducer(
  state: TypingContextState,
  action: TypingReducerAction,
): TypingContextState {
  switch (action.type) {
    case "state/load":
      return stateLoad(state);

    case "typing/keypress":
      return typingKeypress(state, action);

    case "typing/space":
      return typingSpace(state);

    case "typing/backspace":
      return typingBackspace(state);

    case "typing/reset":
      return typingReset(state);

    case "settings/toggleIsEndless":
      return settingsToggleIsEndless(state, action);

    case "settings/toggleIsRandomOrder":
      return settingsToggleIsRandomOrder(state, action);

    case "settings/toggleShowTranslation":
      return settingsToggleShowTranslation(state, action);

    case "settings/toggleIsCaseSensitive":
      return settingsToggleIsCaseSensitive(state, action);

    case "settings/toggleIsAllCharacters":
      return settingsToggleIsAllCharacters(state, action);

    case "wordsLists/toggle":
      return wordsListsToggle(state, action);

    default: {
      throw new Error("Unknown dispatch action type!");
    }
  }
}

/**
 * Context provider
 */
export function TypingContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialTypingContextState);

  useEffect(() => {
    dispatch({ type: "state/load" });
  }, []);

  return (
    <TypingContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </TypingContext.Provider>
  );
}

/**
 * Hook
 */
export function useTyping() {
  const context = useContext(TypingContext);
  if (context === undefined)
    throw new Error("useTyping was used outside of TypingContextProvider!");
  return context;
}
