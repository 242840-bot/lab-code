let attendees = [];

// DOM Elements
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const eventInput = document.getElementById('event');
const typeInput = document.getElementById('ticketType');
const priceInput = document.getElementById('price');
const attendeesList = document.getElementById('attendeesList');
const totalRevenue = document.getElementById('totalRevenue');
const totalCount = document.getElementById('totalCount');

// Form submit
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Form validation - no empty fields
    if (!nameInput.value || !eventInput.value || !typeInput.value || !priceInput.value) {
        alert('Please fill all fields');
        return;
    }

    // Using destructuring to get form values
    const { value: name } = nameInput;
    const { value: event } = eventInput;
    const { value: ticketType } = typeInput;
    const { value: ticketPrice } = priceInput;

    const newAttendee = {
        name,
        event,
        ticketType,
        ticketPrice: parseFloat(ticketPrice)
    };

    try {
        // POST request to add attendee
        const response = await fetch('http://localhost:3000/attendees', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAttendee)
        });
        
        if (response.ok) {
            await loadAttendees();
            form.reset();
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// Load attendees from API
async function loadAttendees() {
    try {
        const response = await fetch('http://localhost:3000/attendees');
        attendees = await response.json();
        display();
    } catch (error) {
        console.error('Error loading:', error);
    }
}

// Display attendees
function display() {
    attendeesList.innerHTML = '';
    
    if (attendees.length === 0) {
        attendeesList.innerHTML = '<p>No attendees yet</p>';
    } else {
        attendees.forEach(att => {
            const html = `
                <div class="card mb-2">
                    <div class="card-body">
                        <h6>${att.name}</h6>
                        <p><small>Event: ${att.event} | Type: ${att.ticketType} | Price: $${att.ticketPrice}</small></p>
                        <button class="btn btn-sm btn-danger" onclick="deleteAttendee(${att.id})">Delete</button>
                    </div>
                </div>
            `;
            attendeesList.innerHTML += html;
        });
    }

    // Calculate total revenue using reduce()
    const total = attendees.reduce((sum, att) => sum + att.ticketPrice, 0);
    totalRevenue.textContent = `$${total.toFixed(2)}`;
    totalCount.textContent = attendees.length;

    // Using spread operator
    const allAttendees = [...attendees];
    console.log('All attendees:', allAttendees);
}

// Delete attendee
async function deleteAttendee(id) {
    try {
        await fetch(`http://localhost:3000/attendees/${id}`, { method: 'DELETE' });
        await loadAttendees();
    } catch (error) {
        console.error('Error:', error);
    }
}

// Load on page load
loadAttendees();
