import express from 'express';

const router = express.Router();

// Patient interface to define the structure of a patient
interface Patient {
    id: number;
    name: string;
    age: number;
    medicalHistory: string[];
}

// Mock database (in-memory storage)
let patients: Patient[] = [];

// Route to create a new patient
router.post('/', (req, res) => {
    const { name, age, medicalHistory } = req.body;
    const newPatient: Patient = {
        id: patients.length + 1, // Simple ID generation
        name,
        age,
        medicalHistory,
    };
    patients.push(newPatient); // Add patient to the mock database
    res.status(201).send(newPatient); // Respond with the created patient
});

// Route to get all patients
router.get('/', (req, res) => {
    res.status(200).send(patients); // Respond with the list of patients
});

// Route to get a patient by ID
router.get('/:id', (req, res) => {
    const patientId = parseInt(req.params.id);
    const patient = patients.find(p => p.id === patientId);
    if (!patient) {
        return res.status(404).send({ message: 'Patient not found' });
    }
    res.status(200).send(patient); // Respond with the found patient
});

// Route to update a patient
router.put('/:id', (req, res) => {
    const patientId = parseInt(req.params.id);
    const patientIndex = patients.findIndex(p => p.id === patientId);
    if (patientIndex === -1) {
        return res.status(404).send({ message: 'Patient not found' });
    }
    const { name, age, medicalHistory } = req.body;
    patients[patientIndex] = { id: patientId, name, age, medicalHistory }; // Update patient
    res.status(200).send(patients[patientIndex]); // Respond with the updated patient
});

// Route to delete a patient
router.delete('/:id', (req, res) => {
    const patientId = parseInt(req.params.id);
    patients = patients.filter(p => p.id !== patientId); // Remove patient
    res.status(204).send(); // Respond with no content
});

export default router;
