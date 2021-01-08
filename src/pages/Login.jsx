import React from 'react';
import './styles/Pages.css';
import { Form, Button } from 'semantic-ui-react';

const Login = () => {
  return (
    <div className='form-container'>
      <Form noValidate>
        <h1>Login</h1>
        <Form.Input
          label='Username/Email'
          placeholder='Username or Email'
          name='username'
          type='text'
        />
        <Form.Input
          label='Password'
          placeholder='Password'
          name='password'
          type='password'
        />

        <Button type='submit' color='violet'>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
