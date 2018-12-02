import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { HEADER_HEIGHT} from '../constants/EnvironmentConstants';
import Header from '../modules/Header/components/Header';

const styles = (theme: any) => ({
  container: {
    height: '100vh',
    display: 'grid',
    gridTemplateAreas: '"header" "section"',
  },
  page: {
    gridArea: 'section',
    minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
  }
});

interface IProps {
  classes: any;
}

class LandingLayout extends React.Component<IProps, {}> {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Header />
        <div className={classes.page}></div>
      </div>
    );
  }
}

export default withStyles(styles)(LandingLayout);