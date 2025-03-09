import './Photos.scss';

const Photos = ({ photo }) => {
  return (
    <div className="photos__container">
      <div className="photos__card">
        <img className="photos__photo" src={photo.photo} alt={photo.photoDescription} />
        <p className="photos__author">{photo.photographer}</p>
      </div>

      <div className="photos__tags">
        {photo.tags.map((tag, index) => (
          <span key={index} className="photos__tag ">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Photos;
