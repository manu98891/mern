import express, { Request, Response } from "express";
import { HelloControler } from "../controller/HelloController";
import { LogInfo } from "../utils/logger";

// Roteo de expres
let helloRouter = express.Router();

// http://localhost:8000/api/hello/
helloRouter.route('/')
    .get(async (req: Request, res: Response) => {
        // Obtener querry Param
        let name: any = req?.query?.name;
        LogInfo(`Query Param ${name}`);
        
        //Instancia de controler
        const controler: HelloControler = new HelloControler();

        //Obtner la respuesta
        const response = await controler.getMessage(name);

        //enviar la respiuesta
        return res.send(response);
    })

// Export de HelloRouter
export default helloRouter;




