# NBA Trivia Game - Deployment & Presentation Guide

## 📱 For This Week's Presentation

### Option 1: Expo Go (Recommended for Demo)

**Keep it running:**
```bash
cd /Users/calvinbaldwin/TouchOSC/touchosc-scripts-project/nba-trivia-game/nba-trivia-game
npm start
```

**Steps:**
1. Keep laptop running with `npm start`
2. Open Expo Go app on your phone
3. Scan QR code from terminal
4. Game loads on your phone
5. Demo directly from phone during presentation

**Pros:**
- ✅ Instant setup
- ✅ Works offline once loaded
- ✅ Can pass phone to judges
- ✅ Professional mobile demo

**Backup Plan:**
- Load game 30 minutes before presentation
- Keep laptop nearby in case you need to reload
- Have screenshots ready if tech fails

---

### Option 2: Publish to Expo (More Stable)

**Publish once, use forever:**
```bash
npx expo publish
```

**Benefits:**
- Creates permanent link
- Works even if laptop is off
- Share QR code with judges
- They can try it on their phones too

---

## 🚀 Deployment Options for Friends

### Option 1: Expo Go (Easiest - 5 minutes)

**Best for:** Quick testing with friends

**Steps:**
```bash
npx expo publish
```

**Share:**
- QR code or link
- Friends download Expo Go app
- Scan and play

**Pros:** Instant, free, no approval  
**Cons:** Requires Expo Go app

---

### Option 2: Web Deployment (Easy - 15 minutes, FREE)

**Best for:** Anyone with a browser

**Deploy to Netlify:**
```bash
cd /Users/calvinbaldwin/TouchOSC/touchosc-scripts-project/nba-trivia-game/nba-trivia-game
npx expo export --platform web
```

**Then:**
1. Go to [netlify.com/drop](https://netlify.com/drop)
2. Drag the `dist` folder
3. Get URL like `nba-trivia.netlify.app`

**Pros:** Free, instant, works on any device  
**Cons:** Web version, not native app

**Alternative Free Hosts:**
- Vercel: `vercel deploy dist`
- GitHub Pages: Push to gh-pages branch
- Firebase Hosting: `firebase deploy`

---

### Option 3: EAS Build - Android APK (Medium - 1 hour, FREE)

**Best for:** Real standalone app without app store

**Setup (one-time):**
```bash
npm install -g eas-cli
eas login
eas build:configure
```

**Build Android APK:**
```bash
eas build --platform android --profile preview
```

**Share:**
1. Download the `.apk` file from build link
2. Upload to Google Drive or Dropbox
3. Share link with friends
4. They install directly (no app store)

**Pros:** Real app, no Expo Go needed  
**Cons:** Android only, takes 10-20 minutes to build

**iOS Note:** Requires Apple Developer account ($99/year)

---

### Option 4: App Stores (Hard - Days/Weeks)

#### Google Play Store
**Cost:** $25 one-time  
**Time:** 1-3 days approval  
**Steps:**
```bash
eas build --platform android --profile production
```
Then submit via Google Play Console

**Requirements:**
- Google Play Developer account
- App signing key
- Privacy policy
- Store listing (screenshots, description)

#### Apple App Store
**Cost:** $99/year  
**Time:** 1-7 days approval  
**Steps:**
```bash
eas build --platform ios --profile production
```
Then submit via App Store Connect

**Requirements:**
- Apple Developer account
- Mac computer
- App Store listing
- Strict review process

---

## 💡 Recommended Approach

### For Presentation (This Week):
**Use Expo Go** - Load on your phone, demo live

### For Friends (After Presentation):
**Option A (Easiest):**
1. Web version on Netlify (free)
2. Share link: `nba-trivia.netlify.app`

**Option B (Better):**
1. Web version on Netlify
2. Android APK via EAS Build
3. Share both links

**Option C (Best Long-term):**
1. Publish to Google Play Store ($25)
2. Professional distribution
3. Easy updates

---

## 🎤 Presentation Talking Points

### "How can people play this?"

**Say:**
> "Right now I'm demoing it on my phone using Expo Go. After the competition, I plan to deploy it as a web app so anyone can play in their browser, and I'm also building an Android APK for direct installation. Eventually, I'd like to publish it to the Google Play Store."

### "Can I try it?"

**Say:**
> "Absolutely! You can scan this QR code with the Expo Go app, or I can pass you my phone to try it right now."

---

## 📋 Pre-Presentation Checklist

**30 Minutes Before:**
- [ ] Start dev server: `npm start`
- [ ] Load game on phone via Expo Go
- [ ] Test all 10 questions work
- [ ] Check backgrounds are loading
- [ ] Verify splash screen shows
- [ ] Test game over screen
- [ ] Take screenshots as backup

**5 Minutes Before:**
- [ ] Game loaded and ready on phone
- [ ] Laptop nearby with terminal open
- [ ] Phone fully charged
- [ ] Confident and ready!

---

## 🔧 Quick Commands Reference

```bash
# Start development server
npm start

# Publish to Expo
npx expo publish

# Build web version
npx expo export --platform web

# Build Android APK
eas build --platform android --profile preview

# Build for production
eas build --platform android --profile production
```

---

## 🌐 Deployment URLs

**After deploying, update these:**

- **Web Version:** `https://your-game.netlify.app`
- **Expo Link:** `exp://exp.host/@username/nba-trivia-game`
- **Android APK:** `https://drive.google.com/your-apk-link`
- **GitHub Repo:** `https://github.com/cabbyuniverse/touchosc-scripts-project`

---

## 📱 Device Testing

**Tested On:**
- ✅ iPhone 12/14 Pro Max
- ✅ MacBook Pro (web browser)
- ✅ Expo Go app

**Known Issues:**
- Background images work best on mobile
- Web version may need different image sizing

---

## 🎯 Next Steps After Presentation

1. **Immediate (This Week):**
   - Publish to Expo for stable link
   - Deploy web version to Netlify

2. **Short-term (Next Week):**
   - Build Android APK with EAS
   - Share with friends and family
   - Gather feedback

3. **Long-term (Future):**
   - Add more questions (200+)
   - Implement leaderboard
   - Add multiplayer mode
   - Publish to Google Play Store

---

## 💰 Cost Summary

| Option | Cost | Time | Difficulty |
|--------|------|------|------------|
| Expo Go | Free | 5 min | Easy |
| Web (Netlify) | Free | 15 min | Easy |
| Android APK | Free | 1 hour | Medium |
| Google Play | $25 | 3 days | Hard |
| Apple Store | $99/year | 7 days | Hard |

---

## 🆘 Troubleshooting

**Game won't load on phone:**
- Check laptop and phone on same WiFi
- Restart Expo server: `Ctrl+C` then `npm start`
- Clear Expo Go cache

**Build fails:**
- Run `npm install` to update dependencies
- Check `eas.json` configuration
- Review build logs for errors

**Web version images not showing:**
- Verify images in `assets/images/` folder
- Check file names match exactly
- Try different image formats

---

**Good luck with your presentation! 🏀🎮**
