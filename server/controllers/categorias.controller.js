const { httpError } = require('../helpers/handleError');

const Categoria = require('../models/Categoria');

const getCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find({});
    res.json(categorias);
  } catch (err) {
    httpError(res, err);
  }
};

const getCategoria = async (req, res) => {
  try {
    const categoriaId = req.params.id;

    const categoria = await Categoria.findById(categoriaId);

    if (!categoria) {
      res.status(404).json({ ok: false, msg: 'Categoria no encontrado' });
    }
    res.json(categoria);
  } catch (err) {
    httpError(res, err);
  }
};
const createCategoria = async (req, res) => {
  const { titulo, imagen, icono } = req.body;

  try {
    const categoria = new Categoria({
      titulo,
      imagen,
      icono
    });
    categoria.save().then(() => {
      res.status(200).json({ ok: true, msg: 'Categoría creada correctamente' });
    });
  } catch (err) {
    httpError(res, err);
  }
};
const updateCategoria = async (req, res) => {
  try {
    const categoriaId = req.params.id;

    const categoria = await Categoria.findById(categoriaId);

    if (!categoria) {
      res.status(404).json({ ok: false, msg: 'Categoría no encontrado' });
    }

    const newCategoria = {
      ...req.body,
    };
    await Categoria.findByIdAndUpdate(categoriaId, newCategoria, {
      new: true,
    });
    res
      .status(200)
      .json({ ok: true, msg: 'Categoria actualizado correctamente' });
  } catch (err) {
    httpError(res, err);
  }
};
const deleteCategoria = async (req, res) => {
  try {
    const categoriaId = req.params.id;

    const categoria = await Categoria.findById(categoriaId);

    if (!categoria) {
      res.status(404).json({ ok: false, msg: 'Categoria no encontrado' });
    }

    await Categoria.findByIdAndDelete(categoriaId);
    res.json({ ok: true, msg: 'Categoria eliminada correctamente' });
  } catch (err) {
    httpError(res, err);
  }
};

module.exports = {
  getCategorias,
  getCategoria,
  createCategoria,
  updateCategoria,
  deleteCategoria,
};
