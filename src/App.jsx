import { useState } from 'react';
import './App.scss';
import Photos from "./components/Gallery/Photos";
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Tags from './components/Tags/Tags';

function App() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [isTagsPanelOpen, setIsTagsPanelOpen] = useState(false);
  const togglePanelOpen = () => {
    setIsTagsPanelOpen((prev) => !prev);
  };

  // const filteredPhotos=selectedTag ? photosData.filter((photo)=>photo.tags.includes(selectedTag)) : photosData;
  return (
    <>
         <Navbar togglePanelOpen={togglePanelOpen} />
  
      {isTagsPanelOpen && (
        <Tags selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      )}
              <Hero/>
      <Photos selectedTag={selectedTag} isTagsPanelOpen={isTagsPanelOpen}/>

    </>
  );

}
export default App;
