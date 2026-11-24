const API_URL = 'http://localhost:3001';
const API_KEY = 'hospital-secret-key-123';

let doctors = [];
let appointments = [];

// DOM Elements
const appointmentForm = document.getElementById('appointmentForm');
const patientNameInput = document.getElementById('patientName');
const doctorIdSelect = document.getElementById('doctorId');
const appointmentDateInput = document.getElementById('appointmentDate');
const timeSlotSelect = document.getElementById('timeSlot');
const appointmentsList = document.getElementById('appointmentsList');

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    await loadDoctors();
    await loadAppointments();
});

// Form submit - Book appointment
appointmentForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Form validation
    if (!patientNameInput.value || !doctorIdSelect.value || !appointmentDateInput.value || !timeSlotSelect.value) {
        alert('Please fill all fields');
        return;
    }

    const appointmentData = {
        patientName: patientNameInput.value,
        doctorId: parseInt(doctorIdSelect.value),
        appointmentDate: appointmentDateInput.value,
        timeSlot: timeSlotSelect.value,
    };

    try {
        const response = await fetch(`${API_URL}/appointments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY,
            },
            body: JSON.stringify(appointmentData),
        });

        if (response.ok) {
            await loadAppointments();
            appointmentForm.reset();
            alert('Appointment booked successfully!');
        } else {
            alert('Error booking appointment');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error connecting to server');
    }
});

// Load doctors from API
async function loadDoctors() {
    try {
        const response = await fetch(`${API_URL}/doctors`);
        if (response.ok) {
            doctors = await response.json();
            populateDoctorSelect();
        }
    } catch (error) {
        console.error('Error loading doctors:', error);
    }
}

// Populate doctor dropdown
function populateDoctorSelect() {
    doctorIdSelect.innerHTML = '<option value="">Choose doctor...</option>';
    doctors.forEach(doctor => {
        const option = document.createElement('option');
        option.value = doctor.id;
        option.textContent = `${doctor.name} (${doctor.specialty})`;
        doctorIdSelect.appendChild(option);
    });
}

// Load appointments from API
async function loadAppointments() {
    try {
        const response = await fetch(`${API_URL}/appointments`, {
            headers: { 'x-api-key': API_KEY },
        });

        if (response.ok) {
            appointments = await response.json();
            displayAppointments();
        }
    } catch (error) {
        console.error('Error loading appointments:', error);
    }
}

// Display appointments
function displayAppointments() {
    appointmentsList.innerHTML = '';

    if (appointments.length === 0) {
        appointmentsList.innerHTML = '<p>No appointments scheduled</p>';
        return;
    }

    appointments.forEach(apt => {
        const doctor = doctors.find(d => d.id === apt.doctorId);
        const html = `
            <div class="card mb-2">
                <div class="card-body">
                    <h6>${apt.patientName}</h6>
                    <small>
                        Doctor: ${doctor ? doctor.name : 'Unknown'}<br>
                        Date: ${new Date(apt.appointmentDate).toDateString()}<br>
                        Time: ${apt.timeSlot}<br>
                        Status: <span class="badge bg-info">${apt.status}</span>
                    </small>
                    <div class="mt-2">
                        <button class="btn btn-sm btn-warning" onclick="updateStatus(${apt.id})">Mark Complete</button>
                        <button class="btn btn-sm btn-danger" onclick="deleteAppointment(${apt.id})">Cancel</button>
                    </div>
                </div>
            </div>
        `;
        appointmentsList.innerHTML += html;
    });
}

// Update appointment status
async function updateStatus(id) {
    try {
        const response = await fetch(`${API_URL}/appointments/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY,
            },
            body: JSON.stringify({ status: 'Completed' }),
        });

        if (response.ok) {
            await loadAppointments();
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Delete appointment
async function deleteAppointment(id) {
    if (!confirm('Cancel this appointment?')) return;

    try {
        const response = await fetch(`${API_URL}/appointments/${id}`, {
            method: 'DELETE',
            headers: { 'x-api-key': API_KEY },
        });

        if (response.ok) {
            await loadAppointments();
            alert('Appointment cancelled');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
