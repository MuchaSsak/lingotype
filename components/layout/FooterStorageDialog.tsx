"use client";

import React from "react";

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { DICTIONARY } from "@/lib/dictionary";

function FooterStorageDialog() {
  const { language } = useLanguage();

  function handleClearLocalStorage() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>
          {
            DICTIONARY[language][
              "Do you want to clear your browser application data?"
            ]
          }
        </AlertDialogTitle>

        <AlertDialogDescription className="flex flex-col gap-4">
          {DICTIONARY[language].footerStorageDialog}
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogCancel>{DICTIONARY[language]["Cancel"]}</AlertDialogCancel>
        <AlertDialogAction onClick={handleClearLocalStorage}>
          {DICTIONARY[language]["Clear all"]}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}

export default FooterStorageDialog;
