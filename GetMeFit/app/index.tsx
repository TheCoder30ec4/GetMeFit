import { useEffect } from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { Text } from '@/components/ui/text';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Simulate checking auth state / loading
    const timer = setTimeout(() => {
      // Navigate to onboarding for new users
      // Or navigate to (tabs) for logged in users
      router.replace('/(onboarding)');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 bg-primary-dark items-center justify-center">
      <View className="w-20 h-20 bg-primary-green rounded-2xl items-center justify-center mb-4">
        <Text variant="h1" className="text-primary-dark">G</Text>
      </View>
      <Text variant="h1" className="text-primary-green italic">
        GetMeFit
      </Text>
      <Text variant="muted" className="mt-2">
        Your fitness journey starts here
      </Text>
    </View>
  );
}
