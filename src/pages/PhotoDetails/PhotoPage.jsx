import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Like_Outline from '../../assets/images/Icons/Like_Outline.svg';
import { API_KEY, BASE_URL } from '../../config';
import './PhotoPage.scss';

const PhotoPage = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    const fetchPhotoDetails = async () => {
      try {
        const photoResponse = await axios.get(`${BASE_URL}photos/${id}?api_key=${API_KEY}`);
        setPhoto(photoResponse.data);

        const commentResponse = await axios.get(
          `${BASE_URL}photos/${id}/comments?api_key=${API_KEY}`
        );
        setComments(commentResponse.data.reverse());
      } catch (error) {
        console.error('Error fetching photo details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotoDetails();
  }, [id]);

  const handleCommentSubmit = async e => {
    e.preventDefault();
    if (!name || !newComment) {
      setInputError(true);
      return;
    }
    try {
      await axios.post(`${BASE_URL}photos/${id}/comments?api_key=${API_KEY}`, {
        name,
        comment: newComment,
      });
      setInputError(false);
      setNewComment('');
      setName('');

      const response = await axios.get(`${BASE_URL}photos/${id}/comments?api_key=${API_KEY}`);
      setComments(response.data.reverse());
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };
  return (
    <div className="photos-section">
      {loading ? (
        <p>Loading photo details...</p>
      ) : photo ? (
        <div className="photos-section__container">
          <div className="photos-section__card">
            <img className="photos-section__image" src={photo.photo} alt={photo.photoDescription} />
            <div className="photos-section__tags">
              {photo.tags.map(tag => {
                return <div className="photo-single__tag">{tag}</div>;
              })}
            </div>
            <div className="photos-section__social">
              <div className="photos-section__info">
                <p className="photos-section__likes">
                  <img src={Like_Outline} />
                  {photo.likes} likes
                </p>
                <p className="photos-section__photographer mobile">
                  Photo by: {photo.photographer}
                </p>
              </div>
              <p className="photos-section__photographer desktop">Photo by: {photo.photographer}</p>
              {photo.timestamp && (
                <p className="photo__date">{new Date(photo.timestamp).toLocaleDateString()}</p>
              )}
            </div>
          </div>
          <div className="photos__form">
            <form className="photos__comment-form" onSubmit={handleCommentSubmit}>
              <div className="form">
                <div className="form__name">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your Name"
                    className={`inputvalid ${inputError && 'inputvalid--error'}`}
                  />
                </div>
                <div className="form__comment">
                  <label for="comment">Comment</label>
                  <textarea
                    value={newComment}
                    onChange={e => setNewComment(e.target.value)}
                    placeholder="Your Comment"
                    className={`inputvalid ${inputError && 'inputvalid--error'}`}
                  />
                </div>
                <button className="form__button" type="submit">
                  Submit
                </button>
              </div>
            </form>
            <h2 className="photos__comments-title">{comments.length} Comments</h2>
            <hr />
            <div className="photos__comments-comment">
              <ul className="photo__comments-list">
                {comments.map(comment => (
                  <li key={comment.id} className="photo__comment-item">
                    <div className="photo__comment-header">
                      <strong className="photo__comment-name">{comment.name}</strong>
                      <span className="photo__comment-date">
                        {new Date(comment.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="comment-text">{comment.comment}</p>
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
