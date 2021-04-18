import React, { useState, useEffect } from 'react';
import styles from './Login.module.css';
import { Button, FormControl, TextField, Typography } from '@material-ui/core';
import { auth } from './firebase';

const Login: React.FC = (props: any) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user && props.history.push('/');
    });
  }, [props.histroy]);

  return (
    <div>
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      <br />
      <FormControl>
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          name="email"
          label="E-mail"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />
      </FormControl>
      <br />
      <FormControl>
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />
      </FormControl>
      <br />
      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={
          isLogin
            ? async () => {
                try {
                  await auth.signInWithEmailAndPassword(email, password);
                  props.history.push('/');
                } catch (error) {
                  alert(error.message);
                }
              }
            : async () => {
                try {
                  await auth.createUserWithEmailAndPassword(email, password);
                  props.history.push('/');
                } catch (error) {
                  alert(error.message);
                }
              }
        }
      >
        {isLogin ? 'login' : 'register'}
      </Button>
    </div>
  );
};

export default Login;
