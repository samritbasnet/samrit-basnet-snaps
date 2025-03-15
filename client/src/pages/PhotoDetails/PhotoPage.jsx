import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Like_Outline from '../../assets/images/Icons/Like_Outline.svg';
import { BASE_URL } from '../../config';
import './PhotoPage.scss';

const PhotoPage = () => {
  const { id } = useParams();
  const [photoData, setPhotoData] = useState({ photo: null, comments: [] });
  const [formData, setFormData] = useState({ name: '', newComment: '' });
  const [loading, setLoading] = useState(true);
  const [inputError, setInputError] = useState({ name: false, newComment: false });

  useEffect(() => {
    const fetchPhotoDetails = async () => {
      try {
        const [photoResponse, commentResponse] = await Promise.all([
          axios.get(`${BASE_URL}photos/${id}`),
          axios.get(`${BASE_URL}photos/${id}/comments`),
        ]);

        setPhotoData({
          photo: photoResponse.data,
          comments: commentResponse.data.reverse(),
        });
      } catch (error) {
        console.error('Error fetching photo details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotoDetails();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const errors = {
      name: !formData.name,
      newComment: !formData.newComment,
    };
    setInputError(errors);

    if (errors.name || errors.newComment) return;

    try {
      await axios.post(`${BASE_URL}photos/${id}/comments`, {
        author: formData.name,
        text: formData.newComment,
      });
      setFormData({ name: '', newComment: '' });
      setInputError({ name: false, newComment: false });

      const response = await axios.get(`${BASE_URL}photos/${id}/comments?api_key=${API_KEY}`);
      setPhotoData((prevData) => ({ ...prevData, comments: response.data.reverse() }));
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setInputError({ ...inputError, [e.target.name]: false });
  };

  return (
    <div className="photos-section">
      {loading ? (
        <p>Loading photo details...</p>
      ) : photoData.photo ? (
        <div className="photos-section__container">
          <div className="photos-section__card">
            <img
              className="photos-section__image"
              src={photoData.photo.photo}
              alt={photoData.photo.photoDescription}
            />
            <div className="photos-section__tags">
              {photoData.photo.tags.map((tag, index) => (
                <div key={index} className="photo-single__tag">
                  {tag}
                </div>
              ))}
            </div>
            <div className="photos-section__social">
              <div className="photos-section__info">
                <p className="photos-section__likes">
                  <img src={Like_Outline} alt="Like" />
                  {photoData.photo.likes} likes
                </p>
                <p className="photos-section__photographer mobile">
                  Photo by: {photoData.photo.photographer}
                </p>
              </div>
              <p className="photos-section__photographer desktop">
                Photo by: {photoData.photo.photographer}
              </p>
              {photoData.photo.timestamp && (
                <p className="photo__date">
                  {new Date(photoData.photo.timestamp).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
          <div className="photos__form">
            <form className="photos__comment-form" onSubmit={handleCommentSubmit}>
              <div className="form">
                <div className="form__name">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className={`inputvalid ${inputError.name ? 'inputvalid--error' : ''}`}
                  />
                  {inputError.name && <p className="error-text">Name is required.</p>}
                </div>
                <div className="form__comment">
                  <label htmlFor="newComment">Comment</label>
                  <textarea
                    name="newComment"
                    value={formData.newComment}
                    onChange={handleInputChange}
                    placeholder="Your Comment"
                    className={`inputvalid ${inputError.newComment ? 'inputvalid--error' : ''}`}
                  />
                  {inputError.newComment && <p className="error-text">Comment is required.</p>}
                </div>
                <button className="form__button" type="submit">
                  Submit
                </button>
              </div>
            </form>
            <h2 className="photos__comments-title">{photoData.comments.length} Comments</h2>
            <hr />
            <div className="photos__comments-comment">
              <ul className="photo__comments-list">
                {photoData.comments.map((comment) => (
                  <li key={comment.id} className="photo__comment-item">
                    <div className="photo__comment-header">
                      <strong className="photo__comment-name">
                        {comment.name || comment.author}
                      </strong>
                      <span className="photo__comment-date">
                        {new Date(comment.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="comment-text">{comment.comment || comment.text}</p>
                    <hr className="photo__divider" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <p className="photo__error">Error loading photo details. Please try again.</p>
      )}
    </div>
  );
};

export default PhotoPage;
