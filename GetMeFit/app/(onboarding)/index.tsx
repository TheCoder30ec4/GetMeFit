import { View, ScrollView, KeyboardAvoidingView, Platform, TextInput, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useRef, useEffect } from 'react';
import { Text } from '@/components/ui/text';
import { ChatBubble, TypingIndicator } from '@/components/ui/chat-bubble';
import { Button } from '@/components/ui/button';

type Message = {
  id: string;
  text: string;
  isBot: boolean;
};

type ConversationStep = 
  | 'welcome'
  | 'ask-name'
  | 'ask-goals'
  | 'ask-challenges'
  | 'ask-experience'
  | 'ask-availability'
  | 'summary'
  | 'complete';

const botResponses: Record<string, string[]> = {
  welcome: [
    "Hey there! 👋",
    "I'm your GetMeFit assistant, and I'm here to help you on your fitness journey.",
  ],
  'ask-name': [
    "First things first - what's your name?"
  ],
  'ask-goals': [
    "Nice to meet you, {name}! 💪",
    "Tell me, what are you hoping to achieve with GetMeFit? What's your fitness dream or goal?",
    "Feel free to describe it in your own words - there's no right or wrong answer!"
  ],
  'ask-challenges': [
    "That's a great goal! 🎯",
    "What's been the biggest challenge or obstacle stopping you from achieving this so far?"
  ],
  'ask-experience': [
    "I totally understand. Many people face similar challenges.",
    "How would you describe your current fitness routine? Are you completely new to working out, or do you have some experience?"
  ],
  'ask-availability': [
    "Got it! That helps me understand where you're starting from.",
    "Last question - how much time can you realistically dedicate to fitness each week? Be honest, we'll work with whatever you've got! ⏰"
  ],
  'summary': [
    "Amazing, {name}! Here's what I learned about you:",
    "🎯 Your goal: {goals}",
    "💪 Your challenge: {challenges}",
    "📊 Your experience: {experience}",
    "⏰ Your availability: {availability}",
    "I'll create a personalized plan just for you!"
  ],
  'complete': [
    "You're all set! 🎉",
    "I've got everything I need to help you succeed. Let's make it happen!"
  ]
};

