import express, { Request, Response } from "express";
import carsRouter from "./cars/cars.routes";
import logger from "./middleware/logger.middleware";
import cors from "cors";
import helmet from "helmet"
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

//enable all cors request
app.use(cors());

//parse JSON bodies
app.use(express.json());

//parse URL-encoded bodies
app.use(express.urlencoded({ extended: true}));

//adding set of security middleware
app.use(helmet());

console.log(process.env.MY_SQL_DB_HOST);

if(process.env.NODE_ENV == "development") {
    //add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + " in dev mode");
}

//application routes
//root route
app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Welcome to the Car Catalog API</h1>");
});

//adding router middleware
app.use("/", [carsRouter]);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});