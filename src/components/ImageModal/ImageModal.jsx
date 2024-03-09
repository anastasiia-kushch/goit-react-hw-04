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
                <h4>{image.description}</h4>
              </div>
          )}
        </div>
      </Modal>
  );
}
