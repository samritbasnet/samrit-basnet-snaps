import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PhotoPage = ({ photos }) => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchPhotoDetails = async () => {
      try {
        const photoResponse = await axios.get(
          `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}`
        );
        setPhoto(photoResponse.data);

        const commentResponse = await axios.get(
          `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments`
        );
        setComments(commentResponse.data);
      } catch (error) {
        console.error(`Error fetching data:`, error);
      }
    };
    fetchPhotoDetails();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !newComment.trim()) return;

    try {
      await axios.post(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments`,
        {
          name,
          body: newComment,
        }
      );

      setNewComment('');
      setName('');

      // Fetch updated comments
      const response = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments`
      );
      setComments(response.data);
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <div>
      {photo ? (
        <div>
          <h2>{photo.title}</h2>
          <img src={photo.photo} alt={photo.photoDescription} />
          <p>{photo.photoDescription}</p>
          <p>Photographer: {photo.photographer}</p>
          <p>Date: {new Date(photo.date).toLocaleDateString()}</p>

          <h2>Comments</h2>
          {comments.length > 0 ? (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>
                  <strong>{comment.name}:</strong> {comment.body}
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
        <p>Loading photo details...</p>
      )}
    </div>
  );
};

export default PhotoPage;
