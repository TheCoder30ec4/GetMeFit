import { TextInput, View, Text, type TextInputProps } from "react-native";
import { cn } from "@/lib/utils";

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerClassName?: string;
}

export function Input({
  className,
  containerClassName,
  label,
  error,
  ...props
}: InputProps) {
  return (
    <View className={cn("w-full", containerClassName)}>
      {label && (
        <Text className="text-white text-sm font-medium mb-2">{label}</Text>
      )}
      <TextInput
        className={cn(
          "bg-primary-dark border border-gray-700 text-white px-4 py-3 rounded-md text-base",
          error && "border-coral",
          className
        )}
        placeholderTextColor="#6B7280"
        {...props}
      />
      {error && (
        <Text className="text-coral text-xs mt-1">{error}</Text>
      )}
    </View>
  );
}
