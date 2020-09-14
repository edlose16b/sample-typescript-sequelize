import { Request, Response } from "express";
import { Shop } from "../models/shop";
import { Op } from "sequelize";

class ShopController {
    public async index(req: Request, res: Response) {

        let total = await Shop.findAll();

        res.send(total);
    }

    public async findByIndex(req: Request, res: Response) {
        let { id } = req.params;
        let shop = await Shop.findByPk(id);
        res.send(shop);

    }

    public async findByName(req: Request, res: Response) {

        let { name } = req.params;
        console.log(req.params);

        let data = await Shop.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        });

        res.send(data);
    }
}

export { ShopController }