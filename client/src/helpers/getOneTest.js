export const getOneTest = async (id) => {
  const miURL = `http://localhost:443/tests/${id}`;
  const resp = await fetch(miURL);
  const test = await resp.json();

  return test;
};
