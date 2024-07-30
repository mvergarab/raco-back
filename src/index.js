import express from 'express';
import cors from 'cors';
import leadsRoutes from './routes/leads.route.js';

const app = express();

app.use(express.json());

const corsOptions = {
  origin: 'https://frontend-raco-206efa8b3efb.herokuapp.com',
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));

app.use('/api', leadsRoutes);

const PORT = process.env.PORT || 3001; 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

