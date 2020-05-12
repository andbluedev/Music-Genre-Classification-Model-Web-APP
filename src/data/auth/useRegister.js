import { useMemo, useState } from 'react';
import { HttpStatusCode, post } from '../api';

export function useRegister() {
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [confirmPassword, _setConfirmPassword] = useState('');
  const [password, _setPassword] = useState('');
  const [mail, _setMail] = useState('');

  // Computed methods
  const isFormValid = useMemo(() => password.length > 0 && mail.length > 0, [
    mail,
    password
  ]);

  // Midewear for form value change to clear error message
  const setPassword = (value) => {
    if (password === '') setMessage('');
    return _setPassword(value);
  };
  const setMail = (value) => {
    if (mail === '') setMessage('');
    return _setMail(value);
  };
  const setConfirmPassword = (value) => {
    if (mail === '') setMessage('');
    return _setConfirmPassword(value);
  };

  /**
   * Custom error messages
   * @returns {boolean}
   */
  const validateForm = () => {
    const mailRegex = new RegExp('^(.+)@isep.fr$');

    if (!mailRegex.test(mail)) {
      setIsError(true);
      setMessage('Veuillez utiliser une addresse mail ISEP valide.');
      return false;
    }
    if (mail.length > 0 && password.length > 0 && password === confirmPassword) {
      setMessage('Chargement, la requête de création de compte a été envoyée.');
      setIsError(false);
      return true;
    }
    setIsError(true);
    if (password.length === 0 || confirmPassword.length === 0) {
      setMessage('Il manque le mot-de-passe et/ou sa confirmation.');
      return false;
    }
    if (password !== confirmPassword) {
      setMessage('Les mots-de-passe ne sont pas identiques');
      return false;
    }
    return false;
  };

  const submitLogin = () => {
    if (validateForm()) {
      setMessage('');
      setIsLoading(true);
      post(
        '/account/register',
        {
          mail,
          password
        },
        false
      )
        .then((result) => {
          if (result.statusCode === HttpStatusCode.OK) {
            setIsError(false);

            return setMessage(
              'Compte a bien été crée. Vous pouvez dès à présent vous connecter.'
            );
          }

          setIsError(true);
          if (result.statusCode === HttpStatusCode.BAD_REQUEST) {
            return setMessage('Cet utilisateur est déjà enregistré.');
          } else {
            return setMessage('Oups...erreur côté serveur.');
          }
        })
        .catch(() => {
          setMessage(
            "Quelque chose de pas prévu s'est passé! (veuillez le signaler)"
          );
          setIsError(true);
        })
        .finally(() => {
          _setPassword('');
          _setConfirmPassword('');
          _setMail('');
          setIsLoading(false);
        });
    }
  };

  return {
    isFormValid,
    isLoading,
    isError,
    message,
    password,
    setPassword,
    setMessage,
    username: mail,
    confirmPassword,
    setConfirmPassword,
    setUsername: setMail,
    submitRegister: submitLogin
  };
}
