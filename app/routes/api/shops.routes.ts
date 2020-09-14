import { Application } from "express";
import { ShopController } from "../../controllers";

export default function manageShopsRoutes(app: Application) {
    var shopController: ShopController = new ShopController();

    app.get(`/api/shops/`, shopController.index);
    app.get(`/api/shops/:id`, shopController.findByIndex);

}