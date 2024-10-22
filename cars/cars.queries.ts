export const carQueries = {
    readCars: "SELECT * from car_catalog.cars",
    readCarsByModel: "SELECT * from car_catalog.cars WHERE car_catalog.cars.model = ?",
    readCarsByModelSearch: "SELECT * from car_catalog.cars WHERE car_catalog.cars.model LIKE ?",
    readCarsByDescriptionSearch: "SELECT * from car_catalog.cars WHERE car_catalog.cars.description LIKE ?",
    readCarsByCarID: "SELECT * from car_catalog.cars WHERE car_catalog.cars.id = ?",
    createCar: "INSERT INTO CARS(make, model, year, description, url) VALUES(?,?,?,?,?)",
    updateCar: "UPDATE car_catalog.cars SET make = ?, model = ?, year = ?, description = ?, url = ? WHERE id = ?",
    deleteCar: "DELETE FROM car_catalog.cars WHERE id = ?"
}