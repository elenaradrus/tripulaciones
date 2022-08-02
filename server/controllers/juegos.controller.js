const { httpError } = require('../helpers/handleError');

const Juego = require('../models/Juego');

const getJuegos = async (req, res) => {
  try {
    const juegos = await Juego.find({});
    res.json(juegos);
  } catch (err) {
    httpError(res, err);
  }
};

const getJuego = async (req, res) => {
  try {
    const juegoId = req.params.id;

    const juego = await Juego.findById(juegoId);

    if (!juego) {
      res.status(404).json({ ok: false, msg: 'Juego no encontrado' });
    }
    res.json(juego);
  } catch (err) {
    httpError(res, err);
  }
};
const createJuego = async (req, res) => {
  const {
    titulo_juego,
    nivel_juego,
    descripcion_juego,
    imagen_juego,
    instrucciones_juego,
    categorias,
    promedio_valoracion,
  } = req.body;

  try {
    const juego = new Juego({
      titulo_juego,
      nivel_juego,
      descripcion_juego,
      imagen_juego,
      instrucciones_juego,
      categorias,
      promedio_valoracion,
    });
    juego.save().then(() => {
      res.status(200).json({ ok: true, msg: 'Categoría creada correctamente' });
    });
  } catch (err) {
    httpError(res, err);
  }
};
const updateJuego = async (req, res) => {
  try {
    const juegoId = req.params.id;

    const juego = await Juego.findById(juegoId);

    if (!juego) {
      res.status(404).json({ ok: false, msg: 'Juego no encontrado' });
    }

    const newJuego = {
      ...req.body,
    };
    await Juego.findByIdAndUpdate(juegoId, newJuego, {
      new: true,
    });
    res.status(200).json({ ok: true, msg: 'Juego actualizado correctamente' });
  } catch (err) {
    httpError(res, err);
  }
};
const deleteJuego = async (req, res) => {
  try {
    const juegoId = req.params.id;

    const juego = await Juego.findById(juegoId);

    if (!juego) {
      res.status(404).json({ ok: false, msg: 'Juego no encontrado' });
    }

    await Juego.findByIdAndDelete(juegoId);
    res.json({ ok: true, msg: 'Juego eliminada correctamente' });
  } catch (err) {
    httpError(res, err);
  }
};

module.exports = {
  getJuegos,
  getJuego,
  createJuego,
  updateJuego,
  deleteJuego,
};
