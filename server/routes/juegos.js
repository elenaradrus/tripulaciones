const express = require('express');
const router = express.Router();

const {
  getJuegos,
  getJuego,
  createJuego,
  updateJuego,
  deleteJuego,
} = require('../controllers/juegos.controller');

router.get('/', getJuegos);
router.get('/:id', getJuego);
router.post('/', createJuego);
router.put('/:id', updateJuego);
router.delete('/:id', deleteJuego);
module.exports = router;
