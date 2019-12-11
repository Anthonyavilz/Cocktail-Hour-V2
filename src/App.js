import React from 'react';
import {HashRouter} from 'react-router-dom';
import allRoutes from './Routes/all-routes';

function App() {
  return (
    <HashRouter>
    <div>
      {allRoutes}
    </div>
    </HashRouter>
  );
}

export default App;
