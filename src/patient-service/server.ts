import express from 'express';
import patientRoutes from './patientRoutes'; // Import patient routes

const app = express();
const PORT = process.env.PORT || 3001; // Patient service runs on port 3001

app.use(express.json()); // Middleware to parse JSON bodies

// Use patient routes for handling '/patients' endpoint
app.use('/patients', patientRoutes);

app.listen(PORT, () => {
    console.log(`Patient Service is running on port ${PORT}`);
});
