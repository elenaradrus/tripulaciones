const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// El esquema
const preguntaSchema = new Schema(
  {
    imagen: { type: String },
    texto: { type: String },
    opcion1: { type: String },
    opcion2: { type: String },
    opcion3: { type: String },
    opcion4: { type: String },
    respuesta: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// El modelo
const Pregunta = model('Pregunta', preguntaSchema);

module.exports = Pregunta;
