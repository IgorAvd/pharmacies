import HttpError from "../helpers/HttpError.js";
import { FarmacyAncModel } from "../models/farmacyAncModel.js";

export const getAllMedicines = async (_, res) => {
  const medicines = await FarmacyAncModel.find({}, "-createdAt -updatedAt");
  res.json(medicines);
};

export const getOneMedicine = async (req, res) => {
  const { id } = req.params;
  const result = await FarmacyAncModel.findById(id, "-createdAt -updatedAt");
  if (!result) {
    throw HttpError(404, `Medicine with id=${id} not found`);
  }
  res.json(result);
};

export const createMedicine = async (req, res) => {
  const result = await FarmacyAncModel.create(req.body);
  res.status(201).json(result);
};
