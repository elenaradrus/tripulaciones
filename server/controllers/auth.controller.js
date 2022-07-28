const { compare } = require('../helpers/handleBcrypt');
const { httpError } = require('../helpers/handleError');
const { generarJWT } = require('../helpers/handleJwt');
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
module.exports = { login };
