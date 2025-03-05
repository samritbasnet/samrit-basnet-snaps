// import { axios } from 'axios';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './PhotoPage.scss';

// const PhotoPage = () => {
//   const { id } = useParams();
//   const [photo, setPhoto] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPhotoData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=3192b097-ba0d-4920-91c1-05f6a8b5c112`
//         );
//         setPhoto(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError('Error fetching photo');
//         setLoading(false);
//       }
//     };
//     fetchPhotoData();
//   }, [id]);

//   // if (loading) {
//   //   return <div>Loading...</div>

//   // }
//   // if (error) {
//   //   return <div>{error}</div>
//   // }
//   // return (

//   // }
//   // )
// };
// export default PhotoPage;
