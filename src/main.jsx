import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Works from './pages/works.jsx'
const root = document.getElementById('root');
import { DataProvider } from './DataContext.jsx'
import './translation/i18n'

ReactDOM.createRoot(root).render(
  <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/works" element={ <Works /> } />
      </Routes>
    </BrowserRouter>
  </DataProvider>
)
