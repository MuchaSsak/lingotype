"use client";

import React, { useState } from "react";
import { CheckIcon } from "lucide-react";
import type { PopoverContentProps } from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useLanguage } from "@/contexts/LanguageContext";
import { DICTIONARY } from "@/lib/dictionary";

type ComboboxProps = PopoverContentProps & {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  items: {
    value: string;
    label: string;
    Icon?: React.ReactNode;
  }[];
  iconClassName?: string;
  placeholderLabel?: string;
};

function Combobox({
  value,
  setValue,
  items,
  children,
  placeholderLabel,
  iconClassName,
  className,
  ...props
}: ComboboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>

      <PopoverContent className={cn("w-fit p-0", className)} {...props}>
        <Command>
          <CommandInput
            placeholder={`${DICTIONARY[language]["Search"]}${placeholderLabel ? " " + placeholderLabel : ""}...`}
          />
          <CommandList>
            <CommandEmpty>
              {DICTIONARY[language]["Couldn't find results"]}
            </CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.label}
                  onSelect={() => {
                    setValue(item.value);
                    setIsOpen(false);
                  }}
                  className={cn(value === item.value ? "text-primary!" : "")}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.value
                        ? "text-primary opacity-100"
                        : "opacity-0",
                    )}
                  />
                  {item.label}
                  <span className={iconClassName}>{item.Icon}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default Combobox;
