"use server";

import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export const getSession = async () => {
  "use server";

  return await auth.api.getSession({
    headers: await headers(),
  });
};

export const updateSyncOption = async (sync: boolean) => {
  "use server";

  await auth.api.updateUser({
    body: {
      sync,
    },
    headers: await headers(),
  });

  revalidatePath("/settings");

  return sync;
};
