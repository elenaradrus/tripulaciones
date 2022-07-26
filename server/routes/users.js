const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/users.controller');

router.get('/', getUsers);
router.get('/:id', getUser);
router.post(
  '/',
  [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'Password entre 6 y 12 caracteres').isLength({
      min: 6,
      max: 20,
    }),
    validarCampos,
  ],
  createUser
);

router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
module.exports = router;
