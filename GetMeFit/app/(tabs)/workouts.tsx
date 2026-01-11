import { View, ScrollView, Pressable } from 'react-native';
import { Text } from '@/components/ui/text';
import { Card, CardContent } from '@/components/ui/card';

const workoutCategories = [
  { id: 'strength', title: 'Strength', icon: '🏋️', count: 12 },
  { id: 'cardio', title: 'Cardio', icon: '🏃', count: 8 },
  { id: 'flexibility', title: 'Flexibility', icon: '🧘', count: 6 },
  { id: 'hiit', title: 'HIIT', icon: '⚡', count: 5 },
];

const featuredWorkouts = [
  { title: 'Full Body Burn', duration: '45 min', level: 'Intermediate', icon: '🔥' },
  { title: 'Core Crusher', duration: '20 min', level: 'Beginner', icon: '💪' },
  { title: '5K Training', duration: '30 min', level: 'All Levels', icon: '🏃' },
];

export default function WorkoutsScreen() {
  return (
    <View className="flex-1 bg-primary-dark">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-16 pb-6">
          <Text variant="h2">Workouts</Text>
          <Text variant="body" className="text-gray-400">Find your perfect workout</Text>
        </View>

        {/* Categories */}
        <View className="px-6 mb-6">
          <Text variant="h4" className="mb-4">Categories</Text>
          <View className="flex-row flex-wrap gap-3">
            {workoutCategories.map((category) => (
              <Pressable 
                key={category.id}
                className="bg-secondary-dark p-4 rounded-xl items-center"
                style={{ width: '47%' }}
              >
                <Text className="text-3xl mb-2">{category.icon}</Text>
                <Text variant="body" className="font-semibold">{category.title}</Text>
                <Text variant="tiny" className="text-gray-400">{category.count} workouts</Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Featured Workouts */}
        <View className="px-6 mb-6">
          <Text variant="h4" className="mb-4">Featured Workouts</Text>
          <View className="gap-3">
            {featuredWorkouts.map((workout, index) => (
              <Card key={index}>
                <CardContent>
                  <View className="flex-row items-center">
                    <View className="w-14 h-14 bg-primary-green/20 rounded-xl items-center justify-center mr-4">
                      <Text className="text-2xl">{workout.icon}</Text>
                    </View>
                    <View className="flex-1">
                      <Text variant="h4">{workout.title}</Text>
                      <Text variant="small" className="text-gray-400">
                        {workout.duration} • {workout.level}
                      </Text>
                    </View>
                    <Pressable className="bg-primary-green/20 px-4 py-2 rounded-lg">
                      <Text variant="small" className="text-primary-green font-semibold">View</Text>
                    </Pressable>
                  </View>
                </CardContent>
              </Card>
            ))}
          </View>
        </View>

        {/* My Workouts */}
        <View className="px-6 pb-8">
          <View className="flex-row justify-between items-center mb-4">
            <Text variant="h4">My Workouts</Text>
            <Pressable>
              <Text variant="small" className="text-primary-green">Create New</Text>
            </Pressable>
          </View>
          <View className="bg-secondary-dark p-6 rounded-xl items-center">
            <Text className="text-4xl mb-3">➕</Text>
            <Text variant="body" className="text-gray-400 text-center">
              Create your own custom workout routine
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
