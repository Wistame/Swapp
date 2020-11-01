import 'react-native-gesture-handler';
import React from 'react'
import { Provider } from 'react-redux'
import AppContent from './src/index'
import store from './src/store'

const App = () => {
  
 return (
  <Provider store={store}>
    <AppContent/>
  </Provider>
)
};

export default App;