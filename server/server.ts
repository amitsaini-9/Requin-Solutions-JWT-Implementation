import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth';

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://root:root@requin-assesment.8cj4o.mongodb.net/?retryWrites=true&w=majority&appName=requin-assesment')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Use authentication routes
app.use('/auth', authRoutes);

// Start the server
app.listen(3001, () => {
  console.log('Server running on port 3001');
});