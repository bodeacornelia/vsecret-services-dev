import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import themeContext from './context/ThemeContext';
import { Provider } from 'react-redux'
import configureStore from './store';

const theme = createMuiTheme(themeContext);
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
