import { View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleReset = () => {
    // In a real app, send reset email here
    setSent(true);
  };

  if (sent) {
    return (
      <View className="flex-1 bg-primary-dark px-6 pt-16 items-center justify-center">
        <View className="w-20 h-20 bg-primary-green/20 rounded-full items-center justify-center mb-6">
          <Text className="text-4xl">✉️</Text>
        </View>
        <Text variant="h2" className="text-center mb-3">Check Your Email</Text>
        <Text variant="body" className="text-gray-400 text-center mb-8">
          We've sent password reset instructions to {email}
        </Text>
        <Button
          title="Back to Login"
          onPress={() => router.replace('/(auth)/login')}
          className="w-full"
        />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-primary-dark px-6 pt-16">
      {/* Back Button */}
      <Pressable onPress={() => router.back()} className="mb-8">
        <Text variant="body" className="text-primary-green">← Back</Text>
      </Pressable>

      {/* Header */}
      <View className="mb-10">
        <Text variant="h1" className="mb-2">Forgot Password?</Text>
        <Text variant="body" className="text-gray-400">
          Enter your email and we'll send you instructions to reset your password
        </Text>
      </View>

      {/* Form */}
      <Input
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Reset Button */}
      <View className="mt-8">
        <Button
          title="Send Reset Link"
          onPress={handleReset}
          disabled={email.length === 0}
          className="w-full"
        />
      </View>
    </View>
  );
}
