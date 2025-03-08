import './Photos.scss';
import Tags from '../Tags/Tags';

const Photos = ({ photo }) => {
  return (
    <div className="photos__container">
      <img
        className="photos__photo"
        src={photo.photo}
        alt={photo.photoDescription}
      />
      <p className="photos__author">Photographer:{photo.photographer}</p>
      <div className="photos__tags">
        {photo.tags.map((tag, index) => (
          <span key={index} className="photos__tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Photos;
