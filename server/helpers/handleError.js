const httpError = (res, err) => {
  res.status(500);
  res.send({ ok: false, msg: 'Algo ocurrió' });
};
module.exports = { httpError };
