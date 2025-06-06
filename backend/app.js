import express from 'express';
import cors from 'cors';
// import bondRoutes from './routes/bondRoutes.js';
// import authRoutes from './routes/authRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/bonds', bondRoutes);

app.get("/", (req, res) => {
    res.send("Connected");
})

// Error Handling
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});


export default app;
