const jwt = require('jsonwebtoken');

const generarJWT = async (user_id, nombre) => {
  return new Promise((resolve, reject) => {
    const payload = { user_id, nombre };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: '2h',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('No se pudo generar el token');
        }
        resolve(token);
      }
    );
  });
};

module.exports = { generarJWT };
