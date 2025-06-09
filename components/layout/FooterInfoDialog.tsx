"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { DICTIONARY } from "@/lib/dictionary";

function FooterInfoDialog() {
  const { language } = useLanguage();

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>
          {DICTIONARY[language]["Information about this application"]}
        </DialogTitle>

        <DialogDescription className="flex flex-col gap-4 py-4">
          {DICTIONARY[language].footerInfo}
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <DialogClose asChild>
          <Button>{DICTIONARY[language]["Okay!"]}</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}

export default FooterInfoDialog;
