"use client";

import { authClient } from "@/server/auth/auth-client";
import SignInButton from "@/server/auth/components/SignInButton";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

/**
 * Top level component await now crashes the application ever since NavBar become a client component
 * I'd be scared of doing it this way anyway. React render logic is meant to be always executed inside hooks and event handlers.
 * Of course got to also mention that this desperately needs error handling or else it can easily crash the app in prod
 * So by the time all the proper patterns, safety concerns and potential additional states like `isLoading` get implement and this becomes messy, consider using Tanstack Query 🙏
 * I'm not lying when I say that it's in my opinion the very best 3rd-party library for React 😎
 */
function Auth() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending || !session) {
    return <SignInButton />;
  }

  return (
    <Link href="/settings" prefetch>
      <Avatar className="size-12">
        <AvatarImage src={session.user.image!} alt={session.user.name} />
        <AvatarFallback>{session.user.name}</AvatarFallback>
      </Avatar>
    </Link>
  );
}

export default Auth;
