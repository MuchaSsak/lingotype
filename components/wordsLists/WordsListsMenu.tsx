"use client";

import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "@/components/icons";
import { fadeInOut } from "@/lib/animations";
import { useTyping } from "@/contexts/TypingContext";
import WordsListsItem from "@/components/wordsLists/WordsListsItem";
import { Checkbox } from "@/components/ui/checkbox";
import { DICTIONARY } from "@/lib/dictionary";
import { useLanguage } from "@/contexts/LanguageContext";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import WordsListsCreateDialog from "@/components/wordsLists/WordsListsCreateDialog";
import { words_list } from "@/server/db/schema";
import { useWordsLists } from "@/hooks/useWordsList";

export type WordsList = typeof words_list.$inferSelect;

function WordsListsMenu() {
  const { gameStatus, dispatch, selectedWordsLists } = useTyping();
  const { language } = useLanguage();
  const { query } = useWordsLists();
  const { data: wordsLists, isLoading } = query;

  const [search, setSearch] = useState("");

  if (isLoading || !wordsLists) return null;

  const searchedWordsLists = wordsLists.filter((wordsList) =>
    wordsList.name.toLowerCase().trim().includes(search.toLowerCase().trim()),
  );

  return (
    <AnimatePresence>
      {gameStatus === "ready" && (
        <motion.div
          {...fadeInOut()}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-secondary fixed top-1/2 left-8 flex h-[27rem] w-96 -translate-y-1/2 flex-col gap-2 rounded-md p-2 text-base"
        >
          {/* Buttons */}
          <div className="flex items-center gap-16">
            {/* TOOD: Think if I want an another button here */}
            <div className="flex-1" />

            <WordsListsCreateDialog>
              <DialogTrigger asChild>
                <Button className="flex-1">
                  {DICTIONARY[language]["New list"]}
                </Button>
              </DialogTrigger>
            </WordsListsCreateDialog>
          </div>

          {/* Search input */}
          <Input
            placeholder={`${DICTIONARY[language]["Search"]}...`}
            Icon={<Search className="text-muted-foreground size-4" />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Words lists */}
          <ul className="flex flex-col gap-2 overflow-y-scroll pt-2 pr-2">
            {!wordsLists.length && (
              <p className="text-muted-foreground pt-2 text-center text-sm">
                {DICTIONARY[language]["You have no custom lists!"]}
              </p>
            )}

            {wordsLists.length && !searchedWordsLists.length ? (
              <p className="text-muted-foreground pt-2 text-center text-sm">
                {DICTIONARY[language]["Couldn't find any words list"]}
              </p>
            ) : null}

            {searchedWordsLists.map((wordsList) => {
              const isSelected = selectedWordsLists.includes(wordsList.id);

              function handleToggleWordsList() {
                dispatch({ type: "wordsLists/toggle", payload: wordsList });
              }

              return (
                <div
                  key={wordsList.id}
                  onClick={handleToggleWordsList}
                  className="flex cursor-pointer items-center gap-3"
                >
                  <Checkbox checked={isSelected} />
                  <WordsListsItem wordsList={wordsList} />
                </div>
              );
            })}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WordsListsMenu;
