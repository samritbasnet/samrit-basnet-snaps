import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Photos from '../../components/Gallery/Photos';
import Hero from '../../components/Hero/Hero';
import Tags from '../../components/Tags/Tags';
import { API_KEY, BASE_URL } from '../../config';
import './Home.scss';

const HomePage = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [isTagsPanelOpen, setIsTagsPanelOpen] = useState(false);
  const [photos, setPhotos] = useState([]);

  const togglePanelOpen = () => {
    setIsTagsPanelOpen((prev) => !prev);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}photos?api_key=${API_KEY}`
        );
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
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
        <div className="content__container">
          {photos.length > 0 ? (
            photos.map((photo) => (
              <Link
                key={photo.id}
                to={`/photo/${photo.id}`}
                className="photo-card"
              >
                <Photos photo={photo} />
              </Link>
            ))
          ) : (
            <p>Loading photos...</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
