import { Router } from "express";
import { ConvertController } from "../controllers";

/**
 * Routes
*/
const routes = Router();

/**
 * Controllers
*/
const convertController = new ConvertController();

routes.post('/convert', convertController.get);