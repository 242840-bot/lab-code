# Event Registration Manager - Solution Overview

## Project Structure
```
q1/
├── index.html          # HTML5 page with Bootstrap
├── style.css           # CSS3 responsive styling
├── script.js           # JavaScript - DOM manipulation & API calls
├── server.js           # Node.js Express REST API
├── package.json        # Dependencies
├── attendees.json      # JSON data storage (auto-created)
├── install.bat         # Windows: Run this to install dependencies
├── start.bat           # Windows: Run this to start server
└── README.md           # Quick reference
```

---

## How to Run

### Option 1: Windows Batch Files (Easiest)
1. Double-click `install.bat` to install dependencies
2. Double-click `start.bat` to start the server
3. Open browser to `http://localhost:3000`

### Option 2: Command Line
```bash
npm install
npm start
```

---

## Q1 Requirements Checklist ✅

### 1. Responsive Page with HTML5, CSS3, Bootstrap ✅
- **File:** `index.html`
- Navbar at top (Bootstrap navbar)
- Registration form with 4 fields
- Responsive layout using Bootstrap grid (col-md-5, col-md-7)
- Mobile-friendly design

### 2. Register Form (name, event, ticket type, ticket price) ✅
- **File:** `index.html` (form section)
- Text input for name
- Text input for event
- Select dropdown for ticket type (Standard, Premium, VIP)
- Number input for price with validation

### 3. Display Attendees using Bootstrap Cards ✅
- **File:** `script.js` - display() function
- Each attendee shows as a card with:
  - Name (bold)
  - Event, Type, Price (details)
  - Delete button
- Cards render dynamically

### 4. JavaScript Form Validation (no empty fields) ✅
- **File:** `script.js` - Form submit event handler
```javascript
if (!nameInput.value || !eventInput.value || !typeInput.value || !priceInput.value) {
    alert('Please fill all fields');
    return;
}
```

### 5. Add/Remove Attendees (DOM Manipulation) ✅
- **File:** `script.js`
- Add: Creates card HTML and appends to DOM
- Remove: Calls deleteAttendee() which filters array and re-renders

### 6. Live Total Revenue using reduce() ✅
- **File:** `script.js` - display() function
```javascript
const total = attendees.reduce((sum, att) => sum + att.ticketPrice, 0);
totalRevenue.textContent = `$${total.toFixed(2)}`;
```

### 7. Destructuring ✅
- **File:** `script.js` - Form submit handler
```javascript
const { value: name } = nameInput;
const { value: event } = eventInput;
```

### 8. Spread Operator ✅
- **File:** `script.js` - display() function
```javascript
const allAttendees = [...attendees];
console.log('All attendees:', allAttendees);
```

### 9. Node.js REST API ✅
- **File:** `server.js` - Three endpoints:

#### GET /attendees
- Returns all attendees from JSON file
- Used to load data on page load

#### POST /attendees
- Receives: name, event, ticketType, ticketPrice
- Validates: All fields required
- Creates: New attendee with Date.now() as ID
- Stores: In attendees.json file
- Returns: New attendee object

#### DELETE /attendees/:id
- Removes attendee from attendees.json
- Returns: Success message

### 10. Data Storage in JSON File ✅
- **File:** `server.js`
- Path: `attendees.json` (auto-created in project folder)
- Data persisted between server restarts
- Simple JSON format: `[{id, name, event, ticketType, ticketPrice}, ...]`

### 11. Test APIs with Postman ✅
See: **POSTMAN_REQUESTS.md** for ready-to-use requests

### 12. Git with 2+ Meaningful Commits ✅
See: **GIT_INSTRUCTIONS.md** for how to create commits

---

## Key JavaScript Concepts

| Concept | Location | Usage |
|---------|----------|-------|
| **reduce()** | script.js line 65 | Sum ticket prices |
| **Destructuring** | script.js line 17 | Extract form values |
| **Spread Operator** | script.js line 68 | Copy array |
| **Async/Await** | script.js line 20-30 | API calls |
| **DOM Manipulation** | script.js line 48-60 | Create/update HTML |
| **Array Methods** | script.js | filter(), forEach(), find() |

---

## Testing

### Frontend (UI Testing)
1. Fill form with attendee data
2. Click "Register"
3. See attendee appear in list
4. Total revenue updates
5. Click Delete to remove
6. Reload page - data persists

### Backend (API Testing)
Use Postman or curl:
```bash
# Get all
curl http://localhost:3000/attendees

# Add
curl -X POST http://localhost:3000/attendees \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"John\",\"event\":\"Conf\",\"ticketType\":\"Premium\",\"ticketPrice\":150}"

# Delete (replace ID)
curl -X DELETE http://localhost:3000/attendees/1700000000000
```

---

## Files Explained Simply

### index.html
- Bootstrap navbar at top
- Form on left (Bootstrap col-md-5)
- Attendees list on right (Bootstrap col-md-7)
- Two hidden elements for totals

### style.css
- Basic styling for cards and buttons
- Responsive: Stacks on mobile
- Simple colors and spacing

### script.js
1. Load attendees on page load
2. Form submit → validation → POST to API
3. Display renders all attendees as cards
4. Calculate total using reduce()
5. Delete button → DELETE API call → refresh

### server.js
1. Express app with CORS enabled
2. Static file serving
3. Three API routes (GET, POST, DELETE)
4. Read/write to attendees.json

---

## Common Issues & Solutions

**Problem:** Server won't start
- Check if port 3000 is in use
- Try: `netstat -ano | findstr :3000`

**Problem:** npm install fails
- Use `install.bat` on Windows
- Or open Command Prompt (not PowerShell)

**Problem:** No data after refresh
- Check attendees.json exists in q1 folder
- Restart server and try again

**Problem:** Form not adding attendees
- Open browser console (F12)
- Check for errors
- Ensure server is running

---

## For the Viva

### Simple Explanation
"I created an event registration system where users fill a form to register for an event. The system stores attendees in a JSON file using a Node.js server. When you add or remove attendees, the total revenue automatically calculates using the reduce() method. The frontend is responsive using Bootstrap."

### Key Points to Remember
1. **reduce()** - Sums all ticket prices: `reduce((sum, att) => sum + att.ticketPrice, 0)`
2. **Destructuring** - Gets form values: `const { value: name } = nameInput`
3. **Spread Operator** - Copies array: `const allAttendees = [...attendees]`
4. **API Endpoints** - GET (fetch all), POST (add), DELETE (remove)
5. **Data Storage** - attendees.json file on server
6. **DOM Manipulation** - Creates/updates HTML cards for attendees

---

## Next: Move to Q2 Hospital Appointment System
The Q2 solution follows similar structure but uses:
- NestJS instead of Express
- PostgreSQL instead of JSON
- One-to-many relationships (Doctor → Appointments)
- Request middleware and API key guard
