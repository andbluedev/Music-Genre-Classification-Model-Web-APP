import { useContext, useMemo, useState } from 'react';
import { HttpStatusCode, post } from '../api';
import { UserContext } from './UserContext';
import { UserActionType } from './reducer';
import { useHistory } from 'react-router-dom';

export function useLogin() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [password, _setPassword] = useState('');
  const [username, _setUsername] = useState('');

  const history = useHistory();
  const { dispatch } = useContext(UserContext);

  // Computed methods
  const isFormValid = useMemo(() => password.length > 0 && username.length > 0, [
    username,
    password
  ]);

  // Midewear for form value change to clear error message
  const setPassword = (value) => {
    if (password === '') setError('');
    return _setPassword(value);
  };
  const setUsername = (value) => {
    if (username === '') setError('');
    return _setUsername(value);
  };

  const submitLogin = () => {
    setIsLoading(true);
    post('/auth/login', {
      username,
      password
    })
      .then((result) => {
        if (result.statusCode === HttpStatusCode.OK) {
          history.push('/home');
          return dispatch({
            type: UserActionType.LOGIN_SUCCESS,
            payload: result.payload
          });
        }
        setError('Mot-de-passe invalide ou compte non existant');
        return dispatch({ type: UserActionType.AUTH_FAILURE });
      })
      .catch(() => setError("Quelque chose de non prévu s'est passé!"))
      .finally(() => setIsLoading(false));
  };

  return {
    isFormValid,
    isLoading,
    error,
    password,
    setPassword,
    username,
    setUsername,
    submitLogin
  };
}
