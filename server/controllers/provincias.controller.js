const { httpError } = require('../helpers/handleError');

const Provincia = require('../models/Provincia');

const getProvincias = async (req, res) => {
  try {
    const provincias = await Provincia.find({});
    res.json(provincias);
  } catch (err) {
    httpError(res, err);
  }
};

const getProvincia = async (req, res) => {
  try {
    const provinciaId = req.params.id;

    const provincia = await Provincia.findById(provinciaId);

    if (!provincia) {
      res.status(404).json({ ok: false, msg: 'Provincia no encontrado' });
    }
    res.json(provincia);
  } catch (err) {
    httpError(res, err);
  }
};

module.exports = {
  getProvincias,
  getProvincia,
};
