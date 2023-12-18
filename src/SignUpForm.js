import React from 'react';
import TextInput from './TextInput.js';
import styles from './SignUpForm.module.css';
import {Lock, Mail, User} from 'react-feather';

function SignUpForm() {
    const [username,setUsername]=React.useState('');
    const [email,setEmail]=React.useState('');
    const [password,setPassword]=React.useState('');

    const formWrapperStyles={
      height:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    }
    function handleSignUp(){
      console.log(password,email,username);

    }
  return (
    <div style={formWrapperStyles}>
      <form className={styles.form} onSubmit={handleSignUp}>
        <h1>Register</h1>
        <TextInput
           required={true}
           data-test-id="login-email-field"
           placeholder="Username"
           type="text"
           icon={<User/>}
           value={username}
           onChange={(event) => {
             setUsername(event.target.value);
           }}/>
      
        <TextInput
           required={true}
           data-test-id="login-email-field"
           placeholder="Email"
           type="email"
           value={email}
           icon={<Mail/>}
           onChange={(event) => {
             setEmail(event.target.value);
           }}/>
        <TextInput
           required={true}
           data-test-id="login-email-field"
           placeholder="Password"
           type="password"
           value={password}
           icon={<Lock/>}
           onChange={(event) => {
             setPassword(event.target.value);
           }}/>
          <button>
               Submit
          </button>
      </form>
    </div>
  );
}

export default SignUpForm;