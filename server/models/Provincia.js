const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// El esquema
const provinciaSchema = new Schema(
  {
    descripcion: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// El modelo
const Provincia = model('Provincia', provinciaSchema);

module.exports = Provincia;