export default function OnboardingChat() {
  const router = useRouter();
  const scrollViewRef = useRef<ScrollView>(null);
  const inputRef = useRef<TextInput>(null);
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<ConversationStep>('welcome');
  const [isTyping, setIsTyping] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [canType, setCanType] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    goals: '',
    challenges: '',
    experience: '',
    availability: '',
  });

  // Get bot messages for current step with variable replacement
  const getBotMessages = (step: ConversationStep): string[] => {
    let messages = botResponses[step] || [];
    return messages.map(msg => {
      return msg
        .replace('{name}', userData.name)
        .replace('{goals}', userData.goals)
        .replace('{challenges}', userData.challenges)
        .replace('{experience}', userData.experience)
        .replace('{availability}', userData.availability);
    });
  };

  // Send bot messages with typing delay
  const sendBotMessages = (step: ConversationStep) => {
    setCanType(false);
    setIsTyping(true);
    
    const botMsgs = getBotMessages(step);
    let delay = 500;

    botMsgs.forEach((msg, index) => {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: `${step}-bot-${index}-${Date.now()}`,
          text: msg,
          isBot: true,
        }]);
        
        if (index === botMsgs.length - 1) {
          setTimeout(() => {
            setIsTyping(false);
            if (step !== 'complete') {
              setCanType(true);
              inputRef.current?.focus();
            }
          }, 300);
        }
      }, delay);
      delay += 1000 + msg.length * 15; // Longer messages take more time
    });
  };

  // Initial welcome messages
  useEffect(() => {
    sendBotMessages('welcome');
    setTimeout(() => {
      setCurrentStep('ask-name');
      sendBotMessages('ask-name');
    }, 2500);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!textInput.trim() || !canType) return;

    const userMessage = textInput.trim();
    
    // Add user message
    setMessages(prev => [...prev, {
      id: `user-${Date.now()}`,
      text: userMessage,
      isBot: false,
    }]);
    
    setTextInput('');
    setCanType(false);

    // Process based on current step
    setTimeout(() => {
      switch (currentStep) {
        case 'ask-name':
          setUserData(prev => ({ ...prev, name: userMessage }));
          setCurrentStep('ask-goals');
          // Need to update userData first, then send messages
          setTimeout(() => {
            const msgs = botResponses['ask-goals'].map(m => 
              m.replace('{name}', userMessage)
            );
            setIsTyping(true);
            let delay = 500;
            msgs.forEach((msg, index) => {
              setTimeout(() => {
                setMessages(prev => [...prev, {
                  id: `ask-goals-bot-${index}-${Date.now()}`,
                  text: msg,
                  isBot: true,
                }]);
                if (index === msgs.length - 1) {
                  setTimeout(() => {
                    setIsTyping(false);
                    setCanType(true);
                    inputRef.current?.focus();
                  }, 300);
                }
              }, delay);
              delay += 1000 + msg.length * 15;
            });
          }, 500);
          break;

        case 'ask-goals':
          setUserData(prev => ({ ...prev, goals: userMessage }));
          setCurrentStep('ask-challenges');
          sendBotMessages('ask-challenges');
          break;

        case 'ask-challenges':
          setUserData(prev => ({ ...prev, challenges: userMessage }));
          setCurrentStep('ask-experience');
          sendBotMessages('ask-experience');
          break;

        case 'ask-experience':
          setUserData(prev => ({ ...prev, experience: userMessage }));
          setCurrentStep('ask-availability');
          sendBotMessages('ask-availability');
          break;

        case 'ask-availability':
          const newUserData = { ...userData, availability: userMessage };
          setUserData(newUserData);
          setCurrentStep('summary');
          
          // Send summary with all data
          setTimeout(() => {
            setIsTyping(true);
            const summaryMsgs = botResponses['summary'].map(m => 
              m.replace('{name}', newUserData.name)
               .replace('{goals}', newUserData.goals)
               .replace('{challenges}', newUserData.challenges)
               .replace('{experience}', newUserData.experience)
               .replace('{availability}', userMessage)
            );
            
            let delay = 500;
            summaryMsgs.forEach((msg, index) => {
              setTimeout(() => {
                setMessages(prev => [...prev, {
                  id: `summary-bot-${index}-${Date.now()}`,
                  text: msg,
                  isBot: true,
                }]);
                if (index === summaryMsgs.length - 1) {
                  setTimeout(() => {
                    setIsTyping(false);
                    setCurrentStep('complete');
                    sendBotMessages('complete');
                  }, 800);
                }
              }, delay);
              delay += 800;
            });
          }, 500);
          break;
      }
    }, 500);
  };

  const handleGetStarted = () => {
    router.replace('/(tabs)');
  };

  const getPlaceholder = () => {
    switch (currentStep) {
      case 'ask-name':
        return "Type your name...";
      case 'ask-goals':
        return "Describe your fitness goals...";
      case 'ask-challenges':
        return "What's been holding you back...";
      case 'ask-experience':
        return "Tell me about your experience...";
      case 'ask-availability':
        return "How much time do you have...";
      default:
        return "Type a message...";
    }
  };

  return (
    <KeyboardAvoidingView 
      className="flex-1 bg-primary-dark"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Header */}
      <View className="px-6 pt-16 pb-4 border-b border-gray-700">
        <View className="flex-row items-center">
          <View className="w-12 h-12 bg-primary-green rounded-full items-center justify-center mr-3">
            <Text className="text-primary-dark font-bold text-lg">G</Text>
          </View>
          <View>
            <Text variant="h4">GetMeFit Assistant</Text>
            <View className="flex-row items-center">
              <View className="w-2 h-2 bg-primary-green rounded-full mr-2" />
              <Text variant="tiny" className="text-gray-400">Always here to help</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Chat Messages */}
      <ScrollView 
        ref={scrollViewRef}
        className="flex-1 px-4 pt-4"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {messages.map((message) => (
          <ChatBubble
            key={message.id}
            message={message.text}
            isBot={message.isBot}
          />
        ))}
        
        {isTyping && <TypingIndicator />}

        {/* Get Started Button */}
        {currentStep === 'complete' && !isTyping && (
          <View className="mt-6 mb-4">
            <Button
              title="Start My Journey 🚀"
              onPress={handleGetStarted}
              className="w-full"
            />
            <Pressable 
              onPress={() => router.push('/(auth)/login')}
              className="mt-4"
            >
              <Text variant="small" className="text-center text-gray-400">
                Already have an account? <Text className="text-primary-green">Sign in</Text>
              </Text>
            </Pressable>
          </View>
        )}

        <View className="h-4" />
      </ScrollView>

      {/* Text Input */}
      {currentStep !== 'complete' && (
        <View className="px-4 pb-8 pt-4 border-t border-gray-700">
          <View className="flex-row items-center bg-secondary-dark rounded-2xl">
            <TextInput
              ref={inputRef}
              className="flex-1 px-5 py-4 text-white text-base"
              placeholder={getPlaceholder()}
              placeholderTextColor="#6B7280"
              value={textInput}
              onChangeText={setTextInput}
              onSubmitEditing={handleSend}
              returnKeyType="send"
              editable={canType}
              multiline
              maxLength={500}
              style={{ maxHeight: 100 }}
            />
            <Pressable 
              onPress={handleSend}
              disabled={!canType || !textInput.trim()}
              className="px-4 py-3"
            >
              <View className={`w-10 h-10 rounded-full items-center justify-center ${
                canType && textInput.trim() ? 'bg-primary-green' : 'bg-gray-700'
              }`}>
                <Text className={canType && textInput.trim() ? 'text-primary-dark text-lg' : 'text-gray-500 text-lg'}>
                  ↑
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}
