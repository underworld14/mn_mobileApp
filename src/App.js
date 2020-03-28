import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from './store';
import Screens from './screens';

import theme from './theme/index';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider theme={theme}>
          <Screens />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
