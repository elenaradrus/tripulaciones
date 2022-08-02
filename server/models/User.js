const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// El esquema
const userSchema = new Schema(
  {
    nombre: { type: String },
    apellidos: { type: String },
    email: { type: String },
    password: { type: String },
    telefono: { type: String },
    role: { type: String },
    provincia: { type: String },
    edad: { type: Number },
    socio: { type: String },
    futurosocio: { type: String },
    cuota: { type: String },
    nivelDig: { type: Number },
    nivelEdu: { type: Number },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// El modelo
const User = model('User', userSchema);

module.exports = User;
