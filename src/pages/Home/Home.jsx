import axios from 'axios';
import { useEffect, useState } from 'react';
import Photos from '../../components/Gallery/Photos';
import Tags from '../../components/Tags/Tags';
import './Home.scss';
import { API_KEY, BASE_URL } from '../../config';

const HomePage = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [photosData, setPhotosData] = useState([]);

    const togglePanelOpen = () => {
      setIsTagsPanelOpen((prev) => !prev);
    };
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`'https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=3192b097-ba0d-4920-91c1-05f6a8b5c112'`);
        setPhotosData(response.data.results);
      } catch (error) {
        console.error(error);
      }
      getData()
    }
  }, []);
  return (
    <main className='content'>
      {setIsTagsPanelOpen && (
        
      )}
  </main>
  );
};
export default HomePage;
