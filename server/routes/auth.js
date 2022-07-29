const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const { login, revToken } = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validarCampos');

router.post(
  '/login',
  [
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'Password entre 6 y 20 caracteres').isLength({
      min: 6,
      max: 20,
    }),
    validarCampos,
  ],
  login
);
router.get('/revToken', revToken);
module.exports = router;
