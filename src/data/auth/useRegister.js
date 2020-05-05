import { useMemo, useState } from 'react';
import { HttpStatusCode, post } from '../api';

export function useRegister() {
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  const [password, _setPassword] = useState('');
  const [mail, _setMail] = useState('');

  // Computed methods
  const isFormValid = useMemo(() => password.length > 0 && mail.length > 0, [
    mail,
    password
  ]);

  const passwordsUnMatch = useMemo(
    () => password.length > 0 && password === confirmPassword > 0,
    [confirmPassword, password]
  );

  // Midewear for form value change to clear error message
  const setPassword = (value) => {
    if (password === '') setMessage('');
    return _setPassword(value);
  };
  const setMail = (value) => {
    if (mail === '') setMessage('');
    return _setMail(value);
  };

  const submitLogin = () => {
    setMessage('');
    setIsLoading(true);
    setIsError(false);
    post(
      '/account/register',
      {
        mail,
        password
      },
      false
    )
      .then((result) => {
        if (result.statusCode === HttpStatusCode.CREATED) {
          setMail(
            'Compte a bien été crée. Vous pouvez dès à présent vous connecter.'
          );
        } else {
          setMessage('Problème de saisie');
          setPassword('');
          setMail('');
        }
      })
      .catch(() => {
        setMessage("Quelque chose de non prévu s'est passé!");
        setIsError(true);
        setPassword('');
        setMail('');
      })
      .finally(() => setIsLoading(false));
  };

  return {
    isFormValid,
    isLoading,
    isError,
    message,
    password,
    setPassword,
    setError: setMessage,
    username: mail,
    passwordsUnmatch: passwordsUnMatch,
    confirmPassword,
    setConfirmPassword,
    setUsername: setMail,
    submitRegister: submitLogin
  };
}
