import Modal from 'react-modal';
import css from '../ImageModal/ImageModal.module.css'

export default function ImageModal ({ isOpen, image, onCloseClick }) {
  return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onCloseClick}
        overlayClassName={css.backdrop}
        className={css.modal}
      >
        <div className={css.modalcontainer}>
          {image && (
              <div className={css.imgContainer}>
                <img
                  src={image.urls.regular}
                  alt={image.description}
                  className={css.image}
                />
                <h2 className={css.text}>Likes: {image.likes}</h2>
              </div>
          )}
        </div>
      </Modal>
  );
}
