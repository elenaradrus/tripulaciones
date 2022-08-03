export const getOneTest = async (id) => {
  const miURL = `${process.env.REACT_APP_URI_BASE}/tests/${id}`;
  const resp = await fetch(miURL);
  const test = await resp.json();

  return test;
};
