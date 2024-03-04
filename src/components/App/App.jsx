import axios from 'axios';
import { useEffect, useState } from 'react';

// import SearchBar from '../SearchBar/SearchBar';
// import toast, { Toaster } from 'react-hot-toast';
// import ImageGallery from '../ImageGallery/ImageGallery';

// import { fetchGallery } from '../gallery-api';

// const warning = () => {
//   toast.error('Please enter a searchquery', {
//     duration: 2000,
//     icon: '⚠️',
//   });
// };

function App() {
  useEffect(() => {
    async function getPhotos() {
      const response = await axios.get('https://api.unsplash.com/photos?client_id=WW6X1WrQmuJ-vE6R1rS70UQJ-uUsrM_fhzZ5r0cwV74');

      const data = await response.data;
      console.log(data);
    }

    getPhotos();
  }, []);

  return <></>;
}

export default App;
