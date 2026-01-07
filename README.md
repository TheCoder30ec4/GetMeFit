# 🏋️ GetMeFit

> An AI-powered React Native app that intelligently plans your workouts and tracks your diet to help you achieve your fitness goals.

---

## 📖 Description

**GetMeFit** is a comprehensive fitness companion that combines workout planning with diet tracking to create a holistic approach to your health journey. The app uses AI to understand your fitness goals through a conversational interface and dynamically adjusts your daily workout plans based on your progress, calorie intake, and previous performance.

### 🎯 Core Features

#### 1. **Goal-Based Onboarding**
- Interactive chat interface to understand your fitness goals
- Personalized assessment of current fitness level
- Custom workout plan generation based on your objectives (weight loss, muscle gain, endurance, etc.)

#### 2. **Smart Workout Planning**
- **Daily Automated Planning**: A cron job generates your daily workout based on:
  - Your long-term fitness goals
  - Previous workout performance
  - Calorie intake from the previous day
  - Current weight and progress
- **YouTube Video Integration**: Each exercise comes with curated YouTube video tutorials
- **Progressive Overload**: System adapts difficulty based on your improvements

#### 3. **AI-Powered Diet Tracking**
- **Photo-Based Meal Logging**: Simply snap a photo of your:
  - 🍳 Breakfast
  - 🥗 Lunch
  - 🍎 Snacks
  - 🍽️ Dinner
- **Calorie Analysis**: AI analyzes food photos and provides:
  - Estimated calorie count
  - Macronutrient breakdown (protein, carbs, fats)
  - Nutritional insights

#### 4. **Calorie-Workout Balancing**
- Tracks daily calorie intake vs. expenditure
- Adjusts next-day workout intensity based on calorie surplus/deficit
- Ensures you're burning enough to meet your goals

#### 5. **Weight Tracking**
- Log your weight after each workout
- Visual progress charts
- Trend analysis and predictions

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React Native, Expo |
| **State Management** | Redux / Zustand |
| **Backend** | Node.js / Express |
| **Database** | PostgreSQL / MongoDB |
| **AI/ML** | OpenAI API / Google Vision API |
| **Job Scheduler** | Bull Queue / node-cron |
| **Authentication** | Firebase Auth / JWT |
| **Video API** | YouTube Data API v3 |

---

## ✅ TODO List

### 📱 Frontend Tasks

#### Setup & Configuration
- [ ] Initialize React Native project with Expo
- [ ] Set up project folder structure
- [ ] Configure navigation (React Navigation)
- [ ] Set up state management (Redux/Zustand)
- [ ] Configure environment variables
- [ ] Set up theming and styling system

#### Authentication Screens
- [ ] Create splash screen
- [ ] Build login screen
- [ ] Build signup screen
- [ ] Implement forgot password screen
- [ ] Add social login buttons (Google, Apple)

#### Onboarding & Goal Setting
- [ ] Create onboarding carousel screens
- [ ] Build chat interface for goal collection
- [ ] Implement goal selection UI (weight loss, muscle gain, etc.)
- [ ] Create fitness level assessment questionnaire
- [ ] Build target weight/timeline input screens
- [ ] Design and implement progress indicators

#### Home Dashboard
- [ ] Create main dashboard layout
- [ ] Build today's workout summary card
- [ ] Add calorie intake vs. burn progress circle
- [ ] Implement weight progress chart
- [ ] Create quick action buttons
- [ ] Add motivational quotes/tips section

#### Workout Module
- [ ] Build daily workout plan screen
- [ ] Create exercise card component with video thumbnail
- [ ] Implement YouTube video player integration
- [ ] Build exercise detail modal
- [ ] Create workout timer/stopwatch
- [ ] Implement set/rep tracking UI
- [ ] Build workout completion screen
- [ ] Add rest timer between sets
- [ ] Create workout history list view
- [ ] Implement calendar view for workout schedule

#### Diet Tracking Module
- [ ] Build meal logging screen with camera integration
- [ ] Implement photo capture and gallery picker
- [ ] Create meal type selector (breakfast, lunch, snack, dinner)
- [ ] Build calorie analysis results card
- [ ] Create daily nutrition summary screen
- [ ] Implement macronutrient breakdown charts
- [ ] Build meal history/log view
- [ ] Add manual food entry option
- [ ] Create food search functionality

#### Weight Tracking
- [ ] Build weight input modal
- [ ] Create weight history chart
- [ ] Implement weight trend analysis view
- [ ] Add before/after photo comparison feature
- [ ] Build goal vs. actual progress visualization

#### Profile & Settings
- [ ] Create profile screen
- [ ] Build settings screen
- [ ] Implement notification preferences
- [ ] Add unit preferences (kg/lbs, cm/inches)
- [ ] Create account management options
- [ ] Build data export functionality

#### Notifications & Reminders
- [ ] Set up push notification service
- [ ] Implement workout reminders
- [ ] Add meal logging reminders
- [ ] Create weight check-in notifications

