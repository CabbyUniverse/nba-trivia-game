# 🚀 Quick Start Guide

## Your App is Ready!

The NBA Trivia Game is already running on port 8081.

## How to View Your App

### Option 1: Expo Go App (Easiest)
1. Download "Expo Go" from App Store (iOS) or Google Play (Android)
2. Open Expo Go
3. Scan the QR code from your terminal
4. App will load on your phone!

### Option 2: Web Browser
1. Open your browser
2. Go to: http://localhost:8081
3. Press `w` in terminal to open web version

### Option 3: iOS Simulator (Mac only)
1. Press `i` in the terminal
2. iOS simulator will open with your app

### Option 4: Android Emulator
1. Press `a` in the terminal
2. Android emulator will open with your app

## Terminal Commands

While the dev server is running, press:
- `w` - Open in web browser
- `i` - Open iOS simulator
- `a` - Open Android emulator
- `r` - Reload app
- `m` - Toggle menu
- `j` - Open debugger

## To Stop the Server

Press `Ctrl + C` in the terminal

## To Restart Fresh

```bash
cd /Users/calvinbaldwin/TouchOSC/touchosc-scripts-project/nba-trivia-game/nba-trivia-game
npm start
```

## What You Built

✅ **Main Game Screen** - Play NBA trivia with adaptive difficulty
✅ **Stats Screen** - View game info and tech stack
✅ **Adaptive Difficulty** - Gets harder/easier based on performance
✅ **Streak Tracking** - Shows fire emoji for correct streaks
✅ **Professional UI** - Clean, modern design

## Files Created

```
✅ types/game.ts - TypeScript types
✅ utils/difficultyEngine.ts - Adaptive difficulty algorithm
✅ utils/questionLoader.ts - Question loading logic
✅ components/game/QuestionCard.tsx - Question display
✅ components/game/AnswerInput.tsx - Answer input
✅ components/game/ScoreDisplay.tsx - Score & difficulty display
✅ app/(tabs)/index.tsx - Main game screen
✅ app/(tabs)/explore.tsx - Stats screen
```

## Next Steps

1. **Test the app** - Open in Expo Go or web browser
2. **Play the game** - Try to get 3 correct in a row
3. **Check adaptive difficulty** - Watch difficulty badge change
4. **Review the code** - Look at the files we created
5. **Practice your presentation** - Use PRESENTATION-GUIDE.md

## For Your Presentation

**Say this:**
> "I built an AI-powered NBA trivia game using React Native and Expo. I used Amazon Q AI to help me write the adaptive difficulty algorithm that adjusts questions based on player performance. The app works on iOS, Android, and web from a single codebase."

**Demo this:**
1. Show the app loading
2. Answer 3 questions correctly → Show difficulty increase
3. Show the streak counter
4. Show the stats screen
5. Explain the algorithm

## Troubleshooting

**Port already in use?**
```bash
killall node
npm start
```

**App not loading?**
```bash
npm install
npx expo start --clear
```

**Need to see the QR code?**
Look in your terminal - it should be displayed there

---

**Your app is live and ready to demo! 🎉**
