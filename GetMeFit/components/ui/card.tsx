import { View, type ViewProps } from "react-native";
import { cn } from "@/lib/utils";

export interface CardProps extends ViewProps {}

export function Card({ className, ...props }: CardProps) {
  return (
    <View
      className={cn(
        "bg-secondary-dark border border-gray-700 rounded-lg p-6",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: ViewProps) {
  return <View className={cn("mb-4", className)} {...props} />;
}

export function CardContent({ className, ...props }: ViewProps) {
  return <View className={cn("", className)} {...props} />;
}

export function CardFooter({ className, ...props }: ViewProps) {
  return <View className={cn("mt-4 flex-row", className)} {...props} />;
}
