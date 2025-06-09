"use client";

import React from "react";
import Link from "next/link";

import { DICTIONARY } from "@/lib/dictionary";
import { GITHUB_REPO_LINK } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { Database, Github, Info } from "@/components/icons";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import FooterStorageDialog from "@/components/layout/FooterStorageDialog";
import FooterInfoDialog from "@/components/layout/FooterInfoDialog";

function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="text-muted-foreground fixed bottom-0 left-0 w-screen p-8">
      <ul className="flex items-center gap-6 text-xs">
        <li>
          <Link
            href={GITHUB_REPO_LINK}
            target="_blank"
            className="hover:text-foreground focus-visible:text-foreground flex items-center gap-1 transition-colors duration-300"
          >
            <Github className="size-4" /> github
          </Link>
        </li>

        <li>
          <AlertDialog>
            <AlertDialogTrigger className="hover:text-foreground focus-visible:text-foreground flex cursor-pointer items-center gap-1 transition-colors duration-300">
              <Database className="size-4" /> storage
            </AlertDialogTrigger>

            <FooterStorageDialog />
          </AlertDialog>
        </li>

        <li>
          <Dialog>
            <DialogTrigger className="hover:text-foreground focus-visible:text-foreground flex cursor-pointer items-center gap-1 transition-colors duration-300">
              <Info className="size-4" /> info
            </DialogTrigger>

            <FooterInfoDialog />
          </Dialog>
        </li>

        <li className="ml-auto">{DICTIONARY[language].footerMadeBy}</li>
      </ul>
    </footer>
  );
}

export default Footer;
