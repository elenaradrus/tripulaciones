const express = require('express');
const router = express.Router();

const {
  getPreguntas,
  getPregunta,
  createPregunta,
  updatePregunta,
  deletePregunta,
} = require('../controllers/preguntas.controller');

router.get('/', getPreguntas);
router.get('/:id', getPregunta);
router.post('/', createPregunta);
router.put('/:id', updatePregunta);
router.delete('/:id', deletePregunta);
module.exports = router;
