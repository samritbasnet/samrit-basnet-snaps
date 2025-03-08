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
        const photoResponse = await axios.get(
          `${BASE_URL}photos/${id}?api_key=${API_KEY}`
        );
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

      const response = await axios.get(
        `${BASE_URL}photos/${id}/comments?api_key=${API_KEY}`
      );
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
          <p>Photo by: {photo.photographer}</p>
          <p>{photo.tags}</p>
          <p>
            <img src={Like_Outline} />
            {photo.likes}
          </p>
          {photo.timestamp && (
            <p>{new Date(photo.timestamp).toLocaleDateString()}</p>
          )}

          <h2>Comments</h2>
          {comments.length > 0 ? (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>
                  <strong>{comment.name}:</strong> {comment.comment}{' '}
                </li>
              ))}
            </ul>
          ) : (
            <p>No comments yet.</p>
          )}

          <h3>Add a Comment</h3>
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
        </div>
      ) : (
        <p>Error loading photo details. Please try again.</p>
      )}
    </div>
  );
};

export default PhotoPage;
