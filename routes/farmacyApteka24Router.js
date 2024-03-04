import express from "express";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import { getAllMedicines } from "../controllers/farmacyApteka24Controllers.js";

const farmacyApteka24Router = express.Router();

farmacyApteka24Router.get("/", ctrlWrapper(getAllMedicines));


export default farmacyApteka24Router;
