# NBA Trivia Game - Project Documentation

## 📋 Project Overview

An AI-powered NBA trivia game built with React Native and Expo featuring adaptive difficulty, multiple choice questions, and dynamic backgrounds. Designed for 4th-6th grade students with 121 questions across three difficulty levels.

**Tech Stack:**
- React Native + Expo
- TypeScript
- Amazon Q AI (development assistance)
- Cross-platform (iOS, Android, Web)

---

## 📁 Project Structure

```
nba-trivia-game/
├── nba-trivia-game/          # Main React Native app
│   ├── app/                  # Expo Router screens
│   ├── assets/               # Images and media
│   ├── components/           # Reusable UI components
│   ├── constants/            # Theme and constants
│   ├── data/                 # Question database
│   ├── hooks/                # Custom React hooks
│   ├── types/                # TypeScript type definitions
│   ├── utils/                # Utility functions
│   └── [config files]        # App configuration
├── nbaquestions.json         # Question bank (source)
├── DEPLOYMENT-GUIDE.md       # Deployment instructions
├── PRESENTATION-GUIDE.md     # 15-min presentation guide
├── QUICK-REFERENCE.md        # Quick demo reference
└── AI-TECH-STACK-RECOMMENDATION.md
```

---

## 🗂️ Directory Breakdown

### `/nba-trivia-game/app/` - Application Screens

**Purpose:** Contains all app screens using Expo Router file-based routing

#### `app/(tabs)/` - Tab Navigation Screens
- **`index.tsx`** - Main game screen
  - Loads questions from data file
  - Manages game state (score, streak, difficulty)
  - Handles answer checking and feedback
  - Controls question progression
  - Displays dynamic backgrounds based on question type
  - Implements adaptive difficulty logic

- **`explore.tsx`** - Stats/Info screen
  - Displays game rules
  - Shows points system (5/10/15 points)
  - Explains difficulty levels
  - Lists tech stack information

- **`_layout.tsx`** - Tab navigation configuration
  - Sets up bottom tab bar
  - Defines tab icons and labels

#### `app/` Root Files
- **`_layout.tsx`** - Root layout wrapper
  - Configures app-wide navigation
  - Sets up theme provider

- **`modal.tsx`** - Modal screen template
  - Example modal implementation

---

### `/nba-trivia-game/assets/` - Media Assets

**Purpose:** Stores all images, icons, and media files

#### `assets/images/`
- **`spash.jpg`** - Splash screen logo (tap to start)
- **`Tyler Image.png`** - Alternative splash image
- **`Baseballfield.jpg`** - Background for baseball question
- **`IndoorCourt.jpg`** - Background for indoor court questions
- **`OutdoorCourt.jpg`** - Background for outdoor court questions
- **`icon.png`** - App icon
- **`splash-icon.png`** - Splash screen icon
- **`favicon.png`** - Web favicon
- **`android-icon-*.png`** - Android adaptive icons
- **`react-logo*.png`** - React logo assets

---

### `/nba-trivia-game/components/` - UI Components

**Purpose:** Reusable React components for game interface

#### `components/game/` - Game-Specific Components

- **`SplashScreen.tsx`** - Initial splash screen
  - Displays logo (spash.jpg)
  - "Tap to Start" button
  - Transitions to game

- **`GameOverScreen.tsx`** - End game screen
  - Shows final score
  - Displays percentage correct
  - Shows congratulations image
  - "Play Again" button

- **`QuestionCard.tsx`** - Question display component
  - Shows question text
  - Displays question number (e.g., "Question 3 of 10")
  - Shows difficulty level with emoji (🟢🟠🔴)
  - Difficulty description

- **`MultipleChoiceButtons.tsx`** - Answer buttons
  - Displays 4 answer options
  - Handles button selection
  - Highlights selected answer
  - Disables after answer submitted

- **`ScoreDisplay.tsx`** - Score and stats display
  - Current score
  - Difficulty badge with color
  - Streak counter with fire emoji
  - Total questions remaining

- **`AnswerInput.tsx`** - Text input (deprecated)
  - Original text-based answer input
  - Replaced by MultipleChoiceButtons

#### `components/ui/` - UI Utilities
- **`collapsible.tsx`** - Collapsible component
- **`icon-symbol.tsx`** - Icon symbol component

#### `components/` Root Components
- **`themed-text.tsx`** - Themed text component
- **`themed-view.tsx`** - Themed view component
- **`parallax-scroll-view.tsx`** - Parallax scrolling
- **`hello-wave.tsx`** - Animated wave component
- **`haptic-tab.tsx`** - Haptic feedback tabs
- **`external-link.tsx`** - External link component

---

### `/nba-trivia-game/types/` - TypeScript Types

