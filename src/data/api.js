export async function api(path, method, body, authorize) {
  const headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Authorization', `Bearer ${authorize}`);

  const res = await fetch(process.env.REACT_APP_API_URI + path, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });

  if (!res.ok) {
    throw new Error('API error');
  }

  return res.json();
}

export async function get(path) {
  return api(path, 'GET', undefined, true);
}

export async function del(path) {
  return api(path, 'DELETE', undefined);
}

export async function post(path, body) {
  return api(path, 'POST', body, true);
}

export async function put(path, body) {
  return api(path, 'PUT', body, true);
}

export async function patch(path, body) {
  return api(path, 'PATCH', body, true);
}
