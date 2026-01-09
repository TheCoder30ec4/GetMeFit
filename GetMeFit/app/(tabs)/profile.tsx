import { View, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';

const menuItems = [
  { icon: '👤', title: 'Edit Profile', subtitle: 'Update your personal information' },
  { icon: '🎯', title: 'Goals', subtitle: 'Adjust your fitness goals' },
  { icon: '📊', title: 'Units', subtitle: 'Metric / Imperial' },
  { icon: '🔔', title: 'Notifications', subtitle: 'Manage your alerts' },
  { icon: '🔒', title: 'Privacy', subtitle: 'Control your data' },
  { icon: '❓', title: 'Help & Support', subtitle: 'FAQs and contact us' },
];

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    // In a real app, clear auth state here
    router.replace('/(auth)/login');
  };

  return (
    <View className="flex-1 bg-primary-dark">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-6 pt-16 pb-6">
          <Text variant="h2">Profile</Text>
        </View>

        {/* Profile Card */}
        <View className="px-6 mb-6">
          <View className="bg-secondary-dark p-6 rounded-xl items-center">
            <View className="w-24 h-24 bg-coral rounded-full items-center justify-center mb-4">
              <Text variant="h1">JD</Text>
            </View>
            <Text variant="h3">John Doe</Text>
            <Text variant="body" className="text-gray-400">john.doe@email.com</Text>
            
            <View className="flex-row mt-6 gap-8">
              <View className="items-center">
                <Text variant="h3" className="text-primary-green">72.5</Text>
                <Text variant="tiny" className="text-gray-400">Weight (kg)</Text>
              </View>
              <View className="items-center">
                <Text variant="h3" className="text-primary-green">175</Text>
                <Text variant="tiny" className="text-gray-400">Height (cm)</Text>
              </View>
              <View className="items-center">
                <Text variant="h3" className="text-primary-green">28</Text>
                <Text variant="tiny" className="text-gray-400">Age</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Stats */}
        <View className="px-6 mb-6">
          <View className="flex-row gap-3">
            <View className="flex-1 bg-secondary-dark p-4 rounded-xl items-center">
              <Text variant="h2" className="text-primary-green">156</Text>
              <Text variant="small" className="text-gray-400">Workouts</Text>
            </View>
            <View className="flex-1 bg-secondary-dark p-4 rounded-xl items-center">
              <Text variant="h2" className="text-primary-green">42</Text>
              <Text variant="small" className="text-gray-400">Day Streak</Text>
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View className="px-6 mb-6">
          <Text variant="h4" className="mb-4">Settings</Text>
          <View className="gap-2">
            {menuItems.map((item, index) => (
              <Pressable 
                key={index}
                className="flex-row items-center bg-secondary-dark p-4 rounded-xl"
              >
                <View className="w-10 h-10 bg-primary-dark rounded-lg items-center justify-center mr-3">
                  <Text>{item.icon}</Text>
                </View>
                <View className="flex-1">
                  <Text variant="body">{item.title}</Text>
                  <Text variant="small" className="text-gray-400">{item.subtitle}</Text>
                </View>
                <Text className="text-gray-500">›</Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Logout Button */}
        <View className="px-6 pb-8">
          <Button
            title="Log Out"
            variant="outline"
            onPress={handleLogout}
            className="w-full"
          />
          <Text variant="tiny" className="text-gray-500 text-center mt-4">
            GetMeFit v1.0.0
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
