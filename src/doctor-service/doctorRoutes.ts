import express from 'express';

const router = express.Router();

// Doctor interface to define the structure of a doctor
interface Doctor {
    id: number;
    name: string;
    specialty: string;
    availability: string[];
}

// Mock database (in-memory storage)
let doctors: Doctor[] = [];

// Route to create a new doctor
router.post('/', (req, res) => {
    const { name, specialty, availability } = req.body;
    const newDoctor: Doctor = {
        id: doctors.length + 1, // Simple ID generation
        name,
        specialty,
        availability,
    };
    doctors.push(newDoctor); // Add doctor to the mock database
    res.status(201).send(newDoctor); // Respond with the created doctor
});

// Route to get all doctors
router.get('/', (req, res) => {
    res.status(200).send(doctors); // Respond with the list of doctors
});

// Route to get a doctor by ID
router.get('/:id', (req, res) => {
    const doctorId = parseInt(req.params.id);
    const doctor = doctors.find(d => d.id === doctorId);
    if (!doctor) {
        return res.status(404).send({ message: 'Doctor not found' });
    }
    res.status(200).send(doctor); // Respond with the found doctor
});

// Route to delete a doctor
router.delete('/:id', (req, res) => {
    const doctorId = parseInt(req.params.id);
    doctors = doctors.filter(d => d.id !== doctorId); // Remove doctor
    res.status(204).send(); // Respond with no content
});

export default router;
