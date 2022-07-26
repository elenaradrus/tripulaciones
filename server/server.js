require('dotenv').config();

const path = require('path');
const express = require('express');
const cors = require('cors');
const router = express();
const { dbConnect } = require('./database/mongo');

const PORT = process.env.PORT || 433;
router.use(cors());
router.use(express.json());

router.use(express.static(path.join(__dirname, '/public')));
router.use(express.urlencoded({ extended: false }));

router.use(require('./routes'));

dbConnect();

router.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
