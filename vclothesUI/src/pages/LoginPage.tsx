import * as React from 'react';
import LoginContainer from '../modules/Auth/containers/LoginContainer';
import LoginLayout from '../layout/LoginLayout';

const LoginPage = (props: any) => (
  <LoginLayout
    render={
      <LoginContainer {...props} />
    }
  />);

export default LoginPage;
