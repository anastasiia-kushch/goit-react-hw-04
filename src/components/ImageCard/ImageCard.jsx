import css from '../ImageCard/ImageCard.module.css'

export default function ImageCard({ photo, onOpen }) {
  return (
    <div>
      <img className={css.img}
         src={photo.urls.small}
         alt={photo.description}
         onClick={() => onOpen(photo)}
        />
    </div>
  );
}
