import { Application } from "express";
import { Shop } from "../models/shop";
import shopsRoutes from './api/shops.routes';
import { ShopController } from "../controllers";



interface ShopRequest {
    id: String
}

export class Routes {

    public shopController: ShopController = new ShopController();

    public routes(app: Application) {

        app.route("/").get((req, res) => {
            res.send(`<h1>Hola</h1>`);
        });

        app.get('/users/:id', (req, res, next) => {

            let { id } = req.params;

            res.send(`Hol ma ` + id);
        });

        shopsRoutes(app);
    }
}