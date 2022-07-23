const { encrypt } = require('../helpers/handleBcrypt');
const { httpError } = require('../helpers/handleError');

const User = require('../models/User');

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    httpError(res, err);
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ ok: false, msg: 'Usuario no encontrado' });
    }
    res.json(user);
  } catch (err) {
    httpError(res, err);
  }
};
const createUser = async (req, res) => {
  const { nombre, apellidos, email, password, direccion, telefono, role } =
    req.body;
  try {
    const user = await new User({
      nombre,
      apellidos,
      email,
      password: await encrypt(password),
      direccion,
      telefono,
      role,
    });
    user.save().then(() => {
      res.status(200).json({ ok: true, msg: 'Usuario creado correctamente' });
    });
  } catch (err) {
    httpError(res, err);
  }
};
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ ok: false, msg: 'Usuario no encontrado' });
    }

    const newUser = {
      ...req.body,
    };
    await User.findByIdAndUpdate(userId, newUser, {
      new: true,
    });
    res
      .status(200)
      .json({ ok: true, msg: 'Usuario Actualizado correctamente' });
  } catch (err) {
    httpError(res, err);
  }
};
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ ok: false, msg: 'Usuario no encontrado' });
    }

    await User.findByIdAndDelete(userId);
    res.json({ ok: true, msg: 'Usuario eliminado correctamente' });
  } catch (err) {
    httpError(res, err);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
