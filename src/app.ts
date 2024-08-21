import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import estudiantesRoutes from './routes/estudiantesRoutes';
import profesoresRoutes from './routes/profesoresRoutes';
import cursosRouter from './routes/cursosRoutes';



const app = express();

app.use(morgan('dev'));
app.use(cors());

app.get('/',(req: Request, res: Response)=>{
    console.log('Hola, me estas leyendo desde la consola');
    res.send("Hola, me estas viendo en el navegador");
});

app.use("/estudiantes", estudiantesRoutes);
app.use("/profesores",profesoresRoutes);
app.use("/cursos", cursosRouter);

export default app;