import express from "express";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import { validateBody } from "../helpers/validateBody.js";
import { isValidId } from "../helpers/isValidId.js";
import {
  createMedicine,
  getAllMedicines,
  getOneMedicine,
} from "../controllers/farmacyAptekaOnlineControllers.js";
import { createFarmacyAptekaOnlineSchema } from "../models/farmacyAptekaOnlineModel.js";

const farmacyAptekaOnlineRouter = express.Router();

farmacyAptekaOnlineRouter.get("/", ctrlWrapper(getAllMedicines));
farmacyAptekaOnlineRouter.get("/:id", isValidId, ctrlWrapper(getOneMedicine));

farmacyAptekaOnlineRouter.post(
  "/",
  validateBody(createFarmacyAptekaOnlineSchema),
  ctrlWrapper(createMedicine)
);

export default farmacyAptekaOnlineRouter;
