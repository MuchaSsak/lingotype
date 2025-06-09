"use client";

import React from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

import { useTyping } from "@/contexts/TypingContext";
import { useLanguage } from "@/contexts/LanguageContext";
import TypingSettingsButton from "@/components/typing/TypingSettingsButton";
import {
  AArrowDown,
  Hash,
  Infinity,
  Languages,
  Shuffle,
} from "@/components/icons";
import { fadeInOut } from "@/lib/animations";
import { DICTIONARY } from "@/lib/dictionary";

function TypingSettings() {
  const { settings, gameStatus } = useTyping();
  const { language } = useLanguage();

  return (
    <AnimatePresence initial={false}>
      {gameStatus === "ready" && (
        <motion.div {...fadeInOut()} className="mx-8">
          <div className="bg-secondary text-md mx-auto mt-24 flex w-fit flex-wrap justify-center gap-2 rounded-md py-0.5 transition-[opacity] duration-300">
            <TypingSettingsButton
              type="settings/toggleIsEndless"
              payload={!settings.isEndless}
            >
              <Infinity className="size-5" /> {DICTIONARY[language]["endless"]}
            </TypingSettingsButton>

            <TypingSettingsButton
              type="settings/toggleIsRandomOrder"
              payload={!settings.isRandomOrder}
            >
              <Shuffle className="size-5" />
              {DICTIONARY[language]["random order"]}
            </TypingSettingsButton>

            <TypingSettingsButton
              type="settings/toggleShowTranslation"
              payload={!settings.showTranslation}
            >
              <Languages className="size-5" />
              {DICTIONARY[language]["translation"]}
            </TypingSettingsButton>

            <TypingSettingsButton
              type="settings/toggleIsCaseSensitive"
              payload={!settings.isCaseSensitive}
            >
              <AArrowDown className="size-5" />
              {DICTIONARY[language]["case sensitive"]}
            </TypingSettingsButton>

            <TypingSettingsButton
              type="settings/toggleIsAllCharacters"
              payload={!settings.isAllCharacters}
            >
              <Hash className="size-5" />{" "}
              {DICTIONARY[language]["all characters"]}
            </TypingSettingsButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default TypingSettings;
