const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// El esquema
const juegoSchema = new Schema(
  {
    titulo_juego: { type: String },
    nivel_juego: { type: String },
    descripcion_juego: { type: String },
    imagen_juego: { type: String },
    instrucciones_juego: { type: String },
    categorias: { type: Array },
    promedio_valoracion: { type: Number },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// El modelo
const Juego = model('Juego', juegoSchema);

module.exports = Juego;
