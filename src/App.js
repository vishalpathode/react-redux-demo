import React from 'react';
import './App.css';
import ConnectCakeContainer from './components/ConnectCakeContainer';
import HookUseSelectorCakeContainer from './components/HookUseSelectorCakeContainer';
import HookUseDispatchCakeContainer from './components/HookUseDispatchCakeContainer';

import {Provider} from 'react-redux'
// store typically imports in app component so evey component can use if
import store from './redux/Store'

function App() {
  return (
    // we are providing store to every component
    <Provider store={store}>
      <div className="App">
        <ConnectCakeContainer></ConnectCakeContainer>
        <HookUseSelectorCakeContainer></HookUseSelectorCakeContainer>
        <HookUseDispatchCakeContainer></HookUseDispatchCakeContainer>
      </div>
    </Provider>
  );
}

export default App;
