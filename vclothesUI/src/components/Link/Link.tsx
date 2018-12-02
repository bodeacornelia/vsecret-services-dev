import * as React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme: any) => ({
  link: {
    textDecoration: 'none',
  },
});

interface IProps {
  classes: any;
  path: string;
  value: string;
}

const LinkComponent = ({ classes, path, value }: IProps) => (
  <Link to={path} className={classes.link} >{value}</Link>
);

export default withStyles(styles)(LinkComponent);
