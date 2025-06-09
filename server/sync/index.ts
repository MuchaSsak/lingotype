import { WordsList } from "@/components/wordsLists/WordsListsMenu";
import { User } from "better-auth";
import { addWordsList } from "../words";

export async function Sync(
  local: WordsList[],
  database: WordsList[],
  userId: User["id"],
) {
  // Not removed
  const remote = database.filter((r) => !r.isRemoved && r.userId === userId);

  //   Flag as removed in database
  const removed = remote.filter((r) => r.isRemoved);

  const newLocal = local.filter((l) => !removed.includes(l));
  // Existing only on local side
  const onlyLocal = newLocal.filter((l) => !remote.some((r) => r.id === l.id));

  onlyLocal.forEach((l) => {
    addWordsList(
      userId,
      l.words,
      l.name,
      l.id,
      new Date(l.createdAt),
      new Date(l.updatedAt),
    );
  });

  //   Existing only on database side
  const onlyRemote = remote.filter((r) => !newLocal.some((l) => l.id === r.id));

  localStorage.setItem(
    "wordsLists",
    JSON.stringify([...newLocal, ...onlyRemote]),
  );

  return [...newLocal, ...onlyRemote];
}
