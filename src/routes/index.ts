import express, {Request, Response} from 'express'
import helloRouter from './HelloRoutes'
import { LogInfo } from '../utils/logger'

// instancia del servidor
let server = express();

//Ruta de la instancia
let rootRouter = express.Router();

// Activar las requiest de http:localhost:8000/api


// Va hacer un GET a http://localhost8000/api
rootRouter.get('/',(req: Request, res: Response) => {
    LogInfo('GET request http://localhost8000/api')
    // saludo
    res.send('My rutine API para el trabajo final')
});


// Redireccion a rutas y controles
server.use('/',rootRouter);
server.use('/hello', helloRouter);


export default server;

