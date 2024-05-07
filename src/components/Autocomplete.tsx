"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { Button } from "./Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  MaskedCommandInput,
} from "./Command";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { cn } from "../utils/cn";
import { getObjectItem } from "../utils/getObjectItem";
import { useMemo, useState } from "react";
import { patternFormatter } from "react-number-format";

interface AutocompleteProps {
  title?: string;
  required?: boolean;
  labelValue: string;
  mask?: string;
  value?: { [field: string]: any };
  options: { [field: string]: any }[];
  defaultOption?: { [field: string]: any };
  onValueChange?: (value: { [field: string]: any }) => void;
  searchText?: string;
  actions?: {
    CreationComponent: ({
      typedValue,
      maskedValue,
      setOpen,
      setSelectedOption,
      resetAutocomplete,
    }: {
      typedValue: string;
      maskedValue: string;
      setOpen: (value: boolean) => void;
      setSelectedOption: (value: any) => void;
      resetAutocomplete: VoidFunction;
    }) => React.ReactElement;
  };
}

export function Autocomplete({
  title,
  options = [],
  mask = "",
  onValueChange,
  labelValue,
  defaultOption,
  required,
  searchText = "Pesquise as opções",
  actions,
}: AutocompleteProps) {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<{
    [field: string]: any;
  } | null>(defaultOption || null);
  const [typedValue, setTypedValue] = useState("");
  const [maskedValue, setMaskedValue] = useState("");

  const selectedValue = useMemo(() => getObjectItem(selectedOption, labelValue), [selectedOption]);

  function maskValue(value: string) {
    if (!value) return "";
    return mask ? patternFormatter(value, { format: mask }) : value;
  }

  function resetAutocomplete() {
    setTypedValue("");
    setMaskedValue("");
    setOpen(false);
  }

  return (
    <div className="flex flex-1 flex-col">
      <label className="ml-3 text-sm font-medium text-gray-500">
        {title}
        {required ? "*" : ""}
      </label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="justify-between"
          >
            {selectedOption
              ? maskValue(selectedValue)
              : "Selecione uma opção..."}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="popover-content-width-same-as-its-trigger p-0">
          <Command
            filter={(fieldValue: string) => {
              if (fieldValue.includes(typedValue)) return 1;
              return 0;
            }}
          >
            {mask ? (
              <MaskedCommandInput
                format={mask}
                onValueChange={({ value, formattedValue }) => {
                  setTypedValue(value);
                  setMaskedValue(formattedValue);
                }}
              />
            ) : null}
            <div className={cn(mask ? "hidden" : "block")}>
              <CommandInput
                placeholder={searchText}
                value={typedValue}
                onValueChange={setTypedValue}
              />
            </div>
            <CommandGroup className="p-1 gap-1">
              {options?.length === 0 ? (
                <CommandEmpty>Nenhum registro encontrado</CommandEmpty>
              ) : (
                options?.map((option, key) => {
                  const label = getObjectItem(option, labelValue);

                  return (
                    <CommandItem
                      key={key}
                      value={JSON.stringify(option)}
                      disabled={false}
                      onSelect={(currentValue) => {
                        setSelectedOption(JSON.parse(currentValue));
                        setOpen(false);
                        onValueChange &&
                          onValueChange(JSON.parse(currentValue));
                      }}
                    >
                      {maskValue(label)}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          JSON.stringify(option) ===
                            JSON.stringify(selectedOption)
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  );
                })
              )}
            </CommandGroup>
            {actions?.CreationComponent && (
              <div className={cn("p-1 pt-0")}>
                {actions.CreationComponent({
                  typedValue,
                  maskedValue,
                  setOpen,
                  setSelectedOption,
                  resetAutocomplete,
                })}
              </div>
            )}
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
