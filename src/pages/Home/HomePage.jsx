import axios from 'axios';
import { useEffect, useState } from 'react';
import Photos from '../../components/Gallery/Photos';
import Hero from '../../components/Hero/Hero';
import Tags from '../../components/Tags/Tags';
import { API_KEY, BASE_URL } from '../../config';
import './Home.scss';

const HomePage = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [isTagsPanelOpen, setIsTagsPanelOpen] = useState(false);
  const [photosData, setPhotosData] = useState([]);

  const togglePanelOpen = () => {
    setIsTagsPanelOpen((prev) => !prev);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}${API_KEY}`);
        setPhotosData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <main className="content">
      {isTagsPanelOpen && (
        <div className="content__tag">
          <Tags selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
        </div>
      )}
      <section className="content__body">
        <Hero />
        <Photos
          selectedTag={selectedTag}
          isTagsPanelOpen={isTagsPanelOpen}
          photos={photosData}
        />
      </section>
    </main>
  );
};

export default HomePage;
