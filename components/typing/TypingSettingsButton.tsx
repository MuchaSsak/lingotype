"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { TypingReducerAction, useTyping } from "@/contexts/TypingContext";
import { cn } from "@/lib/utils";

type TypingSettingsButtonProps = TypingReducerAction & {
  children: React.ReactNode;
};

function TypingSettingsButton({
  children,
  type,
  payload,
}: TypingSettingsButtonProps) {
  const { dispatch } = useTyping();

  return (
    <Button
      className={cn(
        "py-0 hover:brightness-90 focus-visible:brightness-90",
        !payload
          ? "text-primary hover:text-primary focus-visible:text-primary"
          : "text-muted-foreground"
      )}
      variant="ghost"
      onClick={() =>
        dispatch({
          type,
          payload,
        })
      }
    >
      {children}
    </Button>
  );
}

export default TypingSettingsButton;