**Purpose:** Type definitions for type-safe development

- **`game.ts`** - Core game types
  ```typescript
  interface Question {
    q: string;              // Question text
    a: string;              // Correct answer
    options?: string[];     // Multiple choice options
    difficulty?: 'easy' | 'medium' | 'hard';
    background?: 'baseball' | 'indoor' | 'outdoor';
  }

  interface GameState {
    currentQuestionIndex: number;
    score: number;
    totalQuestions: number;
    correctStreak: number;
    incorrectStreak: number;
    answeredQuestions: number[];
    difficulty: 'easy' | 'medium' | 'hard';
  }

  interface QuestionData {
    questions: Question[];
  }
  ```

---

### `/nba-trivia-game/utils/` - Utility Functions

**Purpose:** Helper functions and game logic

- **`questionLoader.ts`** - Question management
  - Loads questions from local JSON file
  - Shuffles answer options randomly
  - Shuffles question order
  - Provides fallback questions if load fails
  - Methods:
    - `loadQuestions()` - Loads from data/questions.json
    - `getFallbackQuestions()` - Backup question set
    - `shuffleQuestions()` - Randomizes question order
    - `shuffleArray()` - Generic array shuffler

- **`difficultyEngine.ts`** - Adaptive difficulty logic
  - Adjusts difficulty based on performance
  - Rules:
    - 3 correct in a row → Increase difficulty
    - 1 incorrect on medium/hard → Decrease difficulty
  - Methods:
    - `adjustDifficulty()` - Returns new difficulty level
    - `getDifficultyColor()` - Returns color for difficulty
    - `getDifficultyLabel()` - Returns formatted label

---

### `/nba-trivia-game/data/` - Game Data

**Purpose:** Question database and game content

- **`questions.json`** - Complete question bank
  - 121 total questions
  - 21 Easy questions (basic NBA knowledge)
  - 50 Medium questions (intermediate facts)
  - 50 Hard questions (expert trivia)
  - Each question includes:
    - Question text
    - Correct answer
    - 4 multiple choice options
    - Difficulty level
    - Background type (baseball/indoor/outdoor)

---

### `/nba-trivia-game/constants/` - App Constants

**Purpose:** Theme and configuration constants

- **`theme.ts`** - Color theme definitions
  - Light/dark mode colors
  - Brand colors
  - Typography settings

---

### `/nba-trivia-game/hooks/` - Custom Hooks

**Purpose:** Reusable React hooks

- **`use-color-scheme.ts`** - Color scheme detection
- **`use-color-scheme.web.ts`** - Web-specific color scheme
- **`use-theme-color.ts`** - Theme color hook

---

### `/nba-trivia-game/scripts/` - Build Scripts

**Purpose:** Project automation scripts

- **`reset-project.js`** - Resets project to clean state

---

## 📄 Configuration Files

### Root Configuration

- **`package.json`** - Dependencies and scripts
  - Dependencies: React Native, Expo, TypeScript
  - Scripts: start, android, ios, web, lint
  - Version: 1.0.0

- **`app.json`** - Expo configuration
  - App name: "nba-trivia-game"
  - Platform settings (iOS, Android, Web)
  - Icon and splash screen config
  - Orientation: portrait
  - Plugins: expo-router, expo-splash-screen

- **`tsconfig.json`** - TypeScript configuration
  - Compiler options
  - Path aliases (@/ for root)
  - Type checking rules

- **`eslint.config.js`** - ESLint configuration
  - Code style rules
  - Expo-specific linting

- **`.gitignore`** - Git ignore rules
  - node_modules/
  - .expo/
  - dist/
  - Build artifacts

---

## 🎮 Game Flow

### 1. App Launch
```
SplashScreen (spash.jpg)
  ↓ (Tap to Start)
Main Game Screen
```

### 2. Question Loading
```
questionLoader.loadQuestions()
  ↓
Separate by difficulty (easy/medium/hard)
  ↓
Shuffle each group
  ↓
Select 3 easy + 3 medium + 4 hard = 10 questions
  ↓
Shuffle answer options for each question
```

### 3. Game Loop
```
Display QuestionCard
  ↓
Show MultipleChoiceButtons
  ↓
User selects answer
  ↓
Check answer (correct/incorrect)
  ↓
Award points (5/10/15 based on difficulty)
  ↓
Update streak and difficulty
  ↓
Show feedback (2 seconds)
  ↓
Next question or Game Over
```

### 4. Scoring System
- Easy questions: 5 points 🟢
- Medium questions: 10 points 🟠
- Hard questions: 15 points 🔴
- Maximum score: 105 points

### 5. Adaptive Difficulty
- 3 correct in a row → Difficulty increases
- 1 incorrect on medium/hard → Difficulty decreases
- Tracks correct/incorrect streaks

