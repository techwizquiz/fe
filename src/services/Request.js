const request = async (path, method, body) => {
  const res = await fetch(`${process.env.API_URL}${path}`, {
    method,
    headers: body
      ? {
        'Content-Type': 'application/ json',
      }
      : null,
    body: JSON.stringify(body),
    credentials: 'include',
  });

  return res.json();
};

export const post = (path, body) => request(path, 'POST', body);
export const get = (path) => request(path, 'GET');
export const put = (path, body) => request(path, 'PUT', body);
export const del = (path) => request(path, 'DELETE');
