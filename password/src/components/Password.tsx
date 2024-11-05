import React, { useState } from 'react';
import './Password.css'

function Password() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const validatePassword = () => {
    const minCharacters = 6;

    // Regex pattern for matching special characters
    const specialCharacters = /[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/;

    // Regex for matching uppercase character
    const upper = /[A-Z]/;

    // Regex for matching lowercase character
    const lower = /[a-z]/;

    // Regex for matching number
    const number = /[0-9]/;

    if (password.length < minCharacters) {
      setError(`Password must be at least ${minCharacters} characters long.`);
      setSuccess(false);
      return;
    }
    if (!upper.test(password)) {
      setError('Password must contain at least one uppercase character.');
      setSuccess(false);
      return;
    }
    if (!lower.test(password)) {
      setError('Password must contain at least one lowercase character.');
      setSuccess(false);
      return;
    }
    if (!number.test(password)) {
      setError('Password must contain at least one number.');
      setSuccess(false);
      return;
    }
    if (!specialCharacters.test(password)) {
      setError('Password must contain at least one special character.');
      setSuccess(false);
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setSuccess(false);
      return;
    }

    setError('');
    setSuccess(true);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    validatePassword();
  };

  return (
    <div className='password-container'>
      <h2>Password Validation</h2>
      <form onSubmit={handleSubmit}>
        <div className='password-input'>
          <label htmlFor='password'>Password:</label>
          <input
            type="password"
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='confirm-password'>
          <label htmlFor='confirmPassword'>Confirm Password:</label>
          <input
            type="password"
            id='confirmPassword'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className='validation-msg'>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">Password is valid!</p>}
      </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Password;