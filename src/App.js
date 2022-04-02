import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import RoutesNavigation from './routes';

function App() {
  return (
    <BrowserRouter>
      <RoutesNavigation/>
    </BrowserRouter>
  );
}

export default App;
