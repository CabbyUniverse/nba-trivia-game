# MIT App Inventor NBA Trivia Game Setup

## API URL
```
https://cabbyuniverse.github.io/nba-trivia-game/nbaquestions.json
```

---

## Step 1: Add Components First
**Go to Designer tab:**
1. Drag **Web** component from Connectivity
2. Drag **TinyDB** component from Storage (backup option)

---

## Step 2: Build the Initialize Block
**Go to Blocks tab:**

### Find Screen1.Initialize:
1. Look in left panel under **Screen1**
2. Drag **"when Screen1.Initialize"** to workspace

### Add the Web URL:
1. Find **Web1** in left panel
2. Drag **"set Web1.Url to"** block
3. Snap it inside the Initialize block
4. From **Text** drawer, drag a **text block**
5. Type: `https://cabbyuniverse.github.io/nba-trivia-game/nbaquestions.json`

### Add the Web Get:
1. From **Web1**, drag **"call Web1.Get"**
2. Snap it below the URL block

---

## Step 3: Create Global Variable and Handle Response
1. From **Variables**, drag **"initialize global name to"**
2. Change "name" to **"questions"**
3. Leave the "to" part empty for now (this creates the global variable)
4. From **Web1**, drag **"when Web1.GotText"**
5. From **Variables**, drag **"set global questions to"** (now available after step 1-3)
6. From **Web1**, drag **"call Web1.JsonTextDecode"**
7. **The "responseContent" input appears automatically** on the JsonTextDecode block
8. **Leave it as is** - it automatically gets the web response

---

## Final Block Structure

### Initialize Block:
```
when Screen1.Initialize
  do set Web1.Url to "https://cabbyuniverse.github.io/nba-trivia-game/nbaquestions.json"
     call Web1.Get
```

### Create Global Variable:
```
initialize global questions to (empty)
```

### Response Handler:
```
when Web1.GotText
  do set global questions to call Web1.JsonTextDecode
     responseContent ← (appears automatically)
```

---

## Key Points:
- **First create the global variable** using "initialize global name to" and change to "questions"
- **Then you can use "set global questions to"** in the Web1.GotText event
- **Don't look for a separate responseContent block**
- It's **built into** the JsonTextDecode block
- Just drag JsonTextDecode and the responseContent input is already there
- The JsonTextDecode block automatically knows to use the web response

---

## Next Steps:
1. Add UI components (Labels, Buttons, TextBox)
2. Create game logic to display questions
3. Add scoring system
4. Test your trivia game!

Perfect for 4th-6th grade competition presentations!