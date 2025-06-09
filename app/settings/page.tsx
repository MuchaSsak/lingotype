import { getSession } from "@/server/auth";
import SignOutButton from "@/server/auth/components/SignOutButton";

import Link from "next/link";
import { redirect } from "next/navigation";

import Settings from "@/server/auth/components/Settings";
import { ArrowLeftIcon } from "lucide-react";
import { reportError } from "@/lib/utils";

async function Page() {
  const session = await getSession();

  if (!session) {
    reportError("auth:unauthorized");
    redirect("/");
  }

  const { user } = session;

  return (
    <div className="my-8 flex w-full justify-center">
      <div className="h-full w-2/3">
        <header className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeftIcon size={16} />
            Back to Home
          </Link>
          <SignOutButton />
        </header>

        <Settings user={user} />
      </div>
    </div>
  );
}

export default Page;
