import { useState } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Photos from "./components/Gallery/Photos";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Tags from "./components/Tags/Tags";

function App() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [isTagsPanelOpen, setIsTagsPanelOpen] = useState(false);
  const togglePanelOpen = () => {
    setIsTagsPanelOpen((prev) => !prev);
  };
  return (
    <>
      <Navbar togglePanelOpen={togglePanelOpen} />

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
    </>
  );
}
export default App;
