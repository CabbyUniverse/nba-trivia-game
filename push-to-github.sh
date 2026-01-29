#!/bin/bash

# Run these commands after creating the GitHub repository:

cd /Users/calvinbaldwin/TouchOSC/touchosc-scripts-project/nba-trivia-game

# Add your actual GitHub repository URL
git remote set-url origin https://github.com/YOUR_USERNAME/nba-trivia-game.git

# Push to GitHub
git push -u origin main

echo "Files pushed to GitHub!"
echo "Next: Enable GitHub Pages in repository settings"
echo "Your API URL will be: https://YOUR_USERNAME.github.io/nba-trivia-game/nbaquestions.json"