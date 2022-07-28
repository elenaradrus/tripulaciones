const { httpError } = require('../helpers/handleError');

const Test = require('../models/Test');

const getTests = async (req, res) => {
  try {
    const tests = await Test.find({})
      .populate('user_id', {
        nombre: 1,
        _id: 0,
      })
      .populate('categoria', {
        titulo: 1,
        imagen: 1,
        _id: 0,
      });
    res.json(tests);
  } catch (err) {
    httpError(res, err);
  }
};

const getTest = async (req, res) => {
  try {
    const testId = req.params.id;

    const test = await Test.findById(testId);

    if (!test) {
      res.status(404).json({ ok: false, msg: 'Test no encontrado' });
    }
    res.json(test);
  } catch (err) {
    httpError(res, err);
  }
};
const createTest = async (req, res) => {
  const { imagen, nombre, descripcion, nivel, valoracion, user_id, categoria } =
    req.body;

  try {
    const test = new Test({
      imagen,
      nombre,
      descripcion,
      nivel,
      valoracion,
      user_id,
      categoria,
    });
    test.save().then(() => {
      res.status(200).json({ ok: true, msg: 'Test creado correctamente' });
    });
  } catch (err) {
    httpError(res, err);
  }
};
const updateTest = async (req, res) => {
  try {
    const testId = req.params.id;

    const test = await Test.findById(testId);

    if (!test) {
      res.status(404).json({ ok: false, msg: 'Test no encontrado' });
    }

    const newTest = {
      ...req.body,
    };
    await Test.findByIdAndUpdate(testId, newTest, {
      new: true,
    });
    res.status(200).json({ ok: true, msg: 'Test actualizado correctamente' });
  } catch (err) {
    httpError(res, err);
  }
};
const deleteTest = async (req, res) => {
  try {
    const testId = req.params.id;

    const test = await Test.findById(testId);

    if (!test) {
      res.status(404).json({ ok: false, msg: 'Test no encontrado' });
    }

    await Test.findByIdAndDelete(testId);
    res.json({ ok: true, msg: 'Test eliminado correctamente' });
  } catch (err) {
    httpError(res, err);
  }
};

module.exports = {
  getTests,
  getTest,
  createTest,
  updateTest,
  deleteTest,
};
