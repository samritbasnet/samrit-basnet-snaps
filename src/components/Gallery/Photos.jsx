import photos from "../../Data/photos.json";
import "./Photos.scss";

const Photos = ({ selectedTag, isTagsPanelOpen }) => {
  const filteredPhotos = selectedTag
    ? photos.filter((photo) => photo.tags.includes(selectedTag))
    : photos;

  console.log("istagspanels", isTagsPanelOpen);

  return (
    <div className={`photos ${isTagsPanelOpen ? "with-tags-open" : ""}`}>
      {filteredPhotos.map((photo) => (
        <article
          className={`photos__photo ${
            isTagsPanelOpen ? "photos__photo--open" : ""
          }`}
          key={photo.id}
        >
          <div className="photos__container">
            <img
              className="photos__image"
              src={photo.photo}
              alt={photo.photoDescription}
            />
            <div className="photos__author">
              <p>{photo.photographer}</p>
            </div>
          </div>
          <div className="photos__tags">
            {photo.tags.map((tag, index) => (
              <p className="photos__tags--label" key={index}>
                {tag}
              </p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};
export default Photos;
