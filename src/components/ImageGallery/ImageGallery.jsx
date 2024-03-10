import ImageCard from '../ImageCard/ImageCard';
import css from '../ImageGallery/ImageGallery.module.css'

export default function ImageGallery({ gallery, openModal }) {
  return (
    <ul className={css.div}>
      {gallery.map((photo) => {
        return (
          <li key={photo.id}>
            <ImageCard photo={photo} onOpen={openModal}/>
          </li>
        )
      })}
    </ul>
  );
}
