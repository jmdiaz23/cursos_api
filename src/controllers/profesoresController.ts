import { Request, Response } from "express";


class ProfesoresController{
    constructor(){

    }
    consultar (req: Request, res: Response){
        try{
            res.send("Consultar");
        }catch(err){
            if(err instanceof Error)
            res.status(500).send(err.message);
        }
    }

    consultarDetalle (req: Request, res: Response){
        try{
            res.send("Consultar Detalle");
        }catch(err){
            if(err instanceof Error)
            res.status(500).send(err.message);
        }
    }

    ingresar (req: Request, res: Response){
        try{
            res.send("Ingresar");
        }catch(err){
            if(err instanceof Error)
            res.status(500).send(err.message);
        }
    }

    actualizar (req: Request, res: Response){
        try{
            res.send("Actualizar");
        }catch(err){
            if(err instanceof Error)
            res.status(500).send(err.message);
        }
    }

    borrar (req: Request, res: Response){
        try{
            res.send("Borrar");
        }catch(err){
            if(err instanceof Error)
            res.status(500).send(err.message);
        }
    }
}
export default new ProfesoresController();