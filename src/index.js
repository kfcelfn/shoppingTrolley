import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'  
import { persistStore } from 'redux-persist'   
import { PersistGate } from 'redux-persist/lib/integration/react'; 
import { store } from './store'
import { renderRoutes } from 'react-router-config'
import routers from './router/index.js'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <BrowserRouter>
      {renderRoutes(routers)}
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
