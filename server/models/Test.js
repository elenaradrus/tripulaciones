const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// El esquema
const testSchema = new Schema(
  {
    imagen: { type: String },
    nombre: { type: String },
    descripcion: { type: String },
    nivel: { type: String },
    valoracion: { type: String },
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    categoria: { type: Schema.Types.ObjectId, ref: 'Categoria' },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// El modelo
const Test = model('Test', testSchema);

module.exports = Test;
