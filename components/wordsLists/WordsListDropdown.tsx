"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Edit3Icon, Settings, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { WordsList } from "./WordsListsMenu";
import { useWordsLists } from "@/hooks/useWordsList";
import WordsListEditDialog from "./WordsListEditDialog";

function WordsListDropdown({ wordList }: { wordList: WordsList }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const { mutate } = useWordsLists();

  async function handleDeleteWordsList() {
    await mutate.mutateAsync(
      {
        action: "delete",
        payload: wordList,
      },
      {
        onSuccess: () => {
          setDeleteDialogOpen(false);
          setDropdownOpen(false);
        },
      },
    );
  }

  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <Button className="size-6" variant="secondary" size="icon">
          <Settings />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onSelect={(e) => {
            e.preventDefault();
            setEditDialogOpen(true);
          }}
        >
          Edit <Edit3Icon />
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={(e) => {
            e.preventDefault();
            setDeleteDialogOpen(true);
          }}
        >
          <div className="flex items-center gap-2">
            Delete <Trash2Icon />
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>

      <WordsListEditDialog
        wordList={wordList}
        open={editDialogOpen}
        setOpen={setEditDialogOpen}
      />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this words list?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteWordsList}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </DropdownMenu>
  );
}

export default WordsListDropdown;
