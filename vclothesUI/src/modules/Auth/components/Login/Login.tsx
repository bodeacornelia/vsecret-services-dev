import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import TextField from '../../../../components/TextField';
import Link from '../../../../components/Link';
import Header from '../../../../components/Typography/Header';

const styles = (theme: any) => ({
  form: {
    height: '60%',
    width: '80%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '	#5B7265',
    marginBottom: '50px',
  },
  button: {
    marginTop: '3em',
    marginBottom: '2em',
    width: '182px',
    fontSize: '17px',
    backgroundColor: '#2597d7',
  },
});

interface IProps {
  classes: any;
  login(data: any): void;
}

class Login extends React.Component<IProps, {}> {
  state = {
    email: '',
    password: '',
  };

  handleChange = (name: string) => (event: any) => {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    const data = {
      email,
      password,
    };

    this.props.login(data);
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.form}>
        <Header value="Login to your account" className={classes.title} />
        <TextField
          id="email"
          label="Email"
          type="email"
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
          required
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange('password')}
          margin="normal"
          required
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleSubmit}
        >
          LOGIN
        </Button>
        <Link path="/" value="Forgot your password?" />
      </form>

    );
  }
}

export default withStyles(styles)(Login);
