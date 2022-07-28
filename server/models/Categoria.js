const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// El esquema
const categoriaSchema = new Schema(
  {
    titulo: { type: String },
    imagen: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// El modelo
const Categoria = model('Categoria', categoriaSchema);

module.exports = Categoria;
