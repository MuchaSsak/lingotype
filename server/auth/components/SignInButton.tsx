"use client";

import React, { useTransition } from "react";

import { authClient } from "@/server/auth/auth-client";
import { Button } from "@/components/ui/button";
import { Google } from "@/components/icons";
import { useLanguage } from "@/contexts/LanguageContext";
import { DICTIONARY } from "@/lib/dictionary";

function SignInButton() {
  const [isPending, startTransition] = useTransition();
  const { language } = useLanguage();

  function handleSignIn() {
    startTransition(async () => {
      await authClient.signIn.social({
        provider: "google",
      });
    });
  }

  return (
    <Button
      variant="outline"
      disabled={isPending}
      onClick={handleSignIn}
      isLoading={isPending}
    >
      <span>
        <Google />
      </span>

      <span>{DICTIONARY[language]["Sign in"]}</span>
    </Button>
  );
}

export default SignInButton;
