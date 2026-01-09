import { View, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function PersonalInfoScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const isValid = name.length > 0 && age.length > 0;

  const handleComplete = () => {
    // In a real app, save user data here
    router.replace('/(auth)/signup');
  };

  return (
    <View className="flex-1 bg-primary-dark">
      <ScrollView className="flex-1 px-6 pt-16" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="mb-8">
          <Text variant="small" className="text-primary-green mb-2">Step 3 of 3</Text>
          <Text variant="h2" className="mb-2">Tell us about yourself</Text>
          <Text variant="body" className="text-gray-400">
            This helps us calculate your targets
          </Text>
        </View>

        {/* Form */}
        <View className="gap-5">
          <Input
            label="Your Name"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />
          
          <Input
            label="Age"
            placeholder="Enter your age"
            value={age}
            onChangeText={setAge}
            keyboardType="number-pad"
          />
          
          <View className="flex-row gap-4">
            <View className="flex-1">
              <Input
                label="Weight (kg)"
                placeholder="70"
                value={weight}
                onChangeText={setWeight}
                keyboardType="decimal-pad"
              />
            </View>
            <View className="flex-1">
              <Input
                label="Height (cm)"
                placeholder="175"
                value={height}
                onChangeText={setHeight}
                keyboardType="decimal-pad"
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Actions */}
      <View className="px-6 pb-12 pt-4 flex-row gap-4">
        <Button
          title="Back"
          variant="outline"
          onPress={() => router.back()}
          className="flex-1"
        />
        <Button
          title="Complete"
          onPress={handleComplete}
          disabled={!isValid}
          className="flex-1"
        />
      </View>
    </View>
  );
}
