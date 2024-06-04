import express, { Express, Request, Response} from "express";
import dotenv from "dotenv";

// seguridad
import cors from 'cors';
import helmet from "helmet";

// TODO HTTPS

// Root rutas
import rootRutes from '../routes';

// creacion de la App
const server: Express = express();
const port: string | number = process.env.PORT || 8000;

//definir SERVER que use /api y que use el rootRouter del index.ts en routes
server.use(
    '/api',
    rootRutes
)

// TODO Conexion con Mongo

// configuracion de seguridad
server.use(helmet());
server.use(cors());

// Content type config
server.use(express.urlencoded({extended: true, limit: '50mb'}));
server.use(express.json({limit:'50mb'}));

// * Redirecciones
server.get('/',(req: Request, res: Response) => {
    res.redirect('/api');
});

export default server;