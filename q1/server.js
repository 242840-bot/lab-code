const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// File path
const dataFile = path.join(__dirname, 'attendees.json');

// Initialize file
if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify([]));
}

// GET /attendees - Get all attendees
app.get('/attendees', (req, res) => {
    const data = fs.readFileSync(dataFile);
    const attendees = JSON.parse(data);
    res.json(attendees);
});

// POST /attendees - Add new attendee
app.post('/attendees', (req, res) => {
    const { name, event, ticketType, ticketPrice } = req.body;

    // Validation
    if (!name || !event || !ticketType || !ticketPrice) {
        return res.status(400).json({ error: 'All fields required' });
    }

    const data = fs.readFileSync(dataFile);
    const attendees = JSON.parse(data);

    const newAttendee = {
        id: Date.now(),
        name,
        event,
        ticketType,
        ticketPrice: parseFloat(ticketPrice)
    };

    attendees.push(newAttendee);
    fs.writeFileSync(dataFile, JSON.stringify(attendees, null, 2));

    res.status(201).json(newAttendee);
});

// DELETE /attendees/:id - Delete attendee
app.delete('/attendees/:id', (req, res) => {
    const { id } = req.params;
    const data = fs.readFileSync(dataFile);
    let attendees = JSON.parse(data);

    const index = attendees.findIndex(a => a.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ error: 'Attendee not found' });
    }

    attendees.splice(index, 1);
    fs.writeFileSync(dataFile, JSON.stringify(attendees, null, 2));

    res.json({ message: 'Deleted' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
