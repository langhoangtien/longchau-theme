"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
import { FormItem, FormMessage, useFormField } from "../ui/form";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
export default function ComboboxDemo({
  label,
  disabled,
  field,
  setValue,
  options,
  idName = "id",
}: any) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const { error } = useFormField();
  const width = window.innerWidth;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const handleOpen = (op: boolean) => {
    setOpen(op);
    if (op && inputRef.current) {
      inputRef.current.blur();
    }
  };

  if (width > 768)
    return (
      <FormItem>
        <Popover open={open && !disabled} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <div className="dropdown-container relative">
              <div
                className={`w-full dropdown-input hover:border-primary cursor-pointer  overflow-hidden relative border border-stroke-default rounded-lg pl-4 pr-14 hover:border-stroke-focus transition ease-in-out delay-25 h-[56px] py-1 ${
                  field.value ? "pt-[26px]" : "pt-[16px]"
                } ${
                  disabled ? "pointer-events-none bg-gray-300" : "bg-white"
                } ${error ? "border-destructive bg-red-50" : ""}`}
              >
                {field.value && (
                  <span className="absolute text-sm text-gray-400 top-1">
                    {label}
                  </span>
                )}

                <input
                  type="text"
                  placeholder={label}
                  className="w-full cursor-pointer appearance-none bg-inherit text-base outline-none placeholder:text-text-placeholder"
                  value={
                    options.find(
                      (option: any) => option[idName] === field.value
                    )?.name ?? ""
                  }
                />
                <span className="dropdown-icon text-gray-400 absolute right-4 inline-block top-1/2 -translate-y-1/2">
                  <svg
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 shrink-0 grow-0 transition-transform ease-in-out rotate-0"
                  >
                    <path
                      d="M5.25383 8.29289C5.64435 7.90237 6.27752 7.90237 6.66804 8.29289L12.9609 14.5858L19.2538 8.29289C19.6444 7.90237 20.2775 7.90237 20.668 8.29289C21.0586 8.68342 21.0586 9.31658 20.668 9.70711L13.668 16.7071C13.2775 17.0976 12.6444 17.0976 12.2538 16.7071L5.25383 9.70711C4.86331 9.31658 4.86331 8.68342 5.25383 8.29289Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </PopoverTrigger>
          <FormMessage />
          <PopoverContent className="p-0">
            <Command
              filter={(value, search) => {
                const find = options.find((i: any) => i.name == value);
                if (!find) {
                  return 0;
                }
                return find.name.toLowerCase().indexOf(search.toLowerCase()) ===
                  -1
                  ? 0
                  : 1;
              }}
            >
              <CommandInput
                value={search}
                onValueChange={setSearch}
                className="placeholder:text-gray-400 "
                placeholder="Nhập tìm thành phố..."
              />
              <CommandList>
                <CommandEmpty>Không tìm thấy kết quả.</CommandEmpty>
                <CommandGroup>
                  {options.map((option: any) => (
                    <CommandItem
                      key={option[idName]}
                      value={option.name}
                      onSelect={() => {
                        setValue(field.name, option[idName]);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          field.value === option[idName]
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {option.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </FormItem>
    );
  return (
    <FormItem>
      <Sheet open={open && !disabled} onOpenChange={handleOpen}>
        <SheetTrigger asChild>
          <div className="dropdown-container relative">
            <div
              className={`w-full dropdown-input hover:border-primary cursor-pointer  overflow-hidden relative border border-stroke-default rounded-lg pl-4 pr-14 hover:border-stroke-focus transition ease-in-out delay-25 h-[56px] py-1 ${
                field.value ? "pt-[26px]" : "pt-[16px]"
              } ${disabled ? "pointer-events-none bg-gray-300" : "bg-white"} ${
                error ? "border-destructive bg-red-50" : ""
              }`}
            >
              {field.value && (
                <span className="absolute text-sm text-gray-400 top-1">
                  {label}
                </span>
              )}

              <input
                type="text"
                placeholder={label}
                ref={inputRef}
                className="w-full cursor-pointer border-none appearance-none bg-inherit text-base outline-none placeholder:text-text-placeholder"
                value={
                  options.find((option: any) => option[idName] === field.value)
                    ?.name ?? ""
                }
              />
              <span className="dropdown-icon text-gray-400 absolute right-4 inline-block top-1/2 -translate-y-1/2">
                <svg
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 shrink-0 grow-0 transition-transform ease-in-out rotate-0"
                >
                  <path
                    d="M5.25383 8.29289C5.64435 7.90237 6.27752 7.90237 6.66804 8.29289L12.9609 14.5858L19.2538 8.29289C19.6444 7.90237 20.2775 7.90237 20.668 8.29289C21.0586 8.68342 21.0586 9.31658 20.668 9.70711L13.668 16.7071C13.2775 17.0976 12.6444 17.0976 12.2538 16.7071L5.25383 9.70711C4.86331 9.31658 4.86331 8.68342 5.25383 8.29289Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </div>
        </SheetTrigger>
        <FormMessage />
        <SheetContent
          onOpenAutoFocus={(e) => e.preventDefault()}
          side="bottom"
          className="p-0 min-h-[400px]"
        >
          <div className="mt-10" />

          <Command
            filter={(value, search) => {
              const find = options.find((i: any) => i.name == value);
              if (!find) {
                return 0;
              }
              return find.name.toLowerCase().indexOf(search.toLowerCase()) ===
                -1
                ? 0
                : 1;
            }}
          >
            <CommandInput
              value={search}
              onValueChange={setSearch}
              className="placeholder:text-gray-400 "
              placeholder="Nhập tìm thành phố..."
            />
            <CommandList>
              <CommandEmpty>Không tìm thấy kết quả.</CommandEmpty>
              <CommandGroup>
                {options.map((option: any) => (
                  <CommandItem
                    key={option[idName]}
                    value={option.name}
                    onSelect={() => {
                      setValue(field.name, option[idName]);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        field.value === option[idName]
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {option.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </SheetContent>
      </Sheet>
    </FormItem>
  );
}

// <Button
// variant="outline"
// role="combobox"
// aria-expanded={open}
// className={`w-full justify-between rounded-lg h-[54px] focus:border-primary hover:bg-white ${
//   value ? "text-gray-1000" : "text-gray-400"
// }`}
// >
// {value
//   ? options.find((option) => option.value === value)?.label
//   : "Chọn thành phố..."}
// <ChevronsUpDown className="ml-2 h-5 w-5 shrink-0 opacity-50" />
// </Button>
