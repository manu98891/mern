import express, { Express, Request, Response } from "express";
import dotenv  from 'dotenv'

// configuracion del .env
dotenv.config();

// creacion de la App
const app: Express = express();
const port: string | number = process.env.PORT || 8000;


// Definir la primera ruta de la aplicaicon
app.get('/',(req: Request, res: Response) => {
    // saludo
    res.send('My rutine API para el trabajo final')
});

// Definir la primera ruta de la aplicaicon
app.get('/hello',(req: Request, res: Response) => {
    // saludo
    res.send('Esta es la segunda ruta de la aplicacion')
});


// ejecutar la aplicaion

app.listen(port,() => {
    console.log('Se esta corriendo en: http://localhost:8000');
})





