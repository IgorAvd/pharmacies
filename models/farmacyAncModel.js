import { Schema, model } from "mongoose";
import Joi from "joi";
import { handleSchemaValidationError } from "../helpers/handleSchemaValidationError.js";

const farmacyAncSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name"],
    },
    manufacturer: {
      type: String,
      required: [true, "Set manufacturer"],
    },
    price: {
      type: Number,
      unique: true,
      required: [true, "Set price"],
    },
    img: {
      type: String,
      default:
        "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    },
  },
  { versionKey: false, timestamps: true }
);

farmacyAncSchema.post("save", handleSchemaValidationError);

export const createFarmacyAncSchema = Joi.object({
  name: Joi.string().required(),
  manufacturer: Joi.string().required(),
  price: Joi.number().required(),
  img: Joi.string(),
});

export const FarmacyAncModel = model("anc24", farmacyAncSchema);
