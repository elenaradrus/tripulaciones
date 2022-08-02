const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');
const {
  getTutorials,
  getTutorial,
  createTutorial,
  updateTutorial,
  deleteTutorial,
} = require('../controllers/tutorials.controller');
const { validarJWT } = require('../middlewares/validarJWT');

router.get('/', getTutorials);
router.get('/:id', getTutorial);
router.post(
  '/',
  [check('titulo', 'El titulo es obligatorio').not().isEmpty(), validarCampos],
  createTutorial
);

router.put('/:id', validarJWT, updateTutorial);

router.delete('/:id', deleteTutorial);
module.exports = router;
