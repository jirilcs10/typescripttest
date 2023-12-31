import express from 'express';
import bodyParser from 'body-parser';
import todoRoutes from './routes/todos';


const app=express();
app.use(bodyParser.json());
app.use(todoRoutes);
app.listen({port:3000});