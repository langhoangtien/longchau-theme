import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
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
import { FormItem, FormMessage, useFormField } from "../ui/form";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { set } from "react-hook-form";
import useWindowSize from "@/hooks/use-window-size";
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
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { width, height } = useWindowSize();
  const handleOpen = (op: boolean) => {
    setOpen(op);
    if (op && inputRef.current) {
      inputRef.current.blur();
    }
  };

  if (width && width > 768)
    return (
      <FormItem>
        <Popover open={open && !disabled} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <div className="dropdown-container relative">
              <div
                className={`w-full dropdown-input hover:border-primary cursor-pointer  overflow-hidden relative border border-stroke-default rounded-lg pl-2 pr-14 hover:border-stroke-focus transition ease-in-out delay-25 h-[56px] py-1 ${
                  field.value ? "pt-[26px]" : "pt-[16px]"
                } ${
                  disabled ? "pointer-events-none bg-gray-300" : "bg-white"
                } ${error ? "border-destructive bg-red-50" : ""}`}
              >
                {field.value ? (
                  <span className="absolute text-sm font-medium text-gray-500 top-1">
                    {label}
                  </span>
                ) : (
                  <span className="absolute text-base font-medium text-gray-500">
                    {label}
                  </span>
                )}

                <button
                  className="w-full cursor-pointer appearance-none bg-inherit
                  text-base outline-none text-left"
                >
                  {options.find((option: any) => option[idName] === field.value)
                    ?.name ?? ""}
                </button>
                <span className="dropdown-icon text-gray-400 absolute right-4 inline-block top-1/2 -translate-y-1/2">
                  <ChevronDown className="w-6 h-6 shrink-0 grow-0 transition-transform ease-in-out rotate-0" />
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
              className={`w-full dropdown-input hover:border-primary cursor-pointer  overflow-hidden relative border border-stroke-default rounded-lg pl-2 pr-14 hover:border-stroke-focus transition ease-in-out delay-25 h-[56px] py-1 ${
                field.value ? "pt-[26px]" : "pt-[16px]"
              } ${disabled ? "pointer-events-none bg-gray-300" : "bg-white"} ${
                error ? "border-destructive bg-red-50" : ""
              }`}
            >
              {field.value ? (
                <span className="absolute text-sm font-medium text-gray-500 top-1">
                  {label}
                </span>
              ) : (
                <span className="absolute text-base font-medium text-gray-500">
                  {label}
                </span>
              )}

              <button
                className="w-full cursor-pointer appearance-none bg-inherit
                  text-base outline-none text-left"
              >
                {options.find((option: any) => option[idName] === field.value)
                  ?.name ?? ""}
              </button>
              <span className="dropdown-icon text-gray-400 absolute right-4 inline-block top-1/2 -translate-y-1/2">
                <ChevronDown className="w-6 h-6 shrink-0 grow-0 transition-transform ease-in-out rotate-0" />
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
