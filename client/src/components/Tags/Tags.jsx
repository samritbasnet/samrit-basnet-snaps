import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../../config';
import './Tags.scss';

const Tags = ({ selectedTag, setSelectedTag }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get(`${BASE_URL}tags?api_key=${API_KEY}`);
        setTags(response.data); 
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };

    fetchTags();
  }, []);

  return (
    <div className="tags-panel-open">
      <div className="tags__panel">
        <h2 className="tags__heading">Filters</h2>
        <div className="tags__group">
          {tags.length > 0 ? (
            tags.map((tag, index) => (
              <p
                key={index}
                className={`tags-panel__tag ${
                  selectedTag === tag ? 'tags-panel__tag--selected' : ''
                }`}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              >
                {tag}
              </p>
            ))
          ) : (
            <p>Loading tags...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tags;
