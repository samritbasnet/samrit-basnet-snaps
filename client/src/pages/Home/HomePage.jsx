import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Photos from '../../components/Gallery/Photos';
import Hero from '../../components/Hero/Hero';
import Tags from '../../components/Tags/Tags';
import {  BASE_URL } from '../../config';
import './HomePage.scss';

const HomePage = ({ isTagsPanelOpen }) => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}photos`);
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
      setFilteredPhotos(photos.filter((photo) => photo.tags.includes(selectedTag)));
    } else {
      setFilteredPhotos(photos);
    }
  }, [selectedTag, photos]);
  return (
    <div className="hompage">
      <section className="homepage__body">
        {isTagsPanelOpen ? (
          <Tags selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
        ) : undefined}

        <div className="homepage__container">
          <Hero />
          {filteredPhotos.length > 0 ? (
            filteredPhotos.map((photo) => (
              <div
                className={`homepage__photoslist ${
                  isTagsPanelOpen && 'homepage__photoslist--open'
                }`}
                key={photo.id}
              >
                <Link to={`/photo/${photo.id}`} className="homepage__card">
                  <Photos photo={photo} />
                </Link>
              </div>
            ))
          ) : (
            <p>No photos match this filter.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
