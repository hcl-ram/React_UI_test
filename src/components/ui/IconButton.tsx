import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "success" | "warning" | "neutral";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  tone?: Tone;
  icon: ReactNode;
  label: string;
}

const toneClasses: Record<Tone, string> = {
  success: "bg-successGreen hover:bg-green-600 text-white",
  warning: "bg-warningOrange hover:bg-orange-500 text-white",
  neutral: "bg-gray-500 hover:bg-gray-600 text-white",
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ tone = "success", icon, label, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        aria-label={label}
        title={label}
        className={cn(
          "inline-flex items-center justify-center rounded-[3px] p-1.5 h-8 w-8 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-green-500",
          toneClasses[tone],
          className
        )}
        {...props}
      >
        {icon}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
