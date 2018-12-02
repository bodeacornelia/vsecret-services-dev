import * as React from 'react';
import { TextField } from '@material-ui/core';

const TextFieldComponent = (props: any) => (
  <TextField
    fullWidth
    {...props}
  />);

export default TextFieldComponent;
