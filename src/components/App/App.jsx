import { useEffect, useState } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import toast, { Toaster } from 'react-hot-toast';
import ImageGallery from '../ImageGallery/ImageGallery';

import { fetchGallery } from '../gallery-api';

const warning = () => {
  toast.error('Please enter a searchquery', {
    duration: 2000,
    icon: '⚠️',
  });
};

function App() {
  const [searchquery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (searchquery === '') {
      warning();
      return;
    }

    async function getData() {
      try {
        const data = await fetchGallery(searchquery,page);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data]
        });

      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, [searchquery, page]);

  const handleSearch = (newQuery) => {
    setSearchQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Toaster />
      <ImageGallery />
    </>
  );
}

export default App;
