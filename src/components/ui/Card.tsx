import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "bg-panelBg border border-[#d0d0d0] rounded-md shadow-panel overflow-hidden",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";
