const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');
const {
  getTallers,
  getTaller,
  createTaller,
  updateTaller,
  deleteTaller,
  inscripcionTaller,
} = require('../controllers/tallers.controller');
const { validarJWT } = require('../middlewares/validarJWT');

router.get('/', getTallers);
router.get('/:id', getTaller);
router.post(
  '/',
  [check('nombre', 'El nombre es obligatorio').not().isEmpty(), validarCampos],
  createTaller
);

router.put('/:id', validarJWT, updateTaller);
router.put('/inscription/:id', validarJWT, inscripcionTaller);

router.delete('/:id', deleteTaller);
module.exports = router;
