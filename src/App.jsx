import { useState } from 'react';
import './App.scss';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
function App() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [isTagsPanelOpen, setIsTagsPanelOpen] = useState(false);
  const togglePanelOpen = () => {
    setIsTagsPanelOpen((prev) => !prev);
  };
  return (
    <>
      <Navbar togglePanelOpen={togglePanelOpen} />
      <Hero/>
    </>
  );
}

export default App;
