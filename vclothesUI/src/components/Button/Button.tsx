import * as React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme: any) => ({
  button: {
    margin: theme.spacing.unit,
  },
});

interface IProps {
  classes: any;
  value: string;
  variant?: any;
  color?: any;
}

const ButtonComponent = ({ classes, value, variant, color = "primary" }: IProps) => (
  <Button
    variant={variant && variant}
    className={classes.button}
    color={color}
  >
    {value}
  </Button>
);

export default withStyles(styles)(ButtonComponent);