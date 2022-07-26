const { httpError } = require('../helpers/handleError');
const jwt = require('jsonwebtoken');
const Taller = require('../models/Taller');
const User = require('../models/User');

const getTallers = async (req, res) => {
  try {
    const tallers = await Taller.find({});
    res.json(tallers);
  } catch (err) {
    httpError(res, err);
  }
};

const getTaller = async (req, res) => {
  try {
    const tallerId = req.params.id;

    const taller = await Taller.findById(tallerId);

    if (!taller) {
      res.status(404).json({ ok: false, msg: 'Taller no encontrado' });
    }
    res.json(taller);
  } catch (err) {
    httpError(res, err);
  }
};
const createTaller = async (req, res) => {
  const {
    nombre,
    tematica,
    imparte,
    fecha,
    aforo,
    participantes,
    ubicacion,
    media,
  } = req.body;

  try {
    const taller = new Taller({
      nombre,
      tematica,
      imparte,
      fecha,
      aforo,
      participantes,
      ubicacion,
      media,
    });
    taller.save().then(() => {
      res.status(200).json({ ok: true, msg: 'Taller creado correctamente' });
    });
  } catch (err) {
    httpError(res, err);
  }
};
const updateTaller = async (req, res) => {
  try {
    const tallerId = req.params.id;

    const taller = await Taller.findById(tallerId);

    if (!taller) {
      res.status(404).json({ ok: false, msg: 'Taller no encontrado' });
    }

    const newTaller = {
      ...req.body,
    };
    await Taller.findByIdAndUpdate(tallerId, newTaller, {
      new: true,
    });
    res.status(200).json({ ok: true, msg: 'Taller actualizado correctamente' });
  } catch (err) {
    httpError(res, err);
  }
};
const deleteTaller = async (req, res) => {
  try {
    const tallerId = req.params.id;

    const taller = await Taller.findById(tallerId);

    if (!taller) {
      res.status(404).json({ ok: false, msg: 'Taller no encontrado' });
    }

    await Taller.findByIdAndDelete(tallerId);
    res.json({ ok: true, msg: 'Taller eliminado correctamente' });
  } catch (err) {
    httpError(res, err);
  }
};
const inscripcionTaller = async (req, res) => {
  try {
    let authorization = req.get('authorization');
    token = authorization.substring(7);
    const { user_id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(user_id);

    const tallerId = req.params.id;

    const taller = await Taller.findById(tallerId);

    if (!taller) {
      res.status(404).json({ ok: false, msg: 'Taller no encontrado' });
    }
    const {
      nombre,
      tematica,
      imparte,
      fecha,
      aforo,
      participantes,
      ubicacion,
      media,
    } = req.body;
    const usuarioActual = ` ${user.nombre} ${user.apellidos} `;
    const newTaller = {
      nombre,
      tematica,
      imparte,
      fecha,
      aforo,
      participantes: [...participantes, usuarioActual],
      ubicacion,
      media,
    };
    await Taller.findByIdAndUpdate(tallerId, newTaller, {
      new: true,
    });
    res
      .status(200)
      .json({ ok: true, msg: 'Inscripción realizada correctamente' });
  } catch (err) {
    httpError(res, err);
  }
};

module.exports = {
  getTallers,
  getTaller,
  createTaller,
  updateTaller,
  deleteTaller,
  inscripcionTaller,
};
