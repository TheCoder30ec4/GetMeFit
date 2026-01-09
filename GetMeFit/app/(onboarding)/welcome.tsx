import { View, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-primary-dark px-6 pt-16 pb-12">
      {/* Hero Section */}
      <View className="flex-1 items-center justify-center">
        <View className="w-24 h-24 bg-secondary-dark rounded-full items-center justify-center mb-8">
          <Text variant="h1" className="text-primary-green">💪</Text>
        </View>
        
        <Text variant="h1" className="text-center mb-4">
          Welcome to{'\n'}
          <Text className="text-primary-green">GetMeFit</Text>
        </Text>
        
        <Text variant="body" className="text-gray-400 text-center px-8">
          Your personal fitness companion. Track workouts, monitor nutrition, and achieve your health goals.
        </Text>
      </View>

      {/* Bottom Actions */}
      <View className="gap-4">
        <Button
          title="Get Started"
          onPress={() => router.push('/(onboarding)/goals')}
          className="w-full"
        />
        <Button
          title="I already have an account"
          variant="secondary"
          onPress={() => router.push('/(auth)/login')}
          className="w-full"
        />
      </View>
    </View>
  );
}
