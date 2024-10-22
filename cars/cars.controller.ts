import { Request, RequestHandler, Response } from "express";
import { Car } from "./cars.model";
import * as CarDao from "./car.dao";
import { OkPacket } from "mysql";

export const readCars: RequestHandler = async (req: Request, res: Response) => {
    try {
        let cars;
        let carId = parseInt(req.query.carID as string);

        console.log("carId", carId);
        if(Number.isNaN(carId)) {
            cars = await CarDao.readCars();
        }
        else {
            cars = await CarDao.readCarsByCarID(carId);
        }
        res.status(200).json(cars);
    }
    catch(error) {
        console.log("[cars.controller][readCars][Error]", error);
        res.status(500).json({
            message: "there was an error when fetching cars"
        });
    }
};

// export const readCarsByModel: RequestHandler = async (req: Request, res: Response) => {
//     try {
//         const cars = await CarDao.readCarsByModel(req.params.search);
//         res.status(200).json(cars);
//     }
//     catch(error) {
//         console.log("[cars.controller][readCarsByModel][Error]", error);
//         res.status(500).json({
//             message: "there was an error when fetching cars"
//         });
//     }
// };

export const readCarsByModelSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log("Search", req.params.search);
        const cars = await CarDao.readCarsByModelSearch("%" + req.params.search + "%");
        res.status(200).json(cars);
    }
    catch(error) {
        console.log("[cars.controller][readCarsByModelSearch][Error]", error);
        res.status(500).json({
            message: "there was an error when fetching cars"
        });
    }
};

export const readCarsByDescriptionSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log("Search", req.params.search);
        const cars = await CarDao.readCarsByDescriptionSearch("%" + req.params.search + "%");
        res.status(200).json(cars);
    }
    catch(error) {
        console.log("[cars.controller][readCarsByDescriptionSearch][Error]", error);
        res.status(500).json({
            message: "there was an error when fetching cars"
        });
    }
};

export const createCar: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await CarDao.createCar(req.body);
        console.log("req.body", req.body);
        console.log("car", okPacket);
        res.status(200).json(okPacket);
    }
    catch(error) {
        console.log("[cars.controller][createCar][Error]", error);
        res.status(500).json({
            message: "there was an error when writing cars"
        });
    }
};

export const updateCar: RequestHandler = async (req: Request, res: Response) => {
    const carId = req.params.carId;

    try {
        const okPacket: OkPacket = await CarDao.updateCar({...req.body, carId});
        console.log("req.body", req.body);
        console.log("car", okPacket);
        res.status(200).json(okPacket);
    }
    catch(error) {
        console.log("[cars.controller][updateCar][Error]", error);
        res.status(500).json({
            message: "there was an error when updating cars"
        });
    }
};

export const deleteCar: RequestHandler = async (req: Request, res: Response) => {
    try {
        let carId = parseInt(req.params.carId as string);
        console.log("carId", carId);
        if(!Number.isNaN(carId)) {
            const response = await CarDao.deleteCar(carId);
            res.status(200).json(response);
        }
        else {
            throw new Error("Integer expected for carId");
        }
    }
    catch(error) {
        console.log("[cars.controller][deleteCar][Error]", error);
        res.status(500).json({
            message: "there was an error when deleting a car"
        });
    }
};