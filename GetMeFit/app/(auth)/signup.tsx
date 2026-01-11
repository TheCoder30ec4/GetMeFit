import { View, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SignupScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // In a real app, create user account here
    router.replace('/(tabs)');
  };

  const isValid = name.length > 0 && email.length > 0 && password.length >= 6 && password === confirmPassword;

  return (
    <View className="flex-1 bg-primary-dark">
      <ScrollView 
        className="flex-1 px-6 pt-16" 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View className="mb-10">
          <Text variant="h1" className="mb-2">Create Account</Text>
          <Text variant="body" className="text-gray-400">
            Start your fitness journey today
          </Text>
        </View>

        {/* Form */}
        <View className="gap-5">
          <Input
            label="Full Name"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />
          
          <Input
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <Input
            label="Password"
            placeholder="Create a password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          
          <Input
            label="Confirm Password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            error={confirmPassword.length > 0 && password !== confirmPassword ? "Passwords don't match" : undefined}
          />
        </View>

        {/* Terms */}
        <Text variant="small" className="text-gray-400 text-center mt-6">
          By signing up, you agree to our{' '}
          <Text className="text-primary-green">Terms of Service</Text>
          {' '}and{' '}
          <Text className="text-primary-green">Privacy Policy</Text>
        </Text>

        {/* Sign Up Button */}
        <View className="mt-6">
          <Button
            title="Create Account"
            onPress={handleSignup}
            disabled={!isValid}
            className="w-full"
          />
        </View>

        {/* Sign In Link */}
        <View className="flex-row justify-center mt-8 pb-8">
          <Text variant="body" className="text-gray-400">
            Already have an account?{' '}
          </Text>
          <Pressable onPress={() => router.push('/(auth)/login')}>
            <Text variant="body" className="text-primary-green font-semibold">
              Sign In
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
