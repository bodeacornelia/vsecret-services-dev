import * as React from 'react';
import { AppBar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { HEADER_HEIGHT } from '../../../../constants/EnvironmentConstants';
import Toolbar from '@material-ui/core/Toolbar';
import { Logo } from '../../../../components/Typography';
import Button from '../../../../components/Button';
import Search from '../Search';

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  header: {
    gridArea: 'header',
    backgroundColor: 'white',
    color: 'black',
  },
  toolBar: {
    display: 'flex',
    minHeight: `${HEADER_HEIGHT}px`
  },
  actions: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  }
});

interface IProps {
  classes: any;
}

class Header extends React.Component<IProps, {}> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.header}>
          <Toolbar>
            <div className={classes.grow}><Logo /> </div>
            <Search />
            <div className={classes.actions}>
              <Button color="inherit" value="Login" />
              <Button color="inherit" value="Register" />
            </div>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
