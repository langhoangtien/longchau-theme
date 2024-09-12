import * as React from "react";

import { cn } from "@/lib/utils";

export interface Input2Props
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "outline-none flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base hover:border-primary focus:border-primary focus-visible:border-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

const Input2 = React.forwardRef<HTMLInputElement, Input2Props>(
  ({ className, label, type, ...props }, ref) => {
    return (
      <div>
        <div className="group relative z-0 flex-1 w-full">
          <input
            type={type}
            ref={ref}
            {...props}
            className="peer outline-none box-border w-full pl-4 rounded-lg border border-solid text-base font-normal placeholder:text-base placeholder:font-normal h-[56px] pr-4 placeholder:will-change-[opacity] placeholder:ease-in-out placeholder:opacity-0 autofill:pt-[23px] group-focus-within:pt-[23px] autofill:pb-[7px] group-focus-within:pb-[7px] autofill:placeholder:transition-[opacity] group-focus-within:placeholder:transition-[opacity] autofill:placeholder:duration-200 group-focus-within:placeholder:duration-200 autofill:placeholder:opacity-100 group-focus-within:placeholder:opacity-100 bg-field-default-active disabled:!bg-field-default-disable border-stroke-default group-focus-within:border-stroke-focus disabled:!border-field-default-disable text-gray-1000 disabled:!text-gray-600 placeholder:text-gray-600"
          />
          <label className="box-border text-gray-500 border-x border-transparent pl-4 absolute inset-0 z-10 pointer-events-none flex justify-start items-center text-base font-normal will-change-[color,line-height,font-size,font-weight,letter-spacing,bottom,padding-top] transition-[color,line-height,font-size,font-weight,letter-spacing,bottom,padding-top] duration-200 ease-in-out pr-4 peer-autofill:bottom-8 group-focus-within:bottom-8 peer-autofill:pt-2 group-focus-within:pt-2 peer-autofill:text-sm group-focus-within:text-sm peer-autofill:font-medium group-focus-within:font-medium peer-disabled:!text-gray-400">
            <span className="line-clamp-1">{label}</span>
          </label>
        </div>
      </div>
    );
  }
);
Input2.displayName = "Input2";

export { Input, Input2 };
