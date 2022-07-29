const { httpError } = require('../helpers/handleError');

const Pregunta = require('../models/Pregunta');

const getPreguntas = async (req, res) => {
  try {
    const preguntas = await Pregunta.find({});

    res.json(preguntas);
  } catch (err) {
    httpError(res, err);
  }
};

const getPregunta = async (req, res) => {
  try {
    const preguntaId = req.params.id;

    const pregunta = await Pregunta.findById(preguntaId);

    if (!pregunta) {
      res.status(404).json({ ok: false, msg: 'pregunta no encontrado' });
    }
    res.json(pregunta);
  } catch (err) {
    httpError(res, err);
  }
};
const createPregunta = async (req, res) => {
  const { detalle, texto, opcion1, opcion2, opcion3, opcion4, respuesta } =
    req.body;

  try {
    const pregunta = new Pregunta({
      detalle,
      texto,
      opcion1,
      opcion2,
      opcion3,
      opcion4,
      respuesta,
    });
    pregunta.save().then(() => {
      res.status(200).json({ ok: true, msg: 'Pregunta creada correctamente' });
    });
  } catch (err) {
    httpError(res, err);
  }
};
const updatePregunta = async (req, res) => {
  try {
    const preguntaId = req.params.id;

    const pregunta = await Pregunta.findById(preguntaId);

    if (!pregunta) {
      res.status(404).json({ ok: false, msg: 'Pregunta no encontrado' });
    }

    const newPregunta = {
      ...req.body,
    };
    await Pregunta.findByIdAndUpdate(preguntaId, newPregunta, {
      new: true,
    });
    res
      .status(200)
      .json({ ok: true, msg: 'Pregunta actualizada correctamente' });
  } catch (err) {
    httpError(res, err);
  }
};
const deletePregunta = async (req, res) => {
  try {
    const preguntaId = req.params.id;

    const pregunta = await Pregunta.findById(preguntaId);

    if (!pregunta) {
      res.status(404).json({ ok: false, msg: 'Pregunta no encontrada' });
    }

    await Pregunta.findByIdAndDelete(preguntaId);
    res.json({ ok: true, msg: 'Pregunta eliminada correctamente' });
  } catch (err) {
    httpError(res, err);
  }
};

module.exports = {
  getPreguntas,
  getPregunta,
  createPregunta,
  updatePregunta,
  deletePregunta,
};
