# Quick Start - 5 Minutes to Running

## Step 1: Install (1 min)
```bash
npm install
```

Or on Windows: Double-click `install.bat`

## Step 2: Start Server (30 sec)
```bash
npm start
```

Or on Windows: Double-click `start.bat`

**You should see:**
```
Server running on http://localhost:3000
```

## Step 3: Open Browser (30 sec)
Go to: `http://localhost:3000`

## Step 4: Test It (2 min)

1. Fill the form:
   - Name: `John Doe`
   - Event: `Tech Conference`
   - Type: `Premium`
   - Price: `150`

2. Click "Register"

3. See attendee appear in list

4. Add more attendees (see total revenue update)

5. Click "Delete" to remove

---

## Files at a Glance

| File | Purpose |
|------|---------|
| index.html | UI - Form and attendees list |
| style.css | Styling |
| script.js | Frontend logic (form, API calls) |
| server.js | Backend API (GET, POST, DELETE) |
| package.json | Dependencies |
| attendees.json | Data storage (auto-created) |

---

## Stop Server

Press `Ctrl + C` in terminal

---

## Troubleshooting

**Server won't start:**
- Port 3000 in use? Kill process: `netstat -ano | findstr :3000`
- Try different port in server.js

**Form not working:**
- Open browser console (F12)
- Check for JavaScript errors
- Ensure server is running

**Data not saving:**
- Check attendees.json file exists
- File permissions OK?
- Restart server

---

## For Testing APIs

**Using Postman:**
1. Download from postman.com
2. See: POSTMAN_REQUESTS.md

**Using curl:**
```bash
# Get all
curl http://localhost:3000/attendees

# Add
curl -X POST http://localhost:3000/attendees \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"John\",\"event\":\"Conf\",\"ticketType\":\"Premium\",\"ticketPrice\":150}"
```

---

## Done! Now Setup Git

See: GIT_INSTRUCTIONS.md
