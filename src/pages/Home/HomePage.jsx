import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Photos from '../../components/Gallery/Photos';
import Hero from '../../components/Hero/Hero';
import { API_KEY, BASE_URL } from '../../config';
import './Home.scss';

const HomePage = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [isTagsPanelOpen, setIsTagsPanelOpen] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);

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
        setFilteredPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (selectedTag) {
      setFilteredPhotos(
        photos.filter((photo) => photo.tags.includes(selectedTag))
      );
    } else {
      setFilteredPhotos(photos);
    }
  }, [selectedTag, photos]);

  return (
    <main className="content">
      <section className="content__body">
        <Hero />
        <div className="content__container">
          {filteredPhotos.length > 0 ? (
            filteredPhotos.map((photo) => (
              <Link
                key={photo.id}
                to={`/photo/${photo.id}`}
                className="photo-card"
              >
                <Photos photo={photo} />
              </Link>
            ))
          ) : (
            <p>No photos match this filter.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
