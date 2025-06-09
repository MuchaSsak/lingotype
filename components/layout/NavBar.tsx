"use client";

import Image from "next/image";

import Auth from "@/components/layout/Auth";
import { Button } from "@/components/ui/button";
import Combobox from "@/components/ui/combobox";
import { useLanguage } from "@/contexts/LanguageContext";
import { AVAILABLE_LANGUAGES, DICTIONARY } from "@/lib/dictionary";

function NavBar() {
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 z-10 flex h-12 w-screen items-center justify-between p-8">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <Image
          priority
          src="/logo.png"
          alt="LingoType – Learn Languages by Typing logo"
          width={200}
          height={0}
        />
        {/* Choose language combobox */}
        <Combobox
          value={language}
          setValue={setLanguage}
          items={AVAILABLE_LANGUAGES}
          iconClassName="font-emoji"
          placeholderLabel={DICTIONARY[language]["language"]}
          align="start"
        >
          <Button
            variant="outline"
            role="combobox"
            size="icon"
            className="font-emoji"
          >
            {
              AVAILABLE_LANGUAGES.find(
                (availableLanguage) => availableLanguage.value === language,
              )!.Icon
            }
          </Button>
        </Combobox>
      </div>

      {/* Sign in via Google auth button */}
      <Auth />
    </nav>
  );
}

export default NavBar;
