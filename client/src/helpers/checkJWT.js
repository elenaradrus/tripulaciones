export const checkJWT = async () => {
  const miURL = 'http://localhost:443/auth/revToken';
  try {
    const tokenLS = await localStorage.getItem('token');
    if (tokenLS) {
      const token = tokenLS.substring(1, tokenLS.length - 1);
      const resp = await fetch(miURL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await resp.json();

      localStorage.setItem('token', JSON.stringify(data.token));

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
