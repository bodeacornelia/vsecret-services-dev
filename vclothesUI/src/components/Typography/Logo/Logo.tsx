import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme: any) => ({
  logo: {
    fontFamily: 'Alegreya SC',
  },
});

interface IProps {
  classes: any;
}

const LogoComponent = ({ classes }: IProps) => (
  <Typography variant="h5" className={classes.logo}>
    Viorica's Secret
  </Typography>
);

export default withStyles(styles)(LogoComponent);
