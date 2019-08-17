import React from 'react';
import './App.css';
import reducers from './reducers'
import {createStore} from 'redux'
import {StoreContext} from 'redux-react-hook';
import Counter from "./counter";

const store = createStore(reducers)
function App() {
  return <StoreContext.Provider value={store}>
    <Counter name='xin'/>
  </StoreContext.Provider>

}

export default App;
