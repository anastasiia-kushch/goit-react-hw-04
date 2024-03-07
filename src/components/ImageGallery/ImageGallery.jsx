import ImageCard from '../ImageCard/ImageCard';
import css from '../ImageGallery/ImageGallery.module.css'

export default function ImageGallery({ gallery }) {
  return (
    <ul className={css.div}>
      {gallery.map((photo) => {
        return (
          <li key={photo.id}>
            <ImageCard  src={photo.urls.small} alt={photo.alt_description} />
          </li>
        )
      })}
    </ul>
  );
}
