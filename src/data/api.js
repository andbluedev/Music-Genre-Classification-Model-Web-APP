import { getTokenValue } from './auth/token';

export const HttpMethods = {
  POST: 'POST',
  GET: 'GET',
  DELETE: 'DELETE',
  PUT: 'PUT',
  PATCH: 'PATH'
};

export const HttpStatusCode = {
  OK: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  SERVER_ERROR: 500,
  SERVICE_DOWN: 503
};

export async function api(path, method, body, authorize = true) {
  const headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  if (authorize) {
    let token = getTokenValue();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', `Bearer ${token}`);
  }
  const res = await fetch(process.env.REACT_APP_API_URI + path, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });

  return { statusCode: res.status, payload: await res.json() };
}

export async function get(path, authorized = true) {
  return api(path, HttpMethods.GET, undefined, authorized);
}

export async function del(path) {
  return api(path, HttpMethods.DELETE, undefined);
}

export async function post(path, body, authorized = true) {
  return api(path, HttpMethods.POST, body, authorized);
}

export async function put(path, body) {
  return api(path, HttpMethods.PUT, body);
}

export async function patch(path, body) {
  return api(path, HttpMethods.PATCH, body);
}
