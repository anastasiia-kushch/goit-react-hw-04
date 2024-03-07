import css from '../ImageCard/ImageCard.module.css'

export default function ImageCard({ src, alt }) {
  return (
    <div>
      <img className={css.img}
          src={src}
          alt={alt}
        />
    </div>
  );
}
