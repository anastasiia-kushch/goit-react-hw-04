import { useState, useEffect } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import { fetchGallery } from '../gallery-api';
import SearchBar from '../SearchBar/SearchBar';
import css from '../App/App.module.css';
import ErrorMessage, { tryAgain } from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import Modal from "react-modal";


function App() {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  Modal.setAppElement('#root');

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getData() {
      try {
        setError(false);
        setLoading(true);
        const fetchedPhotos = await fetchGallery(query, page);
        if (fetchedPhotos.results.length === 0) {
          tryAgain();
          return;
        }
        setPhotos((prevData) => {
          return [...prevData, ...fetchedPhotos.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [page, query]);

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={css.div}>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery gallery={photos} onClick={openModal} />
      )}
      {photos.length > 0 && !isLoading && (
        <button onClick={handleLoadMore} className={css.button}>
          Load more
        </button>
      )}
      {isLoading && <p className={css.p}>Loading gallery...</p>}
      <ImageModal
        isOpen={modalIsOpen}
        image={selectedImage}
        onCloseClick={closeModal}
      />
    </div>
  );
}

export default App;
