import './Photos.scss';

const Photos = ({ photo }) => {
  return (
    <div className="photos__container">
      <h2>{photo.title}</h2>
      <img
        className="photos__image"
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
    // <div>
    //   {photo && (
    //     <div className="photos__container">
    //       <h2 className="">{photo.title}</h2>
    //       <img
    //         className="photos__image"
    //         src={photo.photo}
    //         alt={photo.photoDescription}
    //       />

    //       <p className="photos__author">Photographer: {photo.photographer}</p>
    //       {photo.tags.map((tag) => (
    //         <p>{tag}</p>
    //       ))}
    //     </div>
    //   )}
    // </div>
  );
};

export default Photos;
