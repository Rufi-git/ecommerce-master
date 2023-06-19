import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './reducers/basketSlice';
import { Provider } from 'react-redux';
import { transitions, positions, Provider as AlertProvider, types } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';


const store = configureStore({
  reducer: basketSlice
});

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
  type:types.SUCCESS
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>,
)
