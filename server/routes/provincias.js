const express = require('express');
const router = express.Router();

const {
  getProvincias,
  getProvincia,
} = require('../controllers/provincias.controller');

router.get('/', getProvincias);
router.get('/:id', getProvincia);

module.exports = router;
