import { farmacyAptekaOnlineModel } from "../models/farmacyAptekaOnlineModel.js";

export const getAllMedicines = async (_, res) => {
  const medicines = await farmacyAptekaOnlineModel.find(
    {},
    "-createdAt -updatedAt"
  );
  res.json(medicines);
};

export const getOneMedicine = async (req, res) => {
  const { id } = req.params;
  const result = await farmacyAptekaOnlineModel.findById(
    id,
    "-createdAt -updatedAt"
  );
  if (!result) {
    throw HttpError(404, `Medicine with id=${id} not found`);
  }
  res.json(result);
};

export const createMedicine = async (req, res) => {
  const result = await farmacyAptekaOnlineModel.create(req.body);
  res.status(201).json(result);
};
