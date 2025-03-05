import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PhotoPage = ({ photos }) => {
  const { id } = useParams(); // Get the photoId from the URL
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');

  // useEffect(() => {
  //   const foundPhoto = photos.find((photo) => photo.id === parseInt(id));
  //   setPhoto(foundPhoto);

  //   const fetchComments = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${:id}/comments`
  //       );
  //       setComments(response.data);
  //     } catch (error) {
  //       console.error('Error fetching comments');
  //     }
  //   };

  //   fetchComments();
  // }, [id, photos]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
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

      const response = await axios.get(
        `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments`
      );
      setComments(response.data);
    } catch (error) {
      console.error('Error submitting comment');
    }
  };

  return (
    <div>
      {photo && (
        <div>
          <h2>{photo.title}</h2>
          <img src={photo.photo} alt={photo.photoDescription} />
          <p>{photo.photoDescription}</p>
          <p>Photographer: {photo.photographer}</p>
          <p>Date: {new Date(photo.date).toLocaleDateString()}</p>

          <h2>Comments</h2>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.name}:</strong> {comment.body}
              </li>
            ))}
          </ul>

          <h3>Add a Comment</h3>
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Your Comment"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PhotoPage;
