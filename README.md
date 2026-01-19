# NBA Trivia Game - Questions API

## File: nbaquestions.json

This JSON file contains 10 NBA trivia questions suitable for 4th-6th grade students.

## Usage in MIT App Inventor

### Option 1: GitHub Pages (Recommended)
1. Upload this folder to GitHub
2. Enable GitHub Pages in repository settings
3. Use URL: `https://yourusername.github.io/reponame/nbaquestions.json`

### Option 2: Local TinyDB (Offline)
Copy the questions array and use TinyDB.StoreValue in MIT App Inventor.

## MIT App Inventor Blocks

```
when Screen1.Initialize
  do set Web1.Url to "YOUR_GITHUB_PAGES_URL/nbaquestions.json"
     call Web1.Get

when Web1.GotText
  do set global questions to call Web1.JsonTextDecode
     text Web1.ResponseContent
```

## Question Format
Each question has:
- `q`: The question text
- `a`: The correct answer

Perfect for elementary school NBA trivia competitions!