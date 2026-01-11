import { Text as RNText, type TextProps as RNTextProps } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("text-white", {
  variants: {
    variant: {
      h1: "text-4xl font-bold",
      h2: "text-3xl font-bold",
      h3: "text-2xl font-bold",
      h4: "text-lg font-semibold",
      body: "text-base",
      bodyLarge: "text-base",
      small: "text-sm",
      tiny: "text-xs font-medium",
      muted: "text-gray-400 text-sm",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export interface TextProps
  extends RNTextProps,
    VariantProps<typeof textVariants> {}

export function Text({ className, variant, ...props }: TextProps) {
  return (
    <RNText className={cn(textVariants({ variant }), className)} {...props} />
  );
}
