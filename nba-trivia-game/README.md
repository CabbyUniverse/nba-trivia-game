# 🏀 AI-Powered NBA Trivia Game

A professional React Native mobile app with adaptive difficulty, built for 4th-6th grade students.

## ✨ Features

- **Adaptive Difficulty** - Questions get harder/easier based on performance
- **Real-time Feedback** - Instant answer validation
- **Streak Tracking** - Motivational streak counter
- **Cross-Platform** - Works on iOS, Android, and Web
- **Professional UI** - Modern, clean interface
- **AI-Assisted Development** - Built with Amazon Q Developer

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Run the App
```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web

# Development server
npm start
```

## 🎮 How to Play

1. Read the NBA trivia question
2. Type your answer
3. Submit to check if you're correct
4. Get 3 correct in a row to increase difficulty
5. Get 2 wrong in a row to decrease difficulty
6. Try to get the highest score!

## 🧠 Adaptive Difficulty Algorithm

The game uses a smart algorithm to adjust difficulty:

```typescript
- 3 correct in a row → Difficulty increases
- 2 incorrect in a row → Difficulty decreases
- Tracks streak for motivation
- Adjusts in real-time
```

## 📱 Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform
- **TypeScript** - Type-safe code
- **Amazon Q** - AI coding assistant
- **GitHub** - Version control & hosting

## 📂 Project Structure

```
nba-trivia-game/
├── app/
│   └── (tabs)/
│       ├── index.tsx          # Main game screen
│       └── explore.tsx        # Stats/info screen
├── components/
│   └── game/
│       ├── QuestionCard.tsx   # Question display
│       ├── AnswerInput.tsx    # Answer input
│       └── ScoreDisplay.tsx   # Score & difficulty
├── utils/
│   ├── questionLoader.ts      # Load questions
│   └── difficultyEngine.ts    # Adaptive difficulty
├── types/
│   └── game.ts                # TypeScript types
└── data/
    └── questions.json         # NBA trivia questions
```

## 🎤 Presentation Talking Points

### "What did you build?"
> "I built an AI-powered NBA trivia game with adaptive difficulty that adjusts based on player performance. It's designed for 4th-6th grade students and works on iOS, Android, and web."

### "What technology did you use?"
> "I used React Native with Expo, which is a professional mobile development framework used by companies like Microsoft. I also used TypeScript for type safety and Amazon Q AI to help me write efficient code."

### "How does the AI work?"
> "I used Amazon Q AI assistant to help me design the adaptive difficulty algorithm. The game tracks your performance and automatically adjusts question difficulty - getting harder when you're doing well and easier when you're struggling."

### "Why this tech stack?"
> "I wanted to learn professional tools used in real-world development. React Native lets me build for iOS, Android, and web from a single codebase, which is much more powerful than Scratch or MIT App Inventor."

## 🎯 Key Features to Demo

1. **Show the game loading** - Questions fetch from GitHub
2. **Answer a few questions** - Demonstrate correct/incorrect feedback
3. **Show adaptive difficulty** - Get 3 correct to see difficulty increase
4. **Show streak tracking** - Point out the fire emoji
5. **Show the stats screen** - Explain the algorithm

## 🏆 What Makes This Impressive

✅ Professional development framework (React Native)  
✅ AI-assisted development (Amazon Q)  
✅ Smart algorithms (adaptive difficulty)  
✅ Cross-platform capability  
✅ Type-safe code (TypeScript)  
✅ Real-world development practices  
✅ Clean, modern UI/UX  

## 📚 Learning Resources

- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/)
- [Amazon Q Developer](https://aws.amazon.com/q/developer/)

## 🎓 Educational Value

This project demonstrates:
- Algorithm design (adaptive difficulty)
- Data structures (game state management)
- API integration (question loading)
- User experience design
- Professional development workflows
- AI-assisted coding

## 🔧 Troubleshooting

### Questions not loading?
- Check internet connection
- Fallback questions will load automatically

### App not starting?
```bash
npm install
npx expo start --clear
```

## 📄 License

Built for educational purposes - 4th-6th grade competition project.

---

**Built with 💙 using React Native, Expo, and Amazon Q Developer**
