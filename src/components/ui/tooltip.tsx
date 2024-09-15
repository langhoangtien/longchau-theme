"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const ToolTipCustom = ({ time, raw }: { time: string; raw: string }) => (
  <div className="group inline-block relative cursor-pointer max-w-fit min-w-fit">
    <div className="absolute hidden group-hover:block pr-0.5 whitespace-nowrap bottom-1 w-full z-[400000]">
      <div className="flex flex-col-reverse justify-start items-center translate-y-full">
        <div className="bg-gray-800/80 shadow-md text-white rounded-lg py-1 px-3 cursor-default text-sm">
          {raw}
        </div>
        <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[8px] border-l-transparent border-r-transparent border-b-gray-800/80 -mb-[1px]"></div>
      </div>
    </div>
    <span className="font-medium text-sm">{time}</span>
  </div>
);

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  ToolTipCustom,
};
