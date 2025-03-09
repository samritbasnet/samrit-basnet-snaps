import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Arrow from '../../assets/images/Icons/Arrow.svg';
import Like_Outline from '../../assets/images/Icons/Like_Outline.svg';
import { API_KEY, BASE_URL } from '../../config';
import './PhotoPage.scss';

const PhotoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);

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

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!name || !newComment) return;

    try {
      await axios.post(`${BASE_URL}photos/${id}/comments?api_key=${API_KEY}`, {
        name,
        comment: newComment,
      });

      setNewComment('');
      setName('');

      const response = await axios.get(`${BASE_URL}photos/${id}/comments?api_key=${API_KEY}`);
      setComments(response.data.reverse());
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <div>
      <div className="photo-page__nav">
        <ul>
          <img
            src={Arrow}
            alt="Back to Home"
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          />
          <li onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            Home
          </li>
        </ul>
      </div>
      {loading ? (
        <p>Loading photo details...</p>
      ) : photo ? (
        <div>
          <img src={photo.photo} alt={photo.photoDescription} />
          <p>{photo.tags}</p>
          <p>Photo by: {photo.photographer}</p>

          <p>
            <img src={Like_Outline} />
            {photo.likes}
          </p>
          {photo.timestamp && <p>{new Date(photo.timestamp).toLocaleDateString()}</p>}
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
            />
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Your Comment"
              required
            />
            <button type="submit">Submit</button>
          </form>
          <h2>{comments.length} Comments</h2>
          <hr />
          <ul className="comments-list">
            {comments.map((comment) => (
              <li key={comment.id} className="comment-item">
                <div className="comment-header">
                  <strong className="comment-name">{comment.name}</strong>
                  <span className="comment-date">
                    {new Date(comment.timestamp).toLocaleDateString()}
                  </span>
                </div>
                <p className="comment-text">{comment.comment}</p>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Error loading photo details. Please try again.</p>
      )}
    </div>
  );
};

export default PhotoPage;
