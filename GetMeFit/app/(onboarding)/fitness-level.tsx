import { View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const levels = [
  { id: 'beginner', title: 'Beginner', description: 'New to fitness or returning after a break' },
  { id: 'intermediate', title: 'Intermediate', description: 'Exercise regularly, 2-4 times per week' },
  { id: 'advanced', title: 'Advanced', description: 'Experienced, train 5+ times per week' },
];

export default function FitnessLevelScreen() {
  const router = useRouter();
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  return (
    <View className="flex-1 bg-primary-dark px-6 pt-16 pb-12">
      {/* Header */}
      <View className="mb-8">
        <Text variant="small" className="text-primary-green mb-2">Step 2 of 3</Text>
        <Text variant="h2" className="mb-2">What's your fitness level?</Text>
        <Text variant="body" className="text-gray-400">
          We'll adjust workout intensity accordingly
        </Text>
      </View>

      {/* Levels List */}
      <View className="flex-1 gap-4">
        {levels.map((level) => (
          <Pressable
            key={level.id}
            onPress={() => setSelectedLevel(level.id)}
            className={cn(
              "p-5 rounded-xl border",
              selectedLevel === level.id
                ? "bg-primary-green/10 border-primary-green"
                : "bg-secondary-dark border-gray-700"
            )}
          >
            <View className="flex-row items-center justify-between">
              <View className="flex-1">
                <Text variant="h4" className={selectedLevel === level.id ? "text-primary-green" : ""}>
                  {level.title}
                </Text>
                <Text variant="small" className="text-gray-400 mt-1">{level.description}</Text>
              </View>
              {selectedLevel === level.id && (
                <View className="w-6 h-6 bg-primary-green rounded-full items-center justify-center ml-4">
                  <Text className="text-primary-dark text-sm">✓</Text>
                </View>
              )}
            </View>
          </Pressable>
        ))}
      </View>

      {/* Bottom Actions */}
      <View className="flex-row gap-4 mt-6">
        <Button
          title="Back"
          variant="outline"
          onPress={() => router.back()}
          className="flex-1"
        />
        <Button
          title="Continue"
          onPress={() => router.push('/(onboarding)/personal-info')}
          disabled={!selectedLevel}
          className="flex-1"
        />
      </View>
    </View>
  );
}
