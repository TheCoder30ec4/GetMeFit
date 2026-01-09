import { View, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // In a real app, authenticate user here
    router.replace('/(tabs)');
  };

  return (
    <View className="flex-1 bg-primary-dark">
      <ScrollView 
        className="flex-1 px-6 pt-16" 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View className="mb-10">
          <Text variant="h1" className="mb-2">Welcome Back</Text>
          <Text variant="body" className="text-gray-400">
            Sign in to continue your fitness journey
          </Text>
        </View>

        {/* Form */}
        <View className="gap-5">
          <Input
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <View>
            <Input
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Pressable 
              onPress={() => router.push('/(auth)/forgot-password')}
              className="self-end mt-2"
            >
              <Text variant="small" className="text-primary-green">
                Forgot Password?
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Login Button */}
        <View className="mt-8">
          <Button
            title="Sign In"
            onPress={handleLogin}
            className="w-full"
          />
        </View>

        {/* Divider */}
        <View className="flex-row items-center my-8">
          <View className="flex-1 h-px bg-gray-700" />
          <Text variant="small" className="text-gray-500 mx-4">or continue with</Text>
          <View className="flex-1 h-px bg-gray-700" />
        </View>

        {/* Social Logins */}
        <View className="flex-row gap-4">
          <Button
            title="Google"
            variant="outline"
            onPress={() => {}}
            className="flex-1"
          />
          <Button
            title="Apple"
            variant="outline"
            onPress={() => {}}
            className="flex-1"
          />
        </View>

        {/* Sign Up Link */}
        <View className="flex-row justify-center mt-8 pb-8">
          <Text variant="body" className="text-gray-400">
            Don't have an account?{' '}
          </Text>
          <Pressable onPress={() => router.push('/(auth)/signup')}>
            <Text variant="body" className="text-primary-green font-semibold">
              Sign Up
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
