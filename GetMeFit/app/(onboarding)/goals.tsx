import { View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const goals = [
  { id: 'lose-weight', title: 'Lose Weight', icon: '🔥', description: 'Burn fat and get lean' },
  { id: 'build-muscle', title: 'Build Muscle', icon: '💪', description: 'Gain strength and size' },
  { id: 'stay-fit', title: 'Stay Fit', icon: '🏃', description: 'Maintain overall health' },
  { id: 'improve-endurance', title: 'Improve Endurance', icon: '❤️', description: 'Boost stamina and cardio' },
];

export default function GoalsScreen() {
  const router = useRouter();
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  return (
    <View className="flex-1 bg-primary-dark px-6 pt-16 pb-12">
      {/* Header */}
      <View className="mb-8">
        <Text variant="small" className="text-primary-green mb-2">Step 1 of 3</Text>
        <Text variant="h2" className="mb-2">What's your main goal?</Text>
        <Text variant="body" className="text-gray-400">
          This helps us personalize your experience
        </Text>
      </View>

      {/* Goals Grid */}
      <View className="flex-1 gap-4">
        {goals.map((goal) => (
          <Pressable
            key={goal.id}
            onPress={() => setSelectedGoal(goal.id)}
            className={cn(
              "flex-row items-center p-5 rounded-xl border",
              selectedGoal === goal.id
                ? "bg-primary-green/10 border-primary-green"
                : "bg-secondary-dark border-gray-700"
            )}
          >
            <View className="w-12 h-12 bg-primary-dark rounded-xl items-center justify-center mr-4">
              <Text className="text-2xl">{goal.icon}</Text>
            </View>
            <View className="flex-1">
              <Text variant="h4" className={selectedGoal === goal.id ? "text-primary-green" : ""}>
                {goal.title}
              </Text>
              <Text variant="small" className="text-gray-400">{goal.description}</Text>
            </View>
            {selectedGoal === goal.id && (
              <View className="w-6 h-6 bg-primary-green rounded-full items-center justify-center">
                <Text className="text-primary-dark text-sm">✓</Text>
              </View>
            )}
          </Pressable>
        ))}
      </View>

      {/* Bottom Actions */}
      <View className="gap-4 mt-6">
        <Button
          title="Continue"
          onPress={() => router.push('/(onboarding)/fitness-level')}
          disabled={!selectedGoal}
          className="w-full"
        />
      </View>
    </View>
  );
}
