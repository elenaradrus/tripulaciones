const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// El esquema
const tallerSchema = new Schema(
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
const Taller = model('Taller', tallerSchema);

module.exports = Taller;
