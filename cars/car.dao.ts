import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { carQueries } from "./cars.queries";
import { Car } from "./cars.model";

export const readCars = async () => {
    return execute<Car[]>(carQueries.readCars, []);
};

// export const readCarsByModel = async (carMake: string) => {
//     return execute<Car[]>(carQueries.readCarsByModel, [carMake]);
// };

export const readCarsByModelSearch = async (search: string) => {
    console.log("search model: ", search);
    return execute<Car[]>(carQueries.readCarsByModelSearch, [search]);
};

export const readCarsByDescriptionSearch = async (carDescription: string) => {
    console.log("search description: ", carDescription)
    return execute<Car[]>(carQueries.readCarsByDescriptionSearch, [carDescription]);
};

export const readCarsByCarID = async (carID: number) => {
    return execute<Car[]>(carQueries.readCarsByCarID, [carID]);
};

export const createCar = async (car: Car): Promise<OkPacket> => {
    return execute<OkPacket>(carQueries.createCar, [car.make, car.model, car.year, car.description, car.url]);
};

export const updateCar = async (car: Car): Promise<OkPacket> => {
    return execute<OkPacket>(carQueries.updateCar, [car.make, car.model, car.year, car.description, car.url, car.carId]);
};

export const deleteCar = async (carId: number): Promise<OkPacket> => {
    return execute<OkPacket>(carQueries.deleteCar, [carId]);
};