# Event Registration Manager - Start Here 👈

Welcome! This is your complete Q1 solution. Here's what to read in order:

## 📖 Read First
1. **THIS FILE** (you're reading it)
2. **QUICK_START.md** - Get it running in 5 minutes

## 🚀 To Run the Project
```bash
npm install
npm start
```

Then open: `http://localhost:3000`

## 📚 Documentation by Purpose

### For Quick Understanding
- **QUICK_START.md** - 5-minute setup
- **README.md** - Brief overview

### For Testing
- **POSTMAN_REQUESTS.md** - How to test API endpoints

### For Version Control
- **GIT_INSTRUCTIONS.md** - How to create 2 meaningful commits

### For Complete Details
- **SOLUTION_OVERVIEW.md** - Everything explained (READ FOR VIVA)

### For File Breakdown
- **FILES_SUMMARY.txt** - All files with checklist

## 🎯 Q1 Checklist

| Requirement | Status | File |
|---|---|---|
| HTML5, CSS3, Bootstrap | ✅ | index.html |
| Responsive navbar | ✅ | index.html |
| Registration form | ✅ | index.html |
| Display attendees in cards | ✅ | script.js |
| Form validation | ✅ | script.js line 11 |
| Add attendees (DOM) | ✅ | script.js line 48 |
| Remove attendees | ✅ | script.js line 55 |
| reduce() for revenue | ✅ | script.js line 65 |
| Destructuring | ✅ | script.js line 17 |
| Spread operator | ✅ | script.js line 68 |
| REST API - GET | ✅ | server.js line 24 |
| REST API - POST | ✅ | server.js line 28 |
| REST API - DELETE | ✅ | server.js line 45 |
| JSON data storage | ✅ | server.js (attendees.json) |
| Test with Postman | ✅ | POSTMAN_REQUESTS.md |
| Git commits (2+) | ✅ | GIT_INSTRUCTIONS.md |

## 💡 Simple Explanation

Your solution has:
1. **Frontend** (index.html + script.js) - What users see and interact with
2. **Backend** (server.js) - API that stores and retrieves data
3. **Data** (attendees.json) - File that stores attendee information

**Flow:**
1. User fills form
2. Click "Register"
3. JavaScript sends data to backend
4. Backend saves to JSON file
5. Frontend shows updated list
6. Total revenue automatically recalculates

## 🎓 For Viva

**Read this:** SOLUTION_OVERVIEW.md

Key points to explain:
- **reduce()** - Sums ticket prices
- **Destructuring** - Gets form values: `const { value: name } = input`
- **Spread operator** - Copies arrays: `[...attendees]`
- **API endpoints** - GET (fetch), POST (add), DELETE (remove)
- **Data storage** - JSON file persistence
- **DOM manipulation** - Create/update HTML cards

## 🧪 Testing

### Manual (UI)
1. Run server
2. Add attendee via form
3. See it appear in list
4. Total revenue updates
5. Delete it
6. Refresh page - data still there

### API (Postman)
1. GET http://localhost:3000/attendees
2. POST with new attendee
3. DELETE with attendee ID

See **POSTMAN_REQUESTS.md** for exact requests

## 📂 Project Structure
```
q1/
├── index.html .............. UI
├── style.css ............... Styling
├── script.js ............... Frontend logic
├── server.js ............... Backend API
├── package.json ............ Dependencies
├── attendees.json .......... Data (auto-created)
└── Documentation files
```

## ⚡ Quick Commands

```bash
# Install dependencies
npm install

# Start server
npm start

# Test API (in another terminal)
curl http://localhost:3000/attendees

# Create Git commits
git init
git add .
git commit -m "Initial setup: HTML, CSS, Bootstrap form and UI"
git add server.js
git commit -m "Add Node.js Express API with JSON data storage"
```

## ❓ Common Questions

**Q: Where is the data saved?**
A: In `attendees.json` file in the q1 folder. It auto-creates on first POST.

**Q: Why Port 3000?**
A: Standard port for Node.js apps. Change in server.js if needed.

**Q: Do I need to know NestJS or PostgreSQL?**
A: No! This uses Express (simpler). Those are for Q2.

**Q: How do I make it more complex?**
A: Don't! Keep it simple for viva. They'll ask you to explain what you have.

## 🎁 Next Steps

1. ✅ Read QUICK_START.md
2. ✅ Run the project
3. ✅ Test it manually
4. ✅ Test with Postman
5. ✅ Set up Git commits
6. ✅ Read SOLUTION_OVERVIEW.md
7. ✅ Practice explaining to someone
8. ➡️ Move to Q2 when ready

## 🆘 Need Help?

- **Errors?** Check browser console (F12) and terminal output
- **Won't start?** Try GIT_INSTRUCTIONS.md troubleshooting
- **API not working?** See POSTMAN_REQUESTS.md

---

**Ready?** Start with QUICK_START.md ⬇️
