import { Router } from "express";
import * as CarsController from "./cars.controller";

const router = Router();
router.route("/cars").get(CarsController.readCars);
//router.route("/cars/:search").get(CarsController.readCarsByModel);
router.route("/cars/search/model/:search").get(CarsController.readCarsByModelSearch);
router.route("/cars/search/description/:search").get(CarsController.readCarsByDescriptionSearch);
router.route("/cars").post(CarsController.createCar);
router.route("/cars/:carId").put(CarsController.updateCar);
router.route("/cars/:carId").delete(CarsController.deleteCar);

export default router;