#### UI/UX Enhancements
- [ ] Implement skeleton loaders
- [ ] Add pull-to-refresh functionality
- [ ] Create error state screens
- [ ] Build empty state illustrations
- [ ] Implement haptic feedback
- [ ] Add micro-animations and transitions

---

### ⚙️ Backend Tasks

#### Setup & Configuration
- [ ] Initialize Node.js/Express project
- [ ] Set up project folder structure (MVC/Clean Architecture)
- [ ] Configure TypeScript
- [ ] Set up database connection (PostgreSQL/MongoDB)
- [ ] Configure environment variables
- [ ] Set up logging (Winston/Pino)
- [ ] Implement error handling middleware
- [ ] Set up API documentation (Swagger)

#### Authentication & Authorization
- [ ] Implement user registration endpoint
- [ ] Create login endpoint with JWT
- [ ] Build refresh token mechanism
- [ ] Implement password reset flow
- [ ] Add social auth (Google, Apple) integration
- [ ] Create middleware for protected routes
- [ ] Implement role-based access control

#### User Management
- [ ] Create user profile CRUD endpoints
- [ ] Build user preferences endpoint
- [ ] Implement user stats tracking
- [ ] Create user progress history endpoints

#### Goal & Onboarding Module
- [ ] Create goal submission endpoint
- [ ] Build fitness assessment processing logic
- [ ] Implement initial workout plan generation
- [ ] Store user goals and preferences

#### Workout Planning System
- [ ] Design workout/exercise database schema
- [ ] Seed exercise database with YouTube video links
- [ ] Create workout generation algorithm
- [ ] **Build cron job for daily workout planning**
  - [ ] Analyze previous day's workout completion
  - [ ] Factor in calorie intake from previous day
  - [ ] Adjust intensity based on progress
  - [ ] Generate personalized daily plan
- [ ] Implement workout plan retrieval endpoint
- [ ] Create workout logging endpoint
- [ ] Build workout completion tracking
- [ ] Implement progressive overload logic

#### YouTube Integration
- [ ] Set up YouTube Data API credentials
- [ ] Create service for fetching exercise videos
- [ ] Build video caching mechanism
- [ ] Implement video search by exercise type

#### Diet & Calorie Tracking
- [ ] **Integrate AI image recognition API** (Google Vision/OpenAI)
- [ ] Create meal photo upload endpoint
- [ ] Build food recognition and calorie estimation service
- [ ] Implement macronutrient calculation logic
- [ ] Create meal logging endpoints
- [ ] Build daily nutrition summary endpoint
- [ ] Implement calorie history tracking
- [ ] Create nutrition analytics endpoints

#### Weight Tracking
- [ ] Create weight entry endpoint
- [ ] Build weight history retrieval endpoint
- [ ] Implement weight trend calculation
- [ ] Create goal progress calculation logic

#### Calorie-Workout Balancing Engine
- [ ] Build calorie deficit/surplus calculator
- [ ] Create workout intensity adjustment algorithm
- [ ] Implement TDEE (Total Daily Energy Expenditure) calculation
- [ ] Build recommendation engine for workout adjustments

#### Notifications Service
- [ ] Set up push notification service (Firebase Cloud Messaging)
- [ ] Create notification scheduling system
- [ ] Implement reminder triggers
- [ ] Build notification preferences management

#### Analytics & Reporting
- [ ] Create user analytics endpoints
- [ ] Build progress report generation
- [ ] Implement achievement/milestone tracking
- [ ] Create weekly/monthly summary generation

#### Job Scheduling
- [ ] Set up Bull Queue / node-cron
- [ ] Implement daily workout planning cron job
- [ ] Create notification scheduling jobs
- [ ] Build analytics aggregation jobs
- [ ] Implement data cleanup jobs

#### Testing & Quality
- [ ] Write unit tests for services
- [ ] Create integration tests for APIs
- [ ] Set up CI/CD pipeline
- [ ] Implement load testing

#### Deployment
- [ ] Set up Docker containerization
- [ ] Configure cloud deployment (AWS/GCP/Azure)
- [ ] Set up database hosting
- [ ] Configure CDN for media files
- [ ] Implement monitoring and alerting

---

## 📊 Database Schema Overview

```
Users
├── id
├── email
├── password_hash
├── profile (name, age, height, gender)
├── goals (target_weight, fitness_goal, timeline)
└── preferences

Workouts
├── id
├── user_id
├── date
├── exercises[]
├── status (planned/completed)
└── performance_metrics

Exercises
├── id
├── name
├── muscle_group
├── difficulty
├── youtube_video_id
└── instructions

Meals
├── id
├── user_id
├── date
├── meal_type
├── photo_url
├── calories
├── macros (protein, carbs, fat)
└── ai_analysis

WeightLogs
├── id
├── user_id
├── date
├── weight
└── notes
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/getmefit.git

# Install frontend dependencies
cd getmefit/mobile
npm install

# Install backend dependencies
cd ../backend
npm install

# Set up environment variables
cp .env.example .env

# Start the development servers
npm run dev
```

---

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

---

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a PR.

---

<p align="center">
  <strong>Built with 💪 to help you achieve your fitness goals</strong>
</p>

