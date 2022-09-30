import { Router } from "express";
import { ConvertController } from "../controllers";


/**
 * Controllers
*/
const convertController = new ConvertController();

/**
 * Routes
*/
const routes = Router();

routes.post('/convert', convertController.get);