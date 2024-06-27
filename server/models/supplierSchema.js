const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const supplierSchema = new Schema(
  {
    name: { type: String, required: true },
    contact: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Supplier", supplierSchema);
