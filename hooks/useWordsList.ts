"use client";

import { WordsList } from "@/components/wordsLists/WordsListsMenu";
import { getSession } from "@/server/auth";
import { Sync } from "@/server/sync";
import {
  addWordsList,
  deleteWordsList,
  getCachedUserWordsList,
  updateWordsList,
} from "@/server/words";
import { useMutation, useQuery } from "@tanstack/react-query";

type Actions = "create" | "update" | "delete";
type MutationData =
  | {
      action: "create";
      payload: Pick<WordsList, "name" | "words">;
    }
  | {
      action: "update";
      payload: Pick<WordsList, "id" | "words" | "name">;
    }
  | {
      action: "delete";
      payload: Pick<WordsList, "id">;
    };

export function useWordsLists() {
  const query = useQuery({
    queryKey: ["wordsLists"],
    queryFn: async () => {
      const session = await getSession();

      const listsLocaleStorage = localStorage.getItem("wordsLists");
      const listsLocal = JSON.parse(listsLocaleStorage ?? "[]") as WordsList[];

      if (session) {
        const userLists = await getCachedUserWordsList(session.user.id);

        if (listsLocal === userLists) return listsLocal;

        if (session.user.sync)
          return await Sync(listsLocal, userLists, session.user.id);

        return userLists;
      }

      return listsLocal;
    },
  });

  const mutate = useMutation({
    mutationFn: async (props: MutationData) => {
      const session = await getSession();

      const { action, payload } = props;

      const listsLocaleStorage = localStorage.getItem("wordsLists");
      const listsLocal = JSON.parse(listsLocaleStorage ?? "[]") as WordsList[];

      if (action === "create") {
        if (session?.user.sync) {
          const newList = await addWordsList(
            session.user.id,
            payload.words,
            payload.name,
          );

          localStorage.setItem(
            "wordsLists",
            JSON.stringify([...listsLocal, newList]),
          );

          return query.refetch();
        }

        const newList: WordsList = {
          id: crypto.randomUUID(),
          name: payload.name,
          words: payload.words,
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: "",
          isRemoved: false,
        };

        localStorage.setItem(
          "wordsLists",
          JSON.stringify([...listsLocal, newList]),
        );
      }

      if (action === "update") {
        if (session?.user.sync) {
          const updatedList = await updateWordsList(
            payload.id,
            payload.words,
            payload.name,
            session.user.id,
          );

          const localWithoutUpdatedList = listsLocal.filter(
            (l) => l.id !== updatedList.id,
          );

          localStorage.setItem(
            "wordsLists",
            JSON.stringify([...localWithoutUpdatedList, updatedList]),
          );

          return query.refetch();
        }

        const updatedList: WordsList = {
          ...listsLocal.find((l) => l.id === payload.id)!,
          words: payload.words,
          name: payload.name,
          updatedAt: new Date(),
        };

        const localWithoutUpdatedList = listsLocal.filter(
          (l) => l.id !== updatedList.id,
        );

        localStorage.setItem(
          "wordsLists",
          JSON.stringify([...localWithoutUpdatedList, updatedList]),
        );
      }

      if (action === "delete") {
        if (session?.user.sync) {
          const deletedList = await deleteWordsList(
            payload.id,
            session.user.id,
          );

          localStorage.setItem(
            "wordsLists",
            JSON.stringify(listsLocal.filter((l) => l.id !== deletedList.id)),
          );

          return query.refetch();
        }

        localStorage.setItem(
          "wordsLists",
          JSON.stringify(listsLocal.filter((l) => l.id !== payload.id)),
        );
      }

      query.refetch();
    },
  });

  return { query, mutate };
}
