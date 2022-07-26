const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// El esquema
const userSchema = new Schema(
  {
    nombre: { type: String },
    apellidos: { type: String },
    email: { type: String },
    password: { type: String },
    direccion: { type: String },
    telefono: { type: String },
    role: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// El modelo
const User = model('User', userSchema);

module.exports = User;
