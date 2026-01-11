import { Pressable, Animated, View } from 'react-native';
import { useEffect, useRef } from 'react';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

interface ChatOptionProps {
  label: string;
  icon?: string;
  onPress: () => void;
  delay?: number;
  selected?: boolean;
}

export function ChatOption({ label, icon, onPress, delay = 0, selected }: ChatOptionProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 8,
          useNativeDriver: true,
        }),
      ]).start();
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ scale: scaleAnim }],
      }}
    >
      <Pressable
        onPress={onPress}
        className={cn(
          "flex-row items-center px-4 py-3 rounded-xl border mb-2",
          selected 
            ? "bg-primary-green border-primary-green" 
            : "bg-secondary-dark border-gray-700 active:border-primary-green"
        )}
      >
        {icon && (
          <Text className="text-xl mr-3">{icon}</Text>
        )}
        <Text 
          variant="body" 
          className={cn(
            "font-medium",
            selected ? "text-primary-dark" : "text-white"
          )}
        >
          {label}
        </Text>
        {selected && (
          <View className="ml-auto">
            <Text className="text-primary-dark">✓</Text>
          </View>
        )}
      </Pressable>
    </Animated.View>
  );
}

interface ChatInputOptionsProps {
  options: { label: string; icon?: string; value: string }[];
  onSelect: (value: string) => void;
  selectedValue?: string;
  baseDelay?: number;
}

export function ChatInputOptions({ options, onSelect, selectedValue, baseDelay = 0 }: ChatInputOptionsProps) {
  return (
    <View className="mt-2">
      {options.map((option, index) => (
        <ChatOption
          key={option.value}
          label={option.label}
          icon={option.icon}
          onPress={() => onSelect(option.value)}
          delay={baseDelay + index * 100}
          selected={selectedValue === option.value}
        />
      ))}
    </View>
  );
}
