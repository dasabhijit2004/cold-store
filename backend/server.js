import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { connectDB } from './config/db.js';
import auth from './routes/auth.js';
import admin from './routes/admin.js';
import bondRoutes from './routes/bondRoutes.js'

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use('/api/auth', auth);
app.use('/api/admin', admin);
app.use('/api/bonds', bondRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
)