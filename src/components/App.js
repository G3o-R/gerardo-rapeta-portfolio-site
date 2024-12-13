import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import HomePage from './pages/HomePage';
import DraggableMenu from './DraggableMenu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <DraggableMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
