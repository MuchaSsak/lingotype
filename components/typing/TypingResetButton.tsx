"use client";

import React, { useRef } from "react";

import { RotateCw } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTyping } from "@/contexts/TypingContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { DICTIONARY } from "@/lib/dictionary";

function TypingResetButton() {
  const { dispatch } = useTyping();
  const { language } = useLanguage();
  const resetButtonRef = useRef<HTMLButtonElement>(null);

  function handleReset() {
    dispatch({ type: "typing/reset" });
    resetButtonRef.current?.blur();
  }

  return (
    <div className="mx-auto">
      <Tooltip>
        <TooltipTrigger
          asChild
          className="text-muted focus-visible:text-foreground hover:text-foreground mt-2"
          onClick={handleReset}
          ref={resetButtonRef}
        >
          <Button variant="ghost" size="icon">
            <RotateCw className="size-5 stroke-2" />
          </Button>
        </TooltipTrigger>

        <TooltipContent side="bottom" sideOffset={6}>
          <p>{DICTIONARY[language]["Reset game"]}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

export default TypingResetButton;
