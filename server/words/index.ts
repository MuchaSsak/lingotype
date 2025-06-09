"use server";

import { Session } from "@/lib/auth";

import db from "@/server/db";
import { words_list } from "@/server/db/schema";
import { and, eq } from "drizzle-orm";
import { revalidateTag, unstable_cache } from "next/cache";

type UserId = Session["user"]["id"];

export const getCachedUserWordsList = unstable_cache(
  async (userId: UserId) => getUserWordsList(userId),
  ["userWordLists"],
  {
    tags: ["userWordLists"],
  },
);

export async function getUserWordsList(userId: UserId) {
  const result = await db
    .select()
    .from(words_list)
    .where(eq(words_list.userId, userId));

  return result;
}

export async function addWordsList(
  userId: UserId,
  wordsList: string,
  name: string,
  id?: string,
  createdAt?: Date,
  updatedAt?: Date,
) {
  const result = await db
    .insert(words_list)
    .values({
      id,
      createdAt: createdAt ?? new Date(),
      updatedAt: updatedAt ?? new Date(),
      userId,
      words: wordsList,
      name,
    })
    .returning();

  revalidateTag("userWordLists");

  return result[0];
}

export async function updateWordsList(
  id: string,
  words: string,
  name: string,
  userId: UserId,
) {
  const result = await db
    .update(words_list)
    .set({ words, name })
    .where(and(eq(words_list.id, id), eq(words_list.userId, userId)))
    .returning();

  if (!result.length) throw new Error("Words list not found!");

  return result[0];
}

export async function deleteWordsList(id: string, userId: UserId) {
  const result = await db
    .delete(words_list)
    .where(and(eq(words_list.id, id), eq(words_list.userId, userId)))
    .returning();

  revalidateTag("userWordLists");

  return result[0];
}
