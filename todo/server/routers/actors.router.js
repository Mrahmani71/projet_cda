import express from "express";
import { createActorController, editActorController, getActorController, getAllActorController, loginActorController } from "../controllers/actors.controllers.js";
import isLogged from "../middlewares/auth.js";

const actorsRouter = express.Router()

actorsRouter.route('/').post(createActorController)
actorsRouter.route('/:id').put(isLogged, editActorController)
actorsRouter.route('/me').get(isLogged, getActorController)
actorsRouter.route('/all').get(isLogged, getAllActorController)
actorsRouter.route('/login').post(loginActorController)

export default actorsRouter