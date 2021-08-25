import React from 'react';
import { hydrate } from 'react-dom';
import { App } from './App';
import './index.css';

const root = document.querySelector('#__root');

hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
