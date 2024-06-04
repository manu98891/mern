import { BasicResponse } from "./types";
import { IHelloController } from "./interfaces";
import { LogSuccess } from "../utils/logger";

export class HelloControler implements IHelloController{

    public async getMessage(name?: string): Promise<BasicResponse> {
        LogSuccess('[api/hello] Get Request');

        return{
            message: `Hola ${name || "mundo"}`
        }
    }

}