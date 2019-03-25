import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';
import data from '../api.json';
import normalizedData from '../schemas/index'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducer from '../reducers/data';

console.log(normalizedData);

const initialState = {
  data: {
    ...data,
  },
  search: []
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const homeContainer = document.getElementById('home-container')

render( 
<Provider store={store}>
  <Home />
</Provider>
, homeContainer);

