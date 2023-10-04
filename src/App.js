import React from 'react';
import { Route, Routes } from 'react-router-dom';

import WarehouseDetailsPage from './component/WarehouseDetailspage/WarehouseDetailsPage';
import Homepage from './component/Homepage/Homepage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/warehouse/:id" element={<WarehouseDetailsPage />} />
    </Routes>
  );
}

export default App;
