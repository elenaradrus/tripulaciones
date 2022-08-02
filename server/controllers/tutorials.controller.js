const { httpError } = require('../helpers/handleError');
const jwt = require('jsonwebtoken');
const Tutorial = require('../models/Tutorial');
const User = require('../models/User');

const getTutorials = async (req, res) => {
  try {
    const tutorials = await Tutorial.find({});
    res.json(tutorials);
  } catch (err) {
    httpError(res, err);
  }
};

const getTutorial = async (req, res) => {
  try {
    const tutorialId = req.params.id;

    const tutorial = await Tutorial.findById(tutorialId);

    if (!tutorial) {
      res.status(404).json({ ok: false, msg: 'Tutorial no encontrado' });
    }
    res.json(tutorial);
  } catch (err) {
    httpError(res, err);
  }
};
const createTutorial = async (req, res) => {
  const { titulo, subtitulo, media } = req.body;

  try {
    const tutorial = new Tutorial({
      titulo,
      subtitulo,
      media,
    });
    tutorial.save().then(() => {
      res.status(200).json({ ok: true, msg: 'Tutorial creado correctamente' });
    });
  } catch (err) {
    httpError(res, err);
  }
};
const updateTutorial = async (req, res) => {
  try {
    const tutorialId = req.params.id;

    const tutorial = await Tutorial.findById(tutorialId);

    if (!tutorial) {
      res.status(404).json({ ok: false, msg: 'Tutorial no encontrado' });
    }

    const newTutorial = {
      ...req.body,
    };
    await Tutorial.findByIdAndUpdate(tutorialId, newTutorial, {
      new: true,
    });
    res
      .status(200)
      .json({ ok: true, msg: 'Tutorial actualizado correctamente' });
  } catch (err) {
    httpError(res, err);
  }
};
const deleteTutorial = async (req, res) => {
  try {
    const tutorialId = req.params.id;

    const tutorial = await Tutorial.findById(tutorialId);

    if (!tutorial) {
      res.status(404).json({ ok: false, msg: 'Tutorial no encontrado' });
    }

    await Tutorial.findByIdAndDelete(tutorialId);
    res.json({ ok: true, msg: 'Tutorial eliminado correctamente' });
  } catch (err) {
    httpError(res, err);
  }
};

module.exports = {
  getTutorials,
  getTutorial,
  createTutorial,
  updateTutorial,
  deleteTutorial,
};
