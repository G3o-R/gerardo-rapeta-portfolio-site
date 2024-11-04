import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SpeedInterviewPage from './pages/SpeedInterviewPage';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/SpeedInterview" element={<SpeedInterviewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
