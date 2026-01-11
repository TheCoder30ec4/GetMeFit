import { cva, type VariantProps } from "class-variance-authority";
import { Pressable, Text, type PressableProps } from "react-native";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex flex-row items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary-green",
        secondary: "bg-transparent border-2 border-primary-green",
        outline: "bg-transparent border border-gray-700",
        ghost: "bg-transparent",
        destructive: "bg-coral",
      },
      size: {
        default: "h-14 px-6",
        sm: "h-10 px-4",
        lg: "h-16 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const buttonTextVariants = cva("font-semibold text-base", {
  variants: {
    variant: {
      default: "text-primary-dark",
      secondary: "text-white",
      outline: "text-white",
      ghost: "text-primary-green",
      destructive: "text-white",
    },
    size: {
      default: "text-base",
      sm: "text-sm",
      lg: "text-lg",
      icon: "text-base",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends PressableProps,
    VariantProps<typeof buttonVariants> {
  title: string;
  textClassName?: string;
}

export function Button({
  className,
  textClassName,
  variant,
  size,
  title,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      className={cn(
        buttonVariants({ variant, size }),
        disabled && "opacity-40",
        className
      )}
      disabled={disabled}
      {...props}
    >
      <Text
        className={cn(
          buttonTextVariants({ variant, size }),
          textClassName
        )}
      >
        {title}
      </Text>
    </Pressable>
  );
}
