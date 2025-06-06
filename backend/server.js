import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to DB and start server
// mongoose
//     .connect(process.env.MONGO_URI)
//     .then(() => {
//         console.log('✅ Connected to MongoDB');
//         app.listen(PORT, () => {
//             console.log(`🚀 Server running on http://localhost:${PORT}`);
//         });
//     })
//     .catch(err => {
//         console.error('❌ DB connection error:', err);
//     });


app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});