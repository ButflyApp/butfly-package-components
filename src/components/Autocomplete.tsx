"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  MaskedCommandInput,
} from "@/components/Command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover";
import { cn } from "@/utils/cn";
import { getObjectItem } from "@/utils/getObjectItem";
import { useEffect, useMemo, useState } from "react";
import { patternFormatter } from "react-number-format";
import { v4 } from "uuid";
import { isEqual } from "@/utils/isEqual";
import { Loader2Icon, XIcon } from "lucide-react";

const autocompleteFieldUid = v4();

interface AutocompleteProps {
  labelValue: string;
  options: { [field: string]: any }[];
  className?: string;
  buttonClassName?: string;
  clearable?: boolean;
  error?: boolean;
  mask?: string;
  value?: { [field: string]: any } | null;
  defaultOption?: { [field: string]: any };
  onValueChange?: (value: { [field: string]: any }) => void;
  onTypedValueChange?: (value: string) => void;
  searchText?: string;
  isLoading?: boolean;
  actions?: {
    CreationComponent: ({
      typedValue,
      maskedValue,
      setOpen,
      setCurrentOption,
      resetAutocomplete,
    }: {
      typedValue: string;
      maskedValue: string;
      setOpen: (value: boolean) => void;
      setCurrentOption: (value: any) => void;
      resetAutocomplete: VoidFunction;
    }) => React.ReactElement;
  };
}

export function Autocomplete({
  options = [],
  mask = "",
  onValueChange,
  onTypedValueChange,
  labelValue,
  clearable = false,
  value,
  defaultOption,
  searchText = "Pesquise as opções",
  actions,
  className,
  error,
  buttonClassName,
  isLoading,
}: AutocompleteProps) {
  options = useMemo(
    () =>
      options.map((option) => ({ ...option, [autocompleteFieldUid]: v4() })),
    [options]
  );

  const [open, setOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState<
    { [field: string]: any } | null | undefined
  >(defaultOption || null);
  const [typedValue, setTypedValue] = useState("");
  const [maskedValue, setMaskedValue] = useState("");

  useEffect(() => {
    if (onTypedValueChange) onTypedValueChange(typedValue);
  }, [typedValue]);

  const selectedValue = useMemo(
    () => getObjectItem(currentOption, labelValue),
    [currentOption, currentOption]
  );

  useEffect(() => {
    if (value) {
      const option = options.find((option) => {
        const { [autocompleteFieldUid]: field, ...optionRest } = option;
        const equal = isEqual(value, optionRest);

        return equal;
      });
      setCurrentOption(option || null);
    } else if (value !== undefined) {
      setCurrentOption(value);
    } else {
      setCurrentOption(currentOption);
    }
  }, [currentOption, value]);

  function maskValue(value: string) {
    if (!value) return "";
    return mask ? patternFormatter(value, { format: mask }) : value;
  }

  function resetAutocomplete(e?: React.SyntheticEvent) {
    e?.preventDefault()
    setTypedValue("");
    setMaskedValue("");
    setCurrentOption(defaultOption || null);
    onValueChange && onValueChange(null!);
  }

  return (
    <div className={cn("flex flex-col", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "justify-between",
              buttonClassName,
              error && "border-red-500"
            )}
          >
            {currentOption
              ? maskValue(selectedValue)
              : "Selecione uma opção..."}

            {isLoading ? (
              <div className="ml-2 h-4 w-4 shrink-0 opacity-50">
                <Loader2Icon className="mr-2 h-5 w-5 animate-spin" />
              </div>
            ) : (
              <div className="flex">
                {clearable && currentOption && (
                  <button
                    className="ml-2 h-4 w-4 shrink-0 rounded-full z-20"
                    onClick={resetAutocomplete}
                  >
                    <XIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                  </button>
                )}
                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </div>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="popover-content-width-same-as-its-trigger p-0">
          <Command
            filter={(fieldValue: string) => {
              const optionsFiltered = options.find((option) => {
                return option[autocompleteFieldUid] === fieldValue;
              });
              if (optionsFiltered) return 1;
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
            <CommandGroup
              className="p-1 gap-1"
              value={currentOption ? currentOption[autocompleteFieldUid] : ""}
            >
              {options?.length === 0 ? (
                <CommandEmpty>Nenhum registro encontrado</CommandEmpty>
              ) : (
                options?.map((option, key) => {
                  const label = getObjectItem(option, labelValue);

                  return (
                    <CommandItem
                      key={key}
                      value={option[autocompleteFieldUid]}
                      disabled={false}
                      onSelect={() => {
                        const { [autocompleteFieldUid]: field, ...optionRest } =
                          option;
                        onValueChange && onValueChange(optionRest);
                        setCurrentOption(option);
                        setOpen(false);
                      }}
                    >
                      {maskValue(label)}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          currentOption &&
                            currentOption[autocompleteFieldUid] ===
                              option[autocompleteFieldUid]
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
                  setCurrentOption,
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
