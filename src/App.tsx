import './App.css';
import CssPage from './pages/css/CssPage';
import HomePage from './pages/home/HomePage';
import StyledComponentPage from './pages/styled-component/StyledComponentPage';
import { BrowserRouter, Route, Routes } from "react-router"
import TailwindPage from './pages/tailwind/TailwindPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/styled-component-page" element={<StyledComponentPage />} />
        <Route path="/css-page" element={<CssPage />} />
        <Route path="/tawind-page" element={<TailwindPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
