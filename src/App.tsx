import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import Routes from './routes';
import dark from './shared/themes/dark';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ThemeProvider theme={dark}>
        <Routes />
      </ThemeProvider>
    </>
  );
};

export default App;
