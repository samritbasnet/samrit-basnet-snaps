import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Photos from './components/Gallery/Photos';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Tags from './components/Tags/Tags';
import { API_KEY, BASE_URL } from './config';
import { HomePage } from './pages/Home/Home';
import { PhotoPage } from './pages/PhotoDetails/PhotoPage';
function App() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [isTagsPanelOpen, setIsTagsPanelOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}${API_KEY}`);
        console.log(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  return (
    <Router>
      <Navbar togglePanelOpen={togglePanelOpen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photo/:id" element={<PhotoPage />} />
      </Routes>

      <main className="content">
        {isTagsPanelOpen && (
          <div className="content__tag">
            <Tags selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
          </div>
        )}
        <section className="content__body">
          <Hero />
          <Photos selectedTag={selectedTag} isTagsPanelOpen={isTagsPanelOpen} />
        </section>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
