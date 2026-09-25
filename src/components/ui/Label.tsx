import { LabelHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

export const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn("block text-sm font-bold text-textPrimary mb-1.5", className)}
      {...props}
    />
  )
);
Label.displayName = "Label";
