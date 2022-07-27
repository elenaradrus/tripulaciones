const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// El esquema
const testSchema = new Schema(
  {
    nombre: { type: String },
    tematica: { type: String },
    imparte: { type: String },
    fecha: { type: String },
    aforo: { type: Number },
    participantes: [{ type: String }],
    ubicacion: { type: String },
    media: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// El modelo
const Test = model('Test', testSchema);

module.exports = Test;
