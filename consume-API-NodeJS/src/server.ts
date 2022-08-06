import express from 'express';
import { routes } from './routes';


const app = express();
app.use(express.json());
app.use(routes);
app.listen(3333, () => console.log('Server is running in port 3333 http://127.0.0.1:3333'));
