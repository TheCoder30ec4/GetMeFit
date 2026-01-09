import { View, ScrollView, Pressable } from 'react-native';
import { Text } from '@/components/ui/text';
import { Card, CardContent } from '@/components/ui/card';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-primary-dark">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-16 pb-6">
          <Text variant="body" className="text-gray-400">Good Morning</Text>
          <Text variant="h2">Welcome Back! 👋</Text>
        </View>

        {/* Today's Stats */}
        <View className="px-6 mb-6">
          <Card className="bg-gradient-to-r from-secondary-dark to-primary-dark">
            <CardContent>
              <Text variant="small" className="text-gray-400 mb-4">Today's Progress</Text>
              <View className="flex-row justify-between">
                <View className="items-center">
                  <Text variant="h3" className="text-primary-green">1,840</Text>
                  <Text variant="tiny" className="text-gray-400">Calories</Text>
                </View>
                <View className="items-center">
                  <Text variant="h3" className="text-primary-green">45</Text>
                  <Text variant="tiny" className="text-gray-400">Minutes</Text>
                </View>
                <View className="items-center">
                  <Text variant="h3" className="text-primary-green">8,432</Text>
                  <Text variant="tiny" className="text-gray-400">Steps</Text>
                </View>
              </View>
            </CardContent>
          </Card>
        </View>

        {/* Quick Actions */}
        <View className="px-6 mb-6">
          <Text variant="h4" className="mb-4">Quick Actions</Text>
          <View className="flex-row gap-4">
            <Pressable className="flex-1 bg-secondary-dark p-4 rounded-xl items-center">
              <Text className="text-2xl mb-2">🏋️</Text>
              <Text variant="small">Start Workout</Text>
            </Pressable>
            <Pressable className="flex-1 bg-secondary-dark p-4 rounded-xl items-center">
              <Text className="text-2xl mb-2">🍽️</Text>
              <Text variant="small">Log Meal</Text>
            </Pressable>
            <Pressable className="flex-1 bg-secondary-dark p-4 rounded-xl items-center">
              <Text className="text-2xl mb-2">⚖️</Text>
              <Text variant="small">Log Weight</Text>
            </Pressable>
          </View>
        </View>

        {/* Today's Workout */}
        <View className="px-6 mb-6">
          <Text variant="h4" className="mb-4">Today's Workout</Text>
          <Card>
            <CardContent>
              <View className="flex-row items-center">
                <View className="w-14 h-14 bg-primary-green/20 rounded-xl items-center justify-center mr-4">
                  <Text className="text-2xl">💪</Text>
                </View>
                <View className="flex-1">
                  <Text variant="h4">Upper Body Strength</Text>
                  <Text variant="small" className="text-gray-400">45 min • 12 exercises</Text>
                </View>
                <View className="bg-primary-green px-3 py-1 rounded-full">
                  <Text variant="tiny" className="text-primary-dark font-semibold">Start</Text>
                </View>
              </View>
            </CardContent>
          </Card>
        </View>

        {/* Recent Activity */}
        <View className="px-6 pb-8">
          <Text variant="h4" className="mb-4">Recent Activity</Text>
          <View className="gap-3">
            {[
              { icon: '🏃', title: 'Morning Run', subtitle: 'Yesterday • 5.2 km • 32 min' },
              { icon: '🥗', title: 'Logged Lunch', subtitle: 'Yesterday • 540 calories' },
              { icon: '💪', title: 'Leg Day', subtitle: '2 days ago • 50 min' },
            ].map((activity, index) => (
              <View key={index} className="flex-row items-center bg-secondary-dark p-4 rounded-xl">
                <View className="w-10 h-10 bg-primary-dark rounded-lg items-center justify-center mr-3">
                  <Text>{activity.icon}</Text>
                </View>
                <View>
                  <Text variant="body">{activity.title}</Text>
                  <Text variant="small" className="text-gray-400">{activity.subtitle}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
