const tokenKey = 'userToken';

export const getTokenValue = () => localStorage.getItem(tokenKey);

export const setTokenValue = (value) => localStorage.setItem(tokenKey, value);

export const removeToken = () => localStorage.removeItem(tokenKey);
