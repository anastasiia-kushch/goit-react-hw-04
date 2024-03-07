import axios from 'axios';
import { useEffect, useState } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import { fetchGallery } from '../gallery-api';
import SearchBar from '../SearchBar/SearchBar';

// import SearchBar from '../SearchBar/SearchBar';

// import ImageGallery from '../ImageGallery/ImageGallery';

// import { fetchGallery } from '../gallery-api';

function App() {
  const [photos, setPhotos] = useState([]);
  // const [query, setQuery] = useState('');

  const handleSearch = async (newQuery) => {
    console.log(newQuery);
    const fetchedPhotos = await fetchGallery(newQuery);
    console.log(fetchedPhotos);
    setPhotos(fetchedPhotos);
  };

  // useEffect(() => {
  //   async function getPhotos() {

  //   }

  //   getPhotos();
  // }, []);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {photos.length > 0 && <ImageGallery photos={photos} />}
    </div>
  );
}

export default App;
