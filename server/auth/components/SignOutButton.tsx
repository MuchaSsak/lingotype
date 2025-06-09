"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "../auth-client";
import { useRouter } from "next/navigation";

function SignOutButton() {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      onClick={async () =>
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => router.push("/"),
          },
        })
      }
    >
      Sign Out
    </Button>
  );
}

export default SignOutButton;
