import * as React from "react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground shadow-[0_8px_16px_rgba(74,134,165,0.32)] hover:bg-[#3f7692]",
  secondary: "bg-accent text-accent-foreground shadow-[0_8px_16px_rgba(20,24,27,0.22)] hover:bg-[#2b2f32]",
  outline: "border bg-card/90 hover:bg-muted",
  ghost: "hover:bg-muted",
  danger: "bg-[#a83232] text-white hover:bg-[#842727]",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    />
  ),
);
Button.displayName = "Button";
