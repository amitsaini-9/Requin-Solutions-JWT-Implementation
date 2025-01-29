import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const MONGODB_URI = process.env.MONGODB_URI as string;
// Connect to MongoDB using the URI from the environment variables
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Use authentication routes
app.use('/auth', authRoutes);

// Start the server on the port specified in the environment variables
const PORTS = process.env.PORTS || 3000;
app.listen(PORTS, () => {
  console.log(`Server running on port ${PORTS}`);
});