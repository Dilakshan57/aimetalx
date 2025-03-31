import React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
  variant: {
    default: "button-default",
    destructive: "button-destructive",
    outline: "button-outline",
    secondary: "button-secondary",
    ghost: "button-ghost",
    link: "button-link"
  },
  size: {
    default: "button-size-default",
    sm: "button-size-small",
    lg: "button-size-large",
    icon: "button-size-icon"
  }
};

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";
    return (
      <Comp
        className={cn(
          "button",
          buttonVariants.variant[variant],
          buttonVariants.size[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };