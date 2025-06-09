"use client";

import type { WordsList } from "@/components/wordsLists/WordsListsMenu";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTyping } from "@/contexts/TypingContext";
import { DICTIONARY } from "@/lib/dictionary";
import { cn, formatDate } from "@/lib/utils";
import WordsListDropdown from "./WordsListDropdown";

function WordsListsItem({ wordsList }: { wordsList: WordsList }) {
  const { selectedWordsLists } = useTyping();
  const { language } = useLanguage();

  const isSelected = selectedWordsLists.includes(wordsList.id);
  const totalWordsCount = wordsList.words.split(" ").length;

  return (
    <li
      className={cn(
        "bg-background flex flex-grow flex-col gap-2 rounded-md border px-3 py-1.5 text-base transition-colors duration-300",
        isSelected ? "border-primary" : "border-border",
      )}
    >
      {/* Name and settings */}
      <div className="flex justify-between gap-2">
        <span
          className={cn(
            "line-clamp-1 transition-colors duration-300",
            isSelected ? "text-primary" : "text-foreground",
          )}
        >
          {wordsList.name}
        </span>
        <WordsListDropdown wordList={wordsList} />
      </div>

      {/* Small info */}
      <div className="text-muted-foreground flex justify-between text-sm">
        <span>{formatDate(new Date(wordsList.createdAt), language)}</span>
        <span>
          {totalWordsCount}{" "}
          {totalWordsCount === 1
            ? DICTIONARY[language]["word"]
            : DICTIONARY[language]["words"]}{" "}
        </span>
      </div>
    </li>
  );
}

export default WordsListsItem;
