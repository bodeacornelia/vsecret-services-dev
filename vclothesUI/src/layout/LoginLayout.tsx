import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Subheader } from '../components/Typography';

const styles = (theme: any) => ({
  container: {
    height: '100%',
    display: 'flex',
  },
  content: {
    width: '60%',
    padding: '3em',
    backgroundImage: 'url(../../public/assets/img/tailor.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundColor: '#F6F6F6',
  },
  formContainer: {
    width: '40%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3em',
  },
  logo: {
    fontFamily: 'Alegreya SC',
  },
});

interface IProps {
  render: any;
  classes: any;
}

class LoginLayout extends React.Component<IProps, {}> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.content}>
          <Subheader value="Viorica's Secret" className={classes.logo} />
        </div>
        <div className={classes.formContainer}>
          {this.props.render}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LoginLayout);
