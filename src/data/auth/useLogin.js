import { useContext, useMemo, useState } from 'react';
import { HttpStatusCode, post } from '../api';
import { UserContext } from './UserContext';
import { UserActionType } from './reducer';
import { useHistory } from 'react-router-dom';

export function useLogin() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [password, _setPassword] = useState('');
  const [mail, _setMail] = useState('');

  const history = useHistory();
  const { dispatch } = useContext(UserContext);

  // Computed methods
  const isFormValid = useMemo(() => password.length > 0 && mail.length > 0, [
    mail,
    password
  ]);

  // Midewear for form value change to clear error message
  const setPassword = (value) => {
    if (password === '') setError('');
    return _setPassword(value);
  };
  const setMail = (value) => {
    if (mail === '') setError('');
    return _setMail(value);
  };

  const submitLogin = () => {
    setIsLoading(true);
    post(
      '/account/login',
      {
        mail,
        password
      },
      false
    )
      .then((result) => {
        if (result.statusCode === HttpStatusCode.OK) {
          history.push('/home');
          return dispatch({
            type: UserActionType.LOGIN_SUCCESS,
            payload: result.payload
          });
        }
        setError('Mot-de-passe invalide ou compte non existant');
        setPassword('');
        setMail('');
        return dispatch({ type: UserActionType.AUTH_FAILURE });
      })
      .catch(() => {
        setError("Quelque chose de non prévu s'est passé!");
        setPassword('');
        setMail('');
      })
      .finally(() => setIsLoading(false));
  };

  return {
    isFormValid,
    isLoading,
    error,
    password,
    setPassword,
    setError,
    username: mail,
    setUsername: setMail,
    submitLogin
  };
}
