"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "../auth-client";
import { redirect } from "next/navigation";

function SignOutButton() {
  return (
    <Button
      variant="outline"
      onClick={async () =>
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => redirect("/"),
          },
        })
      }
    >
      Sign Out
    </Button>
  );
}

export default SignOutButton;
