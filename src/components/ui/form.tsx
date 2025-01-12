"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "./input";
import Notifycation from "../icons/notifycation";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(
        "font-normal absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1",
        className,
        error && "!text-destructive"
      )}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <div className="flex text-destructive mt-2">
      <Notifycation className="w-5 h-5 mr-1 shrink-0 grow-0" />
      <span
        ref={ref}
        id={formMessageId}
        className={cn(
          "text-sm font-medium text-destructive text-justify line-clamp-2",
          className
        )}
        {...props}
      >
        {body}
      </span>
    </div>
  );
});
FormMessage.displayName = "FormMessage";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ReactNode;
}

const InputRHF = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, name, required, icon, placeholder, ...props }, ref) => {
    const { control } = useFormContext();
    const inputId = `input-${name}`;
    return (
      <FormField
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <FormItem className="">
            <div className="relative">
              <FormControl>
                <input
                  {...field}
                  type={type}
                  className={cn(
                    "block px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer",
                    className,
                    error && "border-destructive focus:border-destructive "
                  )}
                  placeholder=" "
                  id={inputId}
                  ref={ref}
                  {...props}
                />
              </FormControl>
              <label
                htmlFor={inputId}
                className={cn(
                  "font-normal absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1",
                  className,
                  error && "!text-destructive"
                )}
              >
                {placeholder}{" "}
                {required && <span className="text-destructive">*</span>}
              </label>
              {icon}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }
);
InputRHF.displayName = "InputRHF";

const InputRHF2 = ({ className, type, name = "", ...props }: any) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          <FormControl>
            <Input
              className={cn(
                className,
                error &&
                  "!border-destructive focus:border-destructive bg-red-50"
              )}
              {...field}
              {...props}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

InputRHF2.displayName = "InputRHF2";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
}
const TextareaRHF = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, name, label, ...props }, ref) => {
    const { control } = useFormContext();
    return (
      <FormField
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <FormItem className="">
            <FormControl>
              <div className="relative">
                <div>
                  <div className="flex-1 w-full bg-white">
                    <div
                      className={cn(
                        "flex group flex-col-reverse justify-end box-border rounded-lg border border-solid   py-[8px] h-[120px] bg-field-default-active disabled:!bg-field-default-disable border-stroke-default focus-within:border-stroke-focus disabled:!border-field-default-disable",
                        className,
                        error && "border-destructive focus:border-destructive "
                      )}
                    >
                      <textarea
                        {...field}
                        {...props}
                        ref={ref}
                        className="peer outline-none resize-none w-full px-4 text-base  focus:border-primary font-normal text-justify placeholder:text-base placeholder:font-normal placeholder:text-left bg-transparent  disabled:!text-gray-400 placeholder:text-placeholder disabled:placeholder:!text-gray-400 "
                        name="note"
                      />
                      <label className="px-4 text-sm font-medium text-gray-400 peer-disabled:!text-gray-400">
                        {label}
                      </label>
                    </div>
                  </div>
                </div>
                <FormMessage />
              </div>
            </FormControl>
          </FormItem>
        )}
      />
    );
  }
);
TextareaRHF.displayName = "TextareaRHF";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
  InputRHF,
  InputRHF2,
  TextareaRHF,
};
