import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, readOnly, ...props }, ref) => {
    return (
      <input
        ref={ref}
        readOnly={readOnly}
        aria-readonly={readOnly || undefined}
        className={cn(
          "w-full rounded-[3px] border border-borderGray px-3 py-2 text-sm text-textPrimary transition-colors",
          "focus:outline-none focus:border-successGreen focus:ring-1 focus:ring-successGreen",
          readOnly && "bg-inputBg cursor-not-allowed",
          !readOnly && "bg-white",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