### 6. Game Over
```
GameOverScreen
  ↓
Show final score
  ↓
Calculate percentage (score / 105)
  ↓
Display congratulations image
  ↓
"Play Again" button → Reset game
```

---

## 🎨 Visual Features

### Dynamic Backgrounds
- **Baseball question** → Baseballfield.jpg
- **Indoor court questions** → IndoorCourt.jpg
- **Outdoor court questions** → OutdoorCourt.jpg
- Background opacity: 30% for readability
- Resize mode: contain

### Difficulty Indicators
- 🟢 Easy - Basic NBA knowledge
- 🟠 Medium - Intermediate facts
- 🔴 Hard - Expert-level trivia

### Feedback System
- ✅ Correct: Green background, "+X points!"
- ❌ Incorrect: Red background, shows correct answer
- Display duration: 2 seconds

---

## 🔧 Key Features

### 1. Adaptive Difficulty
- Automatically adjusts based on performance
- Implemented in `difficultyEngine.ts`
- Tracks streaks in game state

### 2. Multiple Choice
- 4 options per question
- Options shuffled randomly
- Correct answer position varies

### 3. Question Randomization
- 121 question bank
- Random selection each game
- Different questions every playthrough

### 4. Cross-Platform
- iOS (via Expo Go or build)
- Android (via Expo Go or APK)
- Web (via Expo web export)

### 5. Professional UI
- Themed components
- Smooth animations
- Responsive design
- Dark/light mode support

---

## 📊 Data Flow

```
questions.json (121 questions)
  ↓
questionLoader.loadQuestions()
  ↓
Filter by difficulty
  ↓
Shuffle each group
  ↓
Select 10 questions (3+3+4)
  ↓
Shuffle answer options
  ↓
Store in game state
  ↓
Display one at a time
  ↓
Check answers
  ↓
Update score and difficulty
  ↓
Show game over screen
```

---

## 🚀 Development Commands

```bash
# Start development server
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run in web browser
npm run web

# Lint code
npm run lint

# Reset project
npm run reset-project
```

---

## 📝 File Naming Conventions

- **Screens:** `kebab-case.tsx` (e.g., `game-over-screen.tsx`)
- **Components:** `PascalCase.tsx` (e.g., `QuestionCard.tsx`)
- **Utilities:** `camelCase.ts` (e.g., `questionLoader.ts`)
- **Types:** `camelCase.ts` (e.g., `game.ts`)
- **Images:** `PascalCase.jpg/png` (e.g., `IndoorCourt.jpg`)

---

## 🎯 Key Design Decisions

### Why React Native + Expo?
- Cross-platform development
- Fast iteration with hot reload
- Easy deployment options
- Professional framework

### Why TypeScript?
- Type safety prevents bugs
- Better IDE support
- Self-documenting code
- Easier refactoring

### Why Adaptive Difficulty?
- Keeps game challenging
- Prevents frustration
- Demonstrates algorithmic thinking
- Makes game more engaging

### Why Multiple Choice?
- Easier for young players
- Faster gameplay
- Better mobile UX
- Reduces typing errors

### Why 10 Questions?
- Optimal game length (5-7 minutes)
- Maintains engagement
- Easy to complete in one session
- Good for presentations

---

## 🔍 Important Notes

### Question Bank Location
- **Source:** `/nbaquestions.json` (root)
- **Used by app:** `/nba-trivia-game/data/questions.json`
- Keep both in sync when updating questions

### Image Requirements
- Backgrounds: JPG format, optimized for mobile
- Icons: PNG format with transparency
- Splash: High resolution for various screen sizes

### State Management
- Uses React hooks (useState, useEffect)
- No external state library needed
- Game state stored in component

### Performance
- Questions loaded once at start
- Images cached by React Native
- Minimal re-renders with proper state management

---

## 📚 Documentation Files

- **`DEPLOYMENT-GUIDE.md`** - How to deploy and share the game
- **`PRESENTATION-GUIDE.md`** - 15-minute presentation structure
- **`QUICK-REFERENCE.md`** - One-page demo cheat sheet
- **`AI-TECH-STACK-RECOMMENDATION.md`** - Tech stack explanation
- **`PROJECT-DOCUMENTATION.md`** - This file

---

## 🎓 Learning Outcomes

This project demonstrates:
- Mobile app development
- TypeScript programming
- Algorithm design (adaptive difficulty)
- UI/UX design
- State management
- API integration concepts
- Cross-platform development
- AI-assisted coding
- Version control (Git)
- Professional development practices

---

**Built with React Native, Expo, TypeScript, and Amazon Q Developer** 🏀🎮
