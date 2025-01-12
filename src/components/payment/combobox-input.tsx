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
import { useIsMobile } from "@/hooks/use-mobile";
export default function ComboboxDemo({
  label,
  disabled,
  field,
  setValue,
  options,
  idName = "id",
  required,
}: any) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const { error } = useFormField();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleOpen = (op: boolean) => {
    setOpen(op);
    if (op && inputRef.current) {
      inputRef.current.blur();
    }
  };
  const value =
    options.find((option: any) => option[idName] === field.value)?.name ?? "";
  const isMobile = useIsMobile();
  console.log("ERROR", error, value);

  if (isMobile)
    return (
      <FormItem>
        <Sheet open={open && !disabled} onOpenChange={handleOpen}>
          <SheetTrigger asChild>
            <div
              className={`w-full focus:border-primary active:border-primary cursor-pointer text-gray-500  relative border border-stroke-default rounded-lg pl-2 pr-14 hover:border-stroke-focus transition ease-in-out delay-25 h-[52px] py-1  ${
                disabled ? "pointer-events-none bg-gray-300" : "bg-white"
              } ${error ? "border-destructive !text-destructive" : ""}`}
            >
              {value && (
                <span className="absolute text-xs font-normal top-2 bg-white -translate-y-4 px-2 z-10">
                  {label}{" "}
                  {required && <span className="text-destructive ml-1">*</span>}
                </span>
              )}

              {value ? (
                <span
                  className="w-full h-full flex items-center text-gray-900 cursor-pointer 
                text-base outline-none text-left"
                >
                  {value}
                </span>
              ) : (
                <span
                  className="w-full h-full flex font-normal  items-center cursor-pointer 
                text-sm outline-none text-inherit text-left"
                >
                  {label}{" "}
                  {required && <span className="text-destructive ml-1">*</span>}
                </span>
              )}

              <span className="dropdown-icon absolute right-4 inline-block top-1/2 -translate-y-1/2">
                <ChevronDown
                  strokeWidth={1.25}
                  className="w-6 h-6 shrink-0 grow-0 transition-transform ease-in-out rotate-0"
                />
              </span>
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

  return (
    <FormItem>
      <Popover open={open && !disabled} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div
            className={`w-full focus:border-primary active:border-primary cursor-pointer text-gray-500 relative border border-stroke-default rounded-lg pl-2 pr-14 hover:border-stroke-focus transition ease-in-out delay-25 h-[52px] py-1  ${
              disabled ? "pointer-events-none bg-gray-300" : "bg-white"
            } ${error ? "border-destructive !text-destructive" : ""}`}
          >
            {value && (
              <span className="absolute text-xs font-normal  top-2 bg-white -translate-y-4 px-2 z-10">
                {label}{" "}
                {required && <span className="text-destructive ml-1">*</span>}
              </span>
            )}

            {value ? (
              <span
                className="w-full h-full flex items-center text-gray-900 cursor-pointer 
                text-base outline-none text-left"
              >
                {value}
              </span>
            ) : (
              <span
                className="w-full h-full flex font-normal   items-center cursor-pointer 
                text-sm outline-none text-left"
              >
                {label}{" "}
                {required && <span className="text-destructive ml-1">*</span>}
              </span>
            )}

            <span className="dropdown-icon  absolute right-4 inline-block top-1/2 -translate-y-1/2">
              <ChevronDown
                strokeWidth={1.25}
                className="w-6 h-6 shrink-0 grow-0 transition-transform ease-in-out rotate-0"
              />
            </span>
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
}
