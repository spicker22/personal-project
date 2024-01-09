import { useState } from 'react';

function LoginForm({ onLogin }) {
  const [emailValue, setEmailValue] = useState('');         // Variable: value of email input field. Function: udpate 'emailvalue' state
  const [passwordValue, setPasswordValue] = useState('');   // Variable: value of password input field. Function: udpate 'password' state

  return (
    <form
      onSubmit={(e) => {
        onLogin(e, {
          email: emailValue,
          password: passwordValue,
        });
      }}
    >
      <label htmlFor="email">Email:</label>
      <input
        name="email"
        id="email"
        type="text"
        required
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        name="password"
        id="password"
        type="password"
        required
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <button type="submit" >Log In</button>        
    </form>
  );
}

export default LoginForm