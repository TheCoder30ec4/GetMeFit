import { View, ScrollView, Pressable } from 'react-native';
import { Text } from '@/components/ui/text';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function NutritionScreen() {
  const dailyGoal = 2000;
  const consumed = 1450;
  const remaining = dailyGoal - consumed;
  const progress = (consumed / dailyGoal) * 100;

  return (
    <View className="flex-1 bg-primary-dark">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-16 pb-6">
          <Text variant="h2">Nutrition</Text>
          <Text variant="body" className="text-gray-400">Track your daily intake</Text>
        </View>

        {/* Calorie Summary */}
        <View className="px-6 mb-6">
          <Card>
            <CardContent>
              <View className="items-center mb-4">
                <Text variant="h1" className="text-primary-green">{consumed}</Text>
                <Text variant="small" className="text-gray-400">of {dailyGoal} cal</Text>
              </View>
              
              {/* Progress Bar */}
              <View className="h-3 bg-gray-700 rounded-full overflow-hidden mb-4">
                <View 
                  className="h-full bg-primary-green rounded-full" 
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </View>

              <View className="flex-row justify-between">
                <View className="items-center">
                  <Text variant="h4" className="text-primary-green">{consumed}</Text>
                  <Text variant="tiny" className="text-gray-400">Consumed</Text>
                </View>
                <View className="items-center">
                  <Text variant="h4">{remaining}</Text>
                  <Text variant="tiny" className="text-gray-400">Remaining</Text>
                </View>
                <View className="items-center">
                  <Text variant="h4">{dailyGoal}</Text>
                  <Text variant="tiny" className="text-gray-400">Goal</Text>
                </View>
              </View>
            </CardContent>
          </Card>
        </View>

        {/* Macros */}
        <View className="px-6 mb-6">
          <Text variant="h4" className="mb-4">Macronutrients</Text>
          <View className="flex-row gap-3">
            {[
              { name: 'Protein', value: 85, goal: 120, color: 'bg-coral', unit: 'g' },
              { name: 'Carbs', value: 180, goal: 250, color: 'bg-primary-green', unit: 'g' },
              { name: 'Fats', value: 45, goal: 65, color: 'bg-orange', unit: 'g' },
            ].map((macro) => (
              <View key={macro.name} className="flex-1 bg-secondary-dark p-4 rounded-xl">
                <Text variant="small" className="text-gray-400 mb-1">{macro.name}</Text>
                <Text variant="h4">{macro.value}{macro.unit}</Text>
                <Text variant="tiny" className="text-gray-500">of {macro.goal}{macro.unit}</Text>
                <View className="h-1.5 bg-gray-700 rounded-full mt-2 overflow-hidden">
                  <View 
                    className={`h-full rounded-full ${macro.color}`}
                    style={{ width: `${Math.min((macro.value / macro.goal) * 100, 100)}%` }}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Today's Meals */}
        <View className="px-6 mb-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text variant="h4">Today's Meals</Text>
          </View>
          
          {[
            { meal: 'Breakfast', icon: '🍳', calories: 450, time: '8:00 AM' },
            { meal: 'Lunch', icon: '🥗', calories: 620, time: '12:30 PM' },
            { meal: 'Snack', icon: '🍌', calories: 180, time: '3:00 PM' },
            { meal: 'Dinner', icon: '🍽️', calories: 0, time: 'Not logged' },
          ].map((meal, index) => (
            <Pressable 
              key={index}
              className="flex-row items-center bg-secondary-dark p-4 rounded-xl mb-3"
            >
              <View className="w-12 h-12 bg-primary-dark rounded-xl items-center justify-center mr-4">
                <Text className="text-xl">{meal.icon}</Text>
              </View>
              <View className="flex-1">
                <Text variant="body" className="font-semibold">{meal.meal}</Text>
                <Text variant="small" className="text-gray-400">{meal.time}</Text>
              </View>
              <Text variant="body" className={meal.calories > 0 ? 'text-primary-green' : 'text-gray-500'}>
                {meal.calories > 0 ? `${meal.calories} cal` : 'Add'}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Add Food Button */}
        <View className="px-6 pb-8">
          <Button
            title="+ Log Food"
            onPress={() => {}}
            className="w-full"
          />
        </View>
      </ScrollView>
    </View>
  );
}
