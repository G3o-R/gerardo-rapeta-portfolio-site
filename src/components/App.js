import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import HomePage from './pages/HomePage';
import DraggableMenu from './DraggableMenu';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <DraggableMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
