import { Router } from "express";
import { ConvertController } from "../controllers";
import { MulterMiddleware } from "../middlewares";

/**
 * Middlewares
*/
const multerMiddlawares = new MulterMiddleware().config();

/**
 * Controllers
*/
const convertController = new ConvertController();

/**
 * Routes
*/
const routes = Router();

routes.post('/convert', multerMiddlawares, convertController.convertCsvToJson);

export { routes };
