import express from 'express';
import doctorRoutes from './doctorRoutes'; // Import doctor routes

const app = express();
const PORT = process.env.PORT || 3002; // Doctor service runs on port 3002

app.use(express.json()); // Middleware to parse JSON bodies

// Use doctor routes for handling '/doctors' endpoint
app.use('/doctors', doctorRoutes);

app.listen(PORT, () => {
    console.log(`Doctor Service is running on port ${PORT}`);
});
