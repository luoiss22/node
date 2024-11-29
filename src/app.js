import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from '../routes/index.routes.js';
import { initializeDatabase } from './models/index.models.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

routes(app);

initializeDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}).catch(error => {
    console.error('Failed to initialize database:', error);
});