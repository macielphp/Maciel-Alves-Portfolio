import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Works from './pages/works.jsx';
import { DataProvider } from './DataContext.jsx';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>
);