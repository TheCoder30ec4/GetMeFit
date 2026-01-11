import { View, Animated } from 'react-native';
import { useEffect, useRef } from 'react';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

interface ChatBubbleProps {
  message: string;
  isBot?: boolean;
  delay?: number;
}

export function ChatBubble({ message, isBot = true, delay = 0 }: ChatBubbleProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
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
        transform: [{ translateY: slideAnim }],
      }}
      className={cn(
        "max-w-[85%] mb-3",
        isBot ? "self-start" : "self-end"
      )}
    >
      <View
        className={cn(
          "px-4 py-3 rounded-2xl",
          isBot 
            ? "bg-secondary-dark rounded-tl-sm" 
            : "bg-primary-green rounded-tr-sm"
        )}
      >
        <Text 
          variant="body" 
          className={isBot ? "text-white" : "text-primary-dark"}
        >
          {message}
        </Text>
      </View>
    </Animated.View>
  );
}

export function TypingIndicator() {
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = (dot: Animated.Value, delay: number) => {
      Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(dot, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(dot, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    animate(dot1, 0);
    animate(dot2, 150);
    animate(dot3, 300);
  }, []);

  return (
    <View className="self-start bg-secondary-dark px-4 py-3 rounded-2xl rounded-tl-sm mb-3">
      <View className="flex-row gap-1">
        {[dot1, dot2, dot3].map((dot, i) => (
          <Animated.View
            key={i}
            style={{
              opacity: dot.interpolate({
                inputRange: [0, 1],
                outputRange: [0.3, 1],
              }),
            }}
            className="w-2 h-2 bg-gray-400 rounded-full"
          />
        ))}
      </View>
    </View>
  );
}
