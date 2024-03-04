import express from "express";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import { validateBody } from "../helpers/validateBody.js";
import { createFarmacyAncSchema } from "../models/farmacyAncModel.js";
import { isValidId } from "../helpers/isValidId.js";
import {
  getAllMedicines,
  getOneMedicine,
  createMedicine,
} from "../controllers/farmacyAncControllers.js";

const farmacyAncRouter = express.Router();

farmacyAncRouter.get("/", ctrlWrapper(getAllMedicines));
farmacyAncRouter.get("/:id", isValidId, ctrlWrapper(getOneMedicine));

farmacyAncRouter.post(
  "/",
  validateBody(createFarmacyAncSchema),
  ctrlWrapper(createMedicine)
);

export default farmacyAncRouter;
