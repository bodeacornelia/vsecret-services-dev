import * as React from 'react';
import Typography from '@material-ui/core/Typography';

interface IProps {
  value: string;
  className?: any;
}

const Header = ({ value, ...props }: IProps) => (
  <Typography variant="h5" gutterBottom {...props}>
    {value}
  </Typography>
);

export default Header;
