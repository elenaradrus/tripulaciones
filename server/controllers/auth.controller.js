const { compare } = require('../helpers/handleBcrypt');
const { httpError } = require('../helpers/handleError');
const { generarJWT } = require('../helpers/handleJwt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      const checkPassword = await compare(password, user.password);
      if (checkPassword) {
        const token = await generarJWT(user._id, user.nombre);

        res.json({
          ok: true,
          user,
          token,
        });
        return;
      } else {
        res.status(401);
        res.json({ ok: false, msg: 'Acceso denegado' });
      }
    } else {
      res.status(404).json({ ok: false, msg: 'Usuario no encontrado' });
      return;
    }
  } catch (err) {
    httpError(res, err);
  }
};
const revToken = async (req, res) => {
  let token = null;
  let authorization = req.get('authorization');

  if (authorization && authorization.startsWith('Bearer')) {
    token = authorization.substring(7);
  }
  const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
  if (!token || !decodeToken.user_id) {
    return res
      .status(401)
      .json({ ok: false, msg: 'token inexistente o no válido' });
  }
  const { user_id, nombre } = decodeToken;

  token = await generarJWT(user_id, nombre);
  try {
    res.json({ msg: 'Todo ok', token, user_id, nombre });
  } catch (err) {
    httpError(res, err);
  }
};
module.exports = { login, revToken };
