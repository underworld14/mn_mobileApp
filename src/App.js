import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Screens from './screens';

import theme from './theme/index';

function App() {
  return (
    <PaperProvider theme={theme}>
      <Screens />
    </PaperProvider>
  );
}

export default App;
