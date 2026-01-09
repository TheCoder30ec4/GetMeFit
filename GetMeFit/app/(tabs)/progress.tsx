import { View, ScrollView, Pressable } from 'react-native';
import { useState } from 'react';
import { Text } from '@/components/ui/text';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const timeFilters = ['Week', 'Month', '3 Months', 'Year'];

export default function ProgressScreen() {
  const [selectedFilter, setSelectedFilter] = useState('Week');

  return (
    <View className="flex-1 bg-primary-dark">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-16 pb-6">
          <Text variant="h2">Progress</Text>
          <Text variant="body" className="text-gray-400">Track your fitness journey</Text>
        </View>

        {/* Time Filter */}
        <View className="px-6 mb-6">
          <View className="flex-row bg-secondary-dark rounded-xl p-1">
            {timeFilters.map((filter) => (
              <Pressable
                key={filter}
                onPress={() => setSelectedFilter(filter)}
                className={cn(
                  "flex-1 py-2 rounded-lg",
                  selectedFilter === filter && "bg-primary-green"
                )}
              >
                <Text 
                  variant="small" 
                  className={cn(
                    "text-center font-medium",
                    selectedFilter === filter ? "text-primary-dark" : "text-gray-400"
                  )}
                >
                  {filter}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Weight Progress */}
        <View className="px-6 mb-6">
          <Text variant="h4" className="mb-4">Weight</Text>
          <Card>
            <CardContent>
              <View className="flex-row justify-between items-center mb-4">
                <View>
                  <Text variant="h2" className="text-primary-green">72.5 kg</Text>
                  <Text variant="small" className="text-gray-400">Current</Text>
                </View>
                <View className="items-end">
                  <Text variant="h4" className="text-primary-green">-2.5 kg</Text>
                  <Text variant="small" className="text-gray-400">This {selectedFilter.toLowerCase()}</Text>
                </View>
              </View>
              
              {/* Simple Chart Placeholder */}
              <View className="h-32 bg-primary-dark rounded-lg items-center justify-center">
                <Text variant="small" className="text-gray-500">📈 Weight chart</Text>
              </View>
            </CardContent>
          </Card>
        </View>

        {/* Stats Overview */}
        <View className="px-6 mb-6">
          <Text variant="h4" className="mb-4">This {selectedFilter}</Text>
          <View className="flex-row gap-3 mb-3">
            <View className="flex-1 bg-secondary-dark p-4 rounded-xl">
              <Text className="text-2xl mb-1">🏋️</Text>
              <Text variant="h3">12</Text>
              <Text variant="tiny" className="text-gray-400">Workouts</Text>
            </View>
            <View className="flex-1 bg-secondary-dark p-4 rounded-xl">
              <Text className="text-2xl mb-1">⏱️</Text>
              <Text variant="h3">8.5h</Text>
              <Text variant="tiny" className="text-gray-400">Active Time</Text>
            </View>
          </View>
          <View className="flex-row gap-3">
            <View className="flex-1 bg-secondary-dark p-4 rounded-xl">
              <Text className="text-2xl mb-1">🔥</Text>
              <Text variant="h3">12,450</Text>
              <Text variant="tiny" className="text-gray-400">Calories Burned</Text>
            </View>
            <View className="flex-1 bg-secondary-dark p-4 rounded-xl">
              <Text className="text-2xl mb-1">👣</Text>
              <Text variant="h3">58,200</Text>
              <Text variant="tiny" className="text-gray-400">Steps</Text>
            </View>
          </View>
        </View>

        {/* Personal Records */}
        <View className="px-6 pb-8">
          <Text variant="h4" className="mb-4">Personal Records</Text>
          <View className="gap-3">
            {[
              { exercise: 'Bench Press', record: '80 kg', date: 'Jan 5, 2026' },
              { exercise: 'Squat', record: '100 kg', date: 'Jan 3, 2026' },
              { exercise: 'Deadlift', record: '120 kg', date: 'Dec 28, 2025' },
            ].map((pr, index) => (
              <View key={index} className="flex-row items-center bg-secondary-dark p-4 rounded-xl">
                <View className="w-10 h-10 bg-primary-green/20 rounded-lg items-center justify-center mr-3">
                  <Text>🏆</Text>
                </View>
                <View className="flex-1">
                  <Text variant="body" className="font-semibold">{pr.exercise}</Text>
                  <Text variant="small" className="text-gray-400">{pr.date}</Text>
                </View>
                <Text variant="h4" className="text-primary-green">{pr.record}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
