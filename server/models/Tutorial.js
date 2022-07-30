const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// El esquema
const tutorialSchema = new Schema(
  {
    titulo: { type: String },
    subtitulo: { type: String },
    media: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// El modelo
const Tutorial = model('Tutorial', tutorialSchema);

module.exports = Tutorial;
