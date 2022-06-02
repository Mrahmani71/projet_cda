import express from "express";
import { createActorController, getActorController, loginActorController } from "../controllers/actors.controllers.js";
import isLogged from "../middlewares/auth.js";

const actorsRouter = express.Router()

actorsRouter.route('/').post(createActorController)
actorsRouter.route('/me').get(isLogged, getActorController)
actorsRouter.route('/login').post(loginActorController)

export default actorsRouter