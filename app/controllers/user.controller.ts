import { Request, Response } from "express";

class UserController {


    public async index(req: Request, res: Response) {
        res.send([{ 'name': 'hola' }]);
    }
}

export { UserController };