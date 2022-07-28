const jwt = require('jsonwebtoken');
const validarJWT = (req, res, next) => {
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
  next();
};

module.exports = { validarJWT };
