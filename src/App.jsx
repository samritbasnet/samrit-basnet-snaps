import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/Home/HomePage';
import PhotoPage from './pages/PhotoDetails/PhotoPage';

function App() {
  const [isTagsPanelOpen, setIsTagsPanelOpen] = useState(false);

  const togglePanelOpen = () => {
    setIsTagsPanelOpen((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <Navbar togglePanelOpen={togglePanelOpen} />
      <Routes>
        <Route path="/" element={<HomePage isTagsPanelOpen={isTagsPanelOpen} />} />
        <Route path="/photo/:id" element={<PhotoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
2;
