"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Session } from "@/lib/auth";

import { updateSyncOption } from "..";
import { useOptimistic, useState, useTransition } from "react";

function Settings({ user }: { user: Session["user"] }) {
  const [sync, setSync] = useState(user.sync);
  const [isPending, starTransition] = useTransition();

  function handleSyncChange() {
    starTransition(async () => {
      setSync(await updateSyncOption(!sync));
    });
  }

  return (
    <main className="flex flex-grow gap-4">
      <div className="flex w-1/4 flex-col items-center justify-center space-y-6 text-center">
        <Avatar className="size-36">
          <AvatarImage src={user.image!} alt={user.name} />
          <AvatarFallback>{user.name}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-muted-foreground">{user.email}</p>
        </div>
      </div>
      <div className="flex w-3/4 flex-col gap-8">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-muted-foreground mb-6">
            Manage your account settings.
          </p>
          <Setting
            title="Sync"
            description="Sync your data across all your devices."
          >
            <span className="flex items-center gap-4">
              Enable Sync{" "}
              <Switch
                checked={user.sync}
                disabled={isPending}
                onCheckedChange={handleSyncChange}
              />
            </span>
          </Setting>
        </div>

        <div>
          <h1 className="text-2xl font-bold">Danger Zone</h1>
          <p className="text-muted-foreground mb-6">
            Pernamelty delete your account and all related data.
          </p>
          <Button variant="destructive">Delete Account</Button>
        </div>
      </div>
    </main>
  );
}

export default Settings;

function Setting({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-muted-foreground flex items-center gap-6">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}
