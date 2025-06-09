"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { useWordsLists } from "@/hooks/useWordsList";
import { DICTIONARY } from "@/lib/dictionary";

function WordsListsCreateDialog({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const { mutate } = useWordsLists();

  const formSchema = z.object({
    name: z
      .string()
      .min(2, DICTIONARY[language]["Name must have at least 1 character."])
      .max(50, DICTIONARY[language]["Name cannot exceed 50 characters."]),
    list: z
      .string()
      .min(
        2,
        DICTIONARY[language]["Words list must have at least 4 characters."],
      )
      .max(
        1000,
        DICTIONARY[language]["Words list cannot exceed 1000 characters."],
      ),
  });

  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      list: "",
    },
  });

  function handleCreateDialog(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      await mutate.mutateAsync(
        {
          action: "create",
          payload: {
            name: values.name,
            words: values.list,
          },
        },
        {
          onSuccess: () => {
            setOpen(false);
          },
        },
      );
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {DICTIONARY[language]["Create a new words list"]}
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-2">
            {DICTIONARY[language].wordsListFormat}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleCreateDialog)}
            className="space-y-4"
          >
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{DICTIONARY[language]["Name"]}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={`1. ${DICTIONARY[language === "es" ? "en" : language]["Greetings"]} - Saludos`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Words list content */}
            <FormField
              control={form.control}
              name="list"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{DICTIONARY[language]["Words list"]}</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-48 resize-none"
                      placeholder={`Hola, ${DICTIONARY[language === "es" ? "en" : language]["Hello"]}; Hasta luego, ${DICTIONARY[language === "es" ? "en" : language]["See you later"]}; Buenos diás, ${DICTIONARY[language === "es" ? "en" : language]["Good morning"]};`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">
                  {DICTIONARY[language]["Cancel"]}
                </Button>
              </DialogClose>
              <Button type="submit" isLoading={isPending}>
                <span>{DICTIONARY[language]["Save changes"]}</span>
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default WordsListsCreateDialog;
