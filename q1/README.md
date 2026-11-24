# Event Registration Manager - Q1

Simple Event Registration Manager with HTML, CSS, Bootstrap, JavaScript, and Node.js REST API.

## Features

✅ Responsive HTML5/CSS3/Bootstrap UI with navbar
✅ Register form (name, event, ticket type, ticket price)
✅ Display attendees in cards
✅ Form validation (no empty fields)
✅ Add/Remove attendees via DOM manipulation
✅ Calculate total revenue using reduce()
✅ Use destructuring and spread operator
✅ Node.js REST API (GET, POST, DELETE)
✅ Store data in JSON file

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start server:
```bash
npm start
```

3. Open browser:
```
http://localhost:3000
```

## API Endpoints

- `GET /attendees` - Get all attendees
- `POST /attendees` - Add new attendee
- `DELETE /attendees/:id` - Delete attendee

## Test with Postman

**POST - Add Attendee:**
```json
{
  "name": "John Doe",
  "event": "Tech Conference",
  "ticketType": "Premium",
  "ticketPrice": 150
}
```

**GET - View all attendees:**
```
http://localhost:3000/attendees
```

**DELETE - Remove attendee:**
```
http://localhost:3000/attendees/[ID]
```

## JavaScript Features Used

- Form validation (no empty fields)
- DOM manipulation (add/remove attendees)
- reduce() for total revenue calculation
- Destructuring: `const { value: name } = nameInput`
- Spread operator: `const allAttendees = [...attendees]`
- Async/await for API calls

## Git Setup

```bash
git init
git add .
git commit -m "Initial setup: HTML, CSS, Bootstrap form"
git commit -m "Add backend REST API and JSON storage"
```